import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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


// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'

// export default class Signin extends Component {
//   constructor() {
//     super()
//     this.state = {
//       username: null,
//       password: null
//     }
//   }


//   render() {
//     const { username, password } = this.state
//     return (
//       <div>
//         <h1>This is a sign in page</h1>
//         <div className='sign-in-container'>
//           <form className="sign-in">
//             Username<input required
//               type="text"
//               name="username"
//               value={username}
//               placeholder="Enter username"
//               onChange={this.handleChange} />
//             Password<input required
//               type="password"
//               name="passwprd"
//               value={password}
//               placeholder="Enter password"
//               onChange={this.handleChange} />
//           </form>
//         </div>
//         <NavLink className='Signup' to="/Signup">Sign Up</NavLink>
//       </div>
//     )
//   }
// }
