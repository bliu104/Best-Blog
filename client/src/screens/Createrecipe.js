import React, { Component } from 'react'
import { postRecipe } from "../services/api-helper"
import { Redirect } from "react-router-dom";

export default class Createrecipe extends Component {
  constructor() {
    super()
    this.state = {
      createRecipe: {
        name: '',
        tag: '',
        catagories: '',
        ingredient: '',
        how_to_make: '',
        image: '',
        user_id: ''
      },
      created: false
    }
  }

  handler = async (e) => {
    e.preventDefault();
    const currentRecipe = await postRecipe(this.state.createRecipe);
    this.setState({ currentRecipe, created: true })

  }
  HandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      createRecipe: {
        ...prevState.createRecipe,
        [name]: value
      }
    }));
  }

  render() {
    const { createRecipe } = this.state
    if (this.state.created) {
      return <Redirect
        to={{
          pathname: "/recipes",
          state: {
            msg: "Item succesfully Created!",
          }
        }}
      />
    }
    return (
      <div className="auth-container">
        <h2>Register</h2>
        <hr />
        <form onSubmit={this.handler} >
          <p>Name:</p>
          <input name="name" type="text" value={createRecipe.name} onChange={this.HandleChange} />
          <p>Tag:</p>
          <input name="tag" type="text" value={createRecipe.tag} onChange={this.HandleChange} />
          <p>Catagories:</p>
          <input name="catagories" type="text" value={createRecipe.catagories} onChange={this.HandleChange} />
          <p>Ingredients:</p>
          <input name="ingredient" type="text" value={createRecipe.ingredient} onChange={this.HandleChange} />
          <p>Instructions:</p>
          <input name="how_to_make" type="text" value={createRecipe.how_to_make} onChange={this.HandleChange} />
          <p>Image:</p>
          <input name="image" type="text" value={createRecipe.Image} onChange={this.HandleChange} />
          <p>User:</p>
          <input name="user_id" type="text" value={createRecipe.user} onChange={this.HandleChange} />
          <hr />
          <button>Create!</button>
        </form>
      </div>
    );
  }
}
