import React, { Component } from 'react'

export default class Recipecard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: props
    }
  }


  render() {
    const { card } = this.state
    return (
      <div className="Cards">
        <div>Food: {card.name}</div>
        <div>Catagory: {card.catagories}</div>
        <img src={card.image} />
      </div>
    )
  }
}
