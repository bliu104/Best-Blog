import React, { Component } from 'react'
import { showRecipe } from '../services/api-helper'
import Recipecard from '../components/Recipecard'
import Filternav from '../screens/Filternav'
import { filterTags } from '../components/FilterCat'

export default class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      input: ''
    }


  }

  async componentDidMount() {
    let recipes = await showRecipe()
    const endpoint = this.route_ends()
    if (endpoint !== '') {
      recipes = filterTags(recipes, this.route_ends())
    }
    this.setState({ recipes })
  }

  route_ends = () => {
    const results = this.props.location.search.split("=").pop();
    return results
  }

  createRecipeButton = () => {
    const { history, match, currentUser } = this.props;
    if (currentUser !== null) {
      return (
        <img src="https://previews.123rf.com/images/burntime555/burntime5551508/burntime555150800152/43641386-plus-circle-or-medicine-cross-flat-web-icon-or-sign-isolated-on-grey-background.jpg" className="CreateFoodButton" onClick={() => history.push(`${match.url}/Createrecipe`)} />
      )
    } else {
      return (
        <img src="https://previews.123rf.com/images/burntime555/burntime5551508/burntime555150800152/43641386-plus-circle-or-medicine-cross-flat-web-icon-or-sign-isolated-on-grey-background.jpg" className="CreateFoodButton" onClick={() => history.push(`/Signin`)} />
      )
    }
  }

  filter = () => {
    const { recipes, input } = this.state
    const filteredArray = (filterTags(recipes, input))
    this.setState({ recipes: filteredArray })
  }



  card = () => {
    const { history, match } = this.props;

    return this.state.recipes.map(recipe => {
      return (

        <div onClick={() => history.push(`${match.url}/${recipe.id}`)} style={{ cursor: "pointer" }}>
          <Recipecard
            id={recipe.id}
            name={recipe.name} tag={recipe.tag} catagories={recipe.catagories} how_to_make={recipe.how_to_make} image={recipe.image} ingredient={recipe.ingredient}

          />
        </div>

      )
    })
  }


  render() {
    return (
      <>
        <Filternav />
        <div>
          <form onSubmit={this.props.handleSubmitSearch} style={{ fontSize: "36px" }}>
            Search
            <input
              className="SearchBar"
              type="text"
              name='input'
              value={this.props.input}
              onChange={this.props.handleChangeSearch}
              style={{ marginLeft: "20px" }}
            />
          </form>
        </div>

        <div className="QuerySearchResults">
          Current searching '{this.route_ends()}', {this.state.recipes.length} result(s)
        </div>
        < div className='Card_Container' >
          {this.card()}
          {this.createRecipeButton()}
        </div >
      </>
    )
  }
}
