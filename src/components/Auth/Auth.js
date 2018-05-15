import React, { Component } from "react";
import "./Auth.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };

    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  registerUser() {
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/api/auth/register", user)
      .then(res => {
        this.props.handleUser(
          res.data.id,
          res.data.username,
          res.data.profilepic
        );
      })
      .then(() => this.props.history.push("/dashboard"));
  }

  loginUser() {
    console.log("login");
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/api/auth/login", user)
      .then(res => {
        console.log(res);
        this.props.handleUser(
          res.data.id,
          res.data.username,
          res.data.profilepic
        );
      })
      .then(() => this.props.history.push("/dashboard"));
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
          <button onClick={this.loginUser}>LOGIN</button>
          <button onClick={this.registerUser}>REGISTER</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { handleUser })(Auth));
