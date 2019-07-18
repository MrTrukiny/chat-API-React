import React, { Component } from 'react'
import "../style.css";

class Login extends Component {
  render() {
    return (
      <div class="login">
        <form class="chart">
          <h3>¿Cuál es tu nombre?</h3>
          <input type="text" name="nickname"/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

  // functions
};

export default Login;