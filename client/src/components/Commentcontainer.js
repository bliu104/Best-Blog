import React, { Component } from 'react'
import { showcomments, postcomment, destroycomment } from "../services/api-helper"
import Createcomment from "./Createcomment"


export default class Commentcontainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createComment: {
        comment: '',
        recipe_id: this.props.id,
        user_id: 1
      },
      comment: "",
      deletedComment: false
    }
  }

  getComments = () => {
    const { comment } = this.props
    if (comment && comment.length !== 0) {
      return (comment.map((comment) => {
        return (
          <>
            <hr />
            <div className="CommentDelete">
              <div>{comment.comment}</div>
              {this.props.destroy(comment.id)}
            </div>
          </>)
      }))
    } else if (comment.length === 0) {
      return <div>No comments</div>
    }
    else { return <div>Loading</div> }
  }

  render() {
    return (
      <div className="Commentcard">
        <hr />
        <div style={{ fontSize: "24px", paddingBottom: "10px" }}>
          Comments
        </div>

        {this.getComments()}
        <hr />
        <Createcomment id={this.props.recipe_id.id} handler={this.props.handler} handleChange={this.props.handleChange} createComment={this.props.createComment} />
      </div>
    )
  }
}
