import React, { Component } from 'react'
import { postcomment } from "../services/api-helper"
import { Redirect } from "react-router-dom"

export default class Createcomment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createComment: {
        comment: '',
        recipe_id: this.props.createComment.recipe_id,
        user_id: 1
      },
      created: false
    }

  }
  // handler = async (e) => {
  //   e.preventDefault();
  //   const createComment = await postcomment(this.props.id, this.state.createComment);
  //   this.setState({ createComment, created: true })

  // }
  // HandleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     createComment: {
  //       ...prevState.createComment,
  //       [name]: value
  //     }
  //   }));
  // }

  render() {

    // if (this.state.created) {
    // return <Redirect
    //   to={{
    //     pathname: `/recipes`,
    //     state: {
    //       msg: "Item succesfully Created!",
    //     }
    //   }}
    // />
    // }


    const { createComment } = this.state
    return (
      <div>
        <form onSubmit={this.props.handler}>
          <p>Comment:</p>
          <input name="comment" type="text" value={this.props.createComment.comment} onChange={this.props.handleChange} style={{
            width: "100%", height: "200px"
          }} />
          < button > Post!</button>
        </form>
      </div>
    )
  }
}
