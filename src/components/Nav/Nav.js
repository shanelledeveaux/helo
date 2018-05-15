import React from "react";
import { Link } from "react-router-dom";

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

export default Nav;
