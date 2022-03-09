import React, { Component } from 'react';
import logo from '../image/logo.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="form-section">
        <img src={logo} alt="logo" className="app-logo" />
        <form action="#" method="post" className="form-login">
          <p className="login-header">Login to access data</p>
          <input type="text" value="aimemalaika" required placeholder="username" />
          <input type="password" value="aimemalaika" required placeholder="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default Login;
