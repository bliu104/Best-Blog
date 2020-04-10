import React, { Component } from 'react'
import FilterNav from "./Filternav"
import { showRecipe } from '../services/api-helper'
import { filter } from "../components/FilterCat"
import Recipecard from "../components/Recipecard"

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


  filtering = () => {
    const { recipe } = this.state
    if (recipe) {
      return (
        filter(recipe, this.props.match.params.catagories).map(filtered => {
          return < Recipecard name={filtered.name} image={filtered.image} catagories={filtered.catagories} />
        })
      )
    } else { console.log("loading") }
  }

  render() {

    return (
      <div>
        <FilterNav />
        {this.filtering()}
      </div>
    )
  }
}
