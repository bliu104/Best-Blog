import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Filternav extends Component {
  constructor() {
    super();

  }

  routes = () => (
    <div className="CatNavstyle">
      < div className="Catlinks" >
        <NavLink className='AllRecipes' to="/recipes" >All Recipes</NavLink>
        <NavLink className='Breakfast' to="/Breakfast">Breakfast</NavLink>
        <NavLink className='Lunch' to="/Lunch">Lunch</NavLink>
        <NavLink className='Dinner' to="/Dinner">Dinner</NavLink>
        <NavLink className='Snack' to="/Snack">Snack</NavLink>
        <NavLink className='Dessert' to="/Dessert">Dessert</NavLink>
      </div>
    </div>
  )
  render() {
    return (
      <div>
        {this.routes()}
      </div>
    )
  }
}
