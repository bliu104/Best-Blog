import React, { Component } from 'react'
import FilterNav from "./Filternav"
import { showRecipe } from '../services/api-helper'
import { filter } from "../components/FilterCat"

export default class FilterRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: "",

    }
  }
  async componentDidMount() {
    const recipe = await showRecipe()
    this.setState({ recipe })
  }

  createRecipeButton = () => {
    const { history, match } = this.props;
    return (
      <img src="https://previews.123rf.com/images/burntime555/burntime5551508/burntime555150800152/43641386-plus-circle-or-medicine-cross-flat-web-icon-or-sign-isolated-on-grey-background.jpg" className="CreateFoodButton" onClick={() => history.push(`recipes/Createrecipe`)} />
    )
  }

  renderRecipe = () => {
    const { recipe } = this.state
    const { history, match } = this.props
    if (recipe) {
      const filtered = filter(recipe, this.props.match.params.catagories)
      return filtered.map(recipe => {
        return (
          <div onClick={() => history.push(`recipes/${recipe.id}`)} style={{ cursor: "pointer" }}>
            <div className="Cards">
              <div> {recipe.name}</div>
              <div> {recipe.catagories}</div>
              <img src={recipe.image} />
            </div>
          </div >)
      })
    }
  }
  render() {

    return (
      <div>
        <FilterNav />
        <div className='Card_Container'>
          {this.renderRecipe()}
          {this.createRecipeButton()}
        </div>
      </div>
    )
  }
}
