import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = props => {
  return (
    <div>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to={`/post/${props.postid}`}>
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
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
