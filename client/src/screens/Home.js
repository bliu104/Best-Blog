import React, { Component } from 'react'
// import TimeComponet from "../components/TimeComponet"
import { showRecipe } from "../services/api-helper"
import { filterTags } from "../components/FilterCat"

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  async componentDidMount() {
    const recipes = await showRecipe()
    this.setState({ recipes })
  }

  foodChoices = () => {
    const { recipes } = this.state
    const time = new Date()
    let food = '';
    let times = ''
    console.log(time.getHours())

    if (time.getHours() >= 22 || time.getHours() < 4) {
      food = "snack";
      times = "Middle of the Night"
    } else if (time.getHours() >= 4 && time.getHours() < 11) {
      food = "breakfast"
      times = "Morning"
    } else if (time.getHours() >= 11 && time.getHours() < 15) {
      food = "lunch";
      times = "Afternoon"
    } else if (time.getHours() >= 15 && time.getHours() < 22) {
      food = "dinner";
      times = "Evening"
    }

    console.log(food)

    const arrayRecipe = filterTags(recipes, food)
    const { history } = this.props
    return arrayRecipe.map(recipe => {
      return (
        <div onClick={() => history.push(`recipes/${recipe.id}`)} style={{ cursor: "pointer" }}>
          <div className="Recommended">
            <img src={recipe.image} />
            <div> {recipe.name}</div>
          </div>
        </div>
      )
    })
  }

  welcomeMessage = () => {
    if (this.props.currentUser) {
      const { currentUser } = this.props
      return (<div style={{ fontSize: "28px", textAlign: "left", paddingLeft: "35px" }}>
        Hello, {currentUser.name}
      </div>)
    } else {
      return <div>Loading</div>
    }
  }
  recommendationMessage = () => {
    const time = new Date()
    let times = ''
    if (time.getHours() >= 22 || time.getHours() < 4) {
      times = "a Midnight Snack"
    } else if (time.getHours() >= 4 && time.getHours() < 11) {
      times = "Breakfast"
    } else if (time.getHours() >= 11 && time.getHours() < 15) {
      times = "Lunch"
    } else if (time.getHours() >= 15 && time.getHours() < 22) {
      times = "Dinner"
    }

    return <div style={{ textAlign: "left", paddingLeft: "35px", fontSize: '30px', paddingTop: '25px' }}>Here's some recommendations for {times}</div>
  }

  news = () => {
    return (
      <div className='News'>
        <h1>THE LATEST</h1>
        <div className="article">
          <div className="articleText">
            <h2>Bobby ate too much frozen pizza during this Quarantine</h2>
            <p>Bobby ate like 6 frozen pizza in the last month, he blames it on the qurantine. The reality is that he really likes frozen pizza!</p>
          </div>
          <img src='https://assets3.thrillist.com/v1/image/2725860/size/gn-gift_guide_variable_c_2x.jpg' />
        </div>
        <div className="article">
          <div className="articleText">
            <h2>Guess What Happened to 5 Pound Bag of Gum Worms?!</h2>
            <p>A Strange 5 pound bag of gummy bag appeared in Bobby's house. It was probably purchase for easter! The sad fact is that there is probably less than a pound left. Bobby blames its on the Quarantine, but reality, its his will</p>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnG8XZSh0LS1Kxaf3Zfn_GwHpAdaLz5_YtUOjIdTqWU4YSXHTZ&usqp=CAU" />
        </div>
        <div className="article">
          <div className="articleText">
            <h2>Is Bobby Ever Going to Start his Project</h2>
            <p>Bobby once again is take multiple hour naps during project. Is he worried? Will he pass the course? Does he even Know what hes doing? Probably not! Hes just post many memes! What a guy! This is a food blog, but wherever!</p>
          </div>
          <img src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/apag6d7pfcbwxuzlgg3y.jpg" />
        </div>
        <div className="article">
          <div className="articleText">
            <h2>Will Bobby eat healthy? Will he go to the gym?!</h2>
            <p>Bobby again blames the Quarantine for his poor eating habits and midnight snacks? When ask when he will resume hes gym schedule, he masterfully dodged the question! What a guy!</p>
          </div>
          <img src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg" />
        </div>
      </div >
    )

  }
  render() {
    return (
      <div>
        {this.welcomeMessage()}
        {this.recommendationMessage()}
        <div className="RecommendTrack">
          <div className="RecommendContainer">{this.foodChoices()}</div>
        </div>
        {this.news()}
      </div>
    )
  }
}
