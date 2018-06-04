import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: "",
      username: "",
      profilepic: ""
    };
  }

  componentDidMount() {
    axios.get(`/api/onepost/${this.props.match.params.postid}`).then(res => {
      console.log(res);
      this.setState({
        title: res.data.title,
        img: res.data.img,
        content: res.data.content,
        username: res.data.username,
        profilepic: res.data.profile_pic
      });
    });
  }

  render() {
    console.log("PROPS", this.props);
    console.log("STATE", this.state);
    return (
      <div>
        <p>title: {this.state.title}</p>
        <p>user: {this.state.username}</p>
        <p>content: {this.state.content}</p>
      </div>
    );
  }
}

export default Post;
