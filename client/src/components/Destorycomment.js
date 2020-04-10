import React, { Component } from 'react'
import { destroycomment } from "../services/api-helper"
import { Redirect } from "react-router-dom";
import { MdDeleteForever } from 'react-icons/md';

export default class Destorycomment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    }
    console.log(props)
  }

  // destroy = () => {

  //   return (

  //     <button onClick={async () => {

  //       await destroycomment(this.props.recipe_id.id, this.props.comment_id)
  //       this.setState({ deleted: true, })
  //     }} style={{ borderRadius: "5px" }}>
  //       <MdDeleteForever style={{ fontSize: "20px" }} /></button>

  //   )
  // }

  render() {
    const { deleted } = this.state
    if (deleted) {
      return <Redirect
        to={{
          pathname: `/recipes`,
          state: {
            msg: "Item succesfully Deleted!",
          }
        }}
      />
    }
    return (
      <div>
        {this.destroy()}
      </div>
    )
  }
}
