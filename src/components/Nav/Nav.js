import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import Home from "./home_logo.png";
import New from "./new_logo.png";
import ShutDown from "./shut_down.png";

const Nav = props => {
  console.log(props);
  return (
    <div className="bar">
      <Link to="/dashboard">
        <img src={Home} />
      </Link>
      <Link to={`/post/${props.postid}`}>
        <img src={New} />
      </Link>
      <Link to="/">
        <img src={ShutDown} />
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state.username,
    profilepic: state.profilepic
  };
}

export default connect(mapStateToProps, {})(Nav);
