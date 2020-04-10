import React, { Component } from 'react'
import { showcomments, postcomment, destroycomment } from "../services/api-helper"
// import Destorycomment from "./Destorycomment"
import Createcomment from "./Createcomment"
import { MdDeleteForever } from 'react-icons/md';

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
    console.log(this.props.recipe_id.id)

  }

  // async componentDidMount() {
  //   console.log(this.props.id)
  //   const comment = await showcomments(this.props.id);
  //   console.log(comment)
  //   this.setState({ comment })
  //   console.log(this.state.comment.id)
  // }

  // destroy = () => {

  //   return (

  //     <button onClick={async () => {

  //       await destroycomment(this.props.id, this.state.comment.id)
  //       this.setState({ deleted: true, })
  //     }} style={{ borderRadius: "5px" }}>
  //       <MdDeleteForever style={{ fontSize: "20px" }} /></button>

  //   )
  // }

  getComments = () => {
    const { comment } = this.props
    if (comment && comment.length !== 0) {
      return (comment.map((comment) => {
        return (
          <>
            <hr />
            <div className="CommentDelete">
              <div>{comment.comment}</div>
              {/* <Destorycomment recipe_id={this.props.recipe_id.id} comment_id={comment.id} delete={this.state.deletedComment} destroy={this.destroy} /> */}
            </div>
          </>)
      }))
    } else if (comment.length === 0) {
      return <div>No comments</div>
    }
    else { return <div>Loading</div> }
  }

  // handler = async (e) => {
  //   e.preventDefault();
  //   const newComment = await postcomment(this.props.id, this.state.createComment);
  //   this.setState(prevState => ({
  //     createComment: [...prevState.comment, newComment]
  //   }))
  // }
  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     createComment: {
  //       ...prevState.createComment,
  //       [name]: value
  //     }
  //   }));
  // }

  render() {
    console.log(this.props)
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
