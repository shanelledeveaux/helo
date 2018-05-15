import React, { Component } from "react";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername(e) {
    this.setState({
      username: e
    });
  }

  updatePassword(e) {
    this.setState({
      password: e
    });
  }

  render() {
    return (
      <div className="auth">
        <div className="box">
          <h1>Helo</h1>
          <p id="userpass">Username:</p>
          <input
            value={this.state.username}
            onChange={e => this.updateUsername(e.target.value)}
            type="text"
          />
          <p id="userpass">Password:</p>
          <input
            value={this.state.password}
            onChange={e => this.updatePassword(e.target.value)}
            type="text"
          />
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
      </div>
    );
  }
}

export default Auth;
