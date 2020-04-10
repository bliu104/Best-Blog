import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
  constructor() {
    super()
  }

  unauthenticatedOptions = () => (
    <div className="Navstyle">
      < div className="links" >
        <NavLink className='Home' to="/">Home</NavLink>
        <NavLink className='Recipes' to="/recipes">Recipes</NavLink>
        <NavLink className='Signin' to="/Signin">SignIn</NavLink>
      </div>
    </div>
  )

  render() {
    return (
      <div>
        {this.unauthenticatedOptions()}
        <h1 className="Header">BOBBY's BEST FOOD BLOG</h1>
      </div>
    )
  }
}

