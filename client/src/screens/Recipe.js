import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { showRecipeID, showcomments, postcomment, destroycomment } from "../services/api-helper"
import Commentcontainer from '../components/Commentcontainer'
import Filternav from "../screens/Filternav"
import { FiEdit2 } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';



export default class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: null,
      createComment: {
        comment: '',
        recipe_id: '',
        user_id: 1
      },
      comments: []
    }
  }


  async componentDidMount() {
    try {

      const recipe = await showRecipeID(this.props.match.params.id)
      this.setState({ recipe });
      this.getComments()
    } catch (err) {
      console.error(err);
    }
  }

  destroy = (comment_id) => {

    return (

      <button onClick={async () => {

        await destroycomment(this.state.recipe.id, comment_id)
        this.getComments()
      }} style={{ borderRadius: "5px" }}>
        <MdDeleteForever style={{ fontSize: "20px" }} /></button>
    )
  }

  getComments = async () => {
    const comments = await showcomments(this.state.recipe.id);
    this.setState({ comments: comments })
    console.log(comments)
  }

  handler = async (e) => {
    e.preventDefault();
    const newComment = await postcomment(this.state.recipe.id, this.state.createComment);
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment]
    }))

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      createComment: {
        ...prevState.createComment,
        [name]: value
      }
    }));
  }

  createButton = () => {
    const { history, match, currentUser } = this.props;
    if (currentUser !== null) {
      return (
        <button onClick={() => history.push(`${match.url}/EditRecipe`)} style={{ borderRadius: "5px" }}> <FiEdit2 style={{ fontSize: "25px" }} /> </ button>
      )
    } else {
      return (
        <button onClick={() => history.push(`/Signin`)} style={{ borderRadius: "5px" }}> <FiEdit2 style={{ fontSize: "25px" }} /> </ button>
      )
    }
  }


  deleteButton = () => {
    const { history, match } = this.props;
    return (<button onClick={() => history.push(`${match.url}/Delete`)} style={{ borderRadius: "5px" }} > <MdDeleteForever style={{ fontSize: "25px" }} /></ button>)
  }


  Info = () => {

    if (this.state.recipe) {
      const { recipe } = this.state
      const ingredientlist = this.state.recipe.ingredient.split(',').map((ingredient) => {
        return <li>{ingredient}</li>
      })
      const Instructionlist = this.state.recipe.how_to_make.split(',').map((ingredient) => {
        return <li>{ingredient}</li>
      })
      return (
        <div className='RecipeCard'>
          <div className="NameCreateDelete">
            <div className='Recipename'>{recipe.name}</div>
            <div className="CreateDelete">
              {this.createButton()}
              {this.deleteButton()}
            </div>
          </div>
          <hr />
          <div className="RecipeCat">{recipe.catagories}</div>
          <div className="Recipetag">{recipe.tag}</div>
          <img src={recipe.image} />
          <div style={{ fontSize: '24px', paddingTop: "10px" }}>Ingredients</div>
          <hr />
          <ul>{ingredientlist}</ul>
          <hr />
          <div style={{ fontSize: '24px', paddingBottom: "10px" }}>Instructions</div>
          <ul>{Instructionlist}</ul>
          <br />
        </div >
      )
    } else {
      return ('loading')
    }
  }

  passingCommentcontainer = () => {
    if (this.state.recipe) {
      return <Commentcontainer id={this.props.match.params.id} handleChange={this.handleChange} handler={this.handler} recipe_id={this.state.recipe} comment={this.state.comments} createComment={this.state.createComment} destroy={this.destroy} />
    }
  }
  render() {

    return (
      <div>
        <Filternav />
        {this.Info()}
        {this.passingCommentcontainer()}

      </div>
    )
  }
}

