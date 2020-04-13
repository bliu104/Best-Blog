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
    // this.renderRecipe
  }

  createRecipeButton = () => {
    const { history, match } = this.props;
    return (
      <img src="https://previews.123rf.com/images/burntime555/burntime5551508/burntime555150800152/43641386-plus-circle-or-medicine-cross-flat-web-icon-or-sign-isolated-on-grey-background.jpg" className="CreateFoodButton" onClick={() => history.push(`recipes/Createrecipe`)} />
    )
  }


  // filtering = () => {
  //   const { recipe } = this.state
  //   if (recipe) {
  //     return (
  //       filter(recipe, this.props.match.params.catagories)
  //         .map(filtered => {
  //           return < Recipecard name={filtered.name} image={filtered.image} catagories={filtered.catagories} />
  //         })
  //     )
  //   } else { console.log("loading") }
  // }

  renderRecipe = () => {
    const { recipe } = this.state
    const { history, match } = this.props
    if (recipe) {
      const filtered = filter(recipe, this.props.match.params.catagories)
      console.log(filtered)
      return filtered.map(recipe => {
        console.log(recipe)
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
        {/* {this.filtering()} */}
        <div className='Card_Container'>
          {this.renderRecipe()}
          {this.createRecipeButton()}
        </div>
      </div>
    )
  }
}
