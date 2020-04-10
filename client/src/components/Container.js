import React, { Component } from 'react'
// import Recipes from "../screens/Recipes"
import Index from "../Routes/Index";
import Header from "../screens/Header"
import { Route } from "react-router-dom";

export default class Container extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <>
        <Header />
        <Index />
      </>
    )
  }
}
