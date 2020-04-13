import React, { Component } from 'react'
import { showRecipe } from '../services/api-helper'
import Recipecard from '../components/Recipecard'
import Filternav from '../screens/Filternav'

export default class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }

  }

  createRecipeButton = () => {
    const { history, match } = this.props;
    return (
      <img src="https://previews.123rf.com/images/burntime555/burntime5551508/burntime555150800152/43641386-plus-circle-or-medicine-cross-flat-web-icon-or-sign-isolated-on-grey-background.jpg" className="CreateFoodButton" onClick={() => history.push(`${match.url}/Createrecipe`)} />
    )
  }

  async componentDidMount() {
    this.setState({ recipes: await showRecipe() })
  }

  card = () => {
    const { history, match } = this.props;

    return this.state.recipes.map(recipe => {

      console.log(match.url)
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
        < div className='Card_Container' >
          {this.card()}
          {this.createRecipeButton()}
        </div >
      </>
    )
  }
}
