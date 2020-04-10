import React, { Component } from 'react'
import { showRecipeID } from '../services/api-helper'
import { putRecipe } from '../services/api-helper'
import { Redirect } from "react-router-dom";

export default class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: '',
        tag: '',
        catagories: '',
        ingredient: '',
        how_to_make: '',
        image: '',
        user_id: ''
      },
      updated: false
    }
  }

  async componentDidMount() {
    const recipe = await showRecipeID(this.props.match.params.id)
    this.setState({ recipe })
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedRecipe = Object.assign(this.state.recipe, updatedField);

    this.setState({ recipe: editedRecipe });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.recipe)
    putRecipe(this.state.recipe, this.props.match.params.id)
      .then(() => this.setState({ updated: true }))
      .catch(console.error);
  };

  render() {
    const { recipe, updated } = this.state;
    const { handleChange, handleSubmit } = this

    if (updated) {
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
      <div >
        <form onSubmit={handleSubmit} className="EditRecipe">
          <label>Name</label>
          <input

            value={recipe.name}
            name='name'
            required
            onChange={handleChange}
          />

          <label>tag</label>
          <input

            value={recipe.tag}
            name='tag'
            required
            onChange={handleChange}
          />

          <label>Catagories </label>
          <input

            value={recipe.catagories}
            name='catagories'
            required
            onChange={handleChange}
          />

          <label>ingredient</label>
          <input

            value={recipe.ingredient}
            name='ingredient'
            required
            onChange={handleChange}
          />

          <label>Instructions</label>
          <input

            value={recipe.how_to_make}
            name='how_to_make'
            required
            onChange={handleChange}
          />

          <label>Image</label>
          <input

            value={recipe.image}
            name='image'
            required
            onChange={handleChange}
          />
          <label>user</label>
          <input

            value={recipe.user_id}
            name='user_id'
            required
            onChange={handleChange}
          />

          <button type='submit' className='danger'>Submit</button>


        </form>
      </div>
    )
  }
}
