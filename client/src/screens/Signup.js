import React, { Component } from 'react';
import { registerUser } from '../services/api-helper'

// This component handles our register form
class Register extends Component {
  constructor() {
    super();
    this.state = {
      authFormData: {
        name: "",
        email: "",
        password: ""
      }
    }
  }
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
  }
  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    const { authFormData } = this.state
    return (
      <div className="auth-container">
        <h2>Register</h2>
        <hr />
        <form onSubmit={this.handleRegister} >
          <p>Username:</p>
          <input name="name" type="text" value={authFormData.name} onChange={this.authHandleChange} />
          <p>Email:</p>
          <input name="email" type="text" value={authFormData.email} onChange={this.authHandleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={authFormData.password} onChange={this.authHandleChange} />
          <hr />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;