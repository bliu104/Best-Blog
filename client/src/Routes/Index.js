import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Recipes from '../screens/Recipes'
import Recipe from '../screens/Recipe'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'
import Createrecipe from "../screens/Createrecipe"
import EditRecipe from '../screens/EditRecipe'
import DestoryRecipe from '../screens/DestoryRecipe'
import { loginUser, verifyUser } from '../services/api-helper'
import FilterRecipe from "../screens/FilterRecipe"


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authFormData: {
        name: null,
        password: ""

      },
      currentUser: null,
      deletedrecipe: false,
      input: ''
    }
  }

  componentDidMount = () => {
    this.handleVerify();
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }


  render() {
    const { currentUser } = this.state
    return (
      <div>
        <Switch >
          <Route
            exact
            path="/"
            render={props => <Home {...props} currentUser={currentUser} />}
          />
          <Route
            exact
            path="/recipes"
            render={props => <Recipes {...props} />}
          />
          <Route
            exact
            path="/recipes/Createrecipe"
            render={props => <Createrecipe {...props} />}
          />
          <Route
            exact
            path="/recipes/:id"
            render={props => <Recipe {...props} currentUser={this.state.currentUser} />}
          />
          <Route exact path="/Signin" render={() => (
            <Signin
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)}
          />
          <Route
            exact
            path="/Signup"
            render={props => <Signup {...props} />}
          />
          <Route
            exact
            path="/recipes/:id/EditRecipe"
            render={props => <EditRecipe {...props} />}
          />
          <Route
            exact
            path="/recipes/:id/Delete"
            render={(props) => (
              <DestoryRecipe deletedrecipe={this.state.deletedrecipe} {...props} />
            )} />
          <Route
            exact
            path="/:catagories"
            render={props => <FilterRecipe {...props} />}
          />

        </Switch>
      </div>
    )
  }
}

