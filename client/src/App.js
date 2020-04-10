import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import Signin from './screens/Signin'


class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App" >
        <Container />
      </div>
    )
  }
}


export default App;
