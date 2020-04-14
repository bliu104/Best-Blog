import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { render } from '@testing-library/react';


class Signin extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="auth-container">
        <h2>login</h2>
        <hr />
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin();
        }} >
          <p>Username:</p>
          <input name="name" type="text" value={this.props.formData.name} onChange={this.props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
          <hr />
          <button>Login</button>
          <Link to="/Signup">Register</Link>
        </form>
      </div>
    );
  }
}

export default Signin
