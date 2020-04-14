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
  }
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

      </div>
    )
  }
}
