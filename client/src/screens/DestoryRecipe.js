import React, { Component } from 'react'
import { destroyRecipe } from '../services/api-helper'
import { Redirect } from "react-router-dom";

export default class DestoryRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }

  }
  destoryRecipeButton = () => {
    const { match } = this.props;
    return <button onClick={async () => {
      await destroyRecipe(match.params.id)
      this.setState({ deleted: true })
    }
    } > Delete
     </button >

  }

  render() {
    const { deleted } = this.state
    if (deleted) {
      return <Redirect
        to={{
          pathname: "/recipes",
          state: {
            msg: "Item succesfully Deleted!",
          }
        }}
      />
    }
    return (

      <div>
        Are you sure you want to delete this item?
        <div>{this.destoryRecipeButton()}</div>

      </div>
    )
  }
}
