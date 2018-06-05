import React, { Component } from "react";
import axios from "axios";
import { handleUser } from "../../ducks/reducer";
import { connect } from "react-redux";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      userid: 0,
      id: 0,
      title: "",
      img: "",
      content: "",
      username: "",
      profilepic: ""
    };
    this.handleContent = this.handleContent.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/onepost/${this.props.match.params.postid}`).then(res => {
      console.log(res);
      this.setState({
        id: res.data.id,
        title: res.data.title,
        img: res.data.img,
        content: res.data.content,
        username: res.data.username,
        profilepic: res.data.profile_pic
      });
    });
  }

  handleContent(e) {
    this.setState({ content: e });
  }

  updateContent() {
    let content = {
      content: this.state.content
    };
    axios.put(`/api/newpost/${this.state.id}`, content);
  }

  render() {
    console.log("STATE", this.state);
    console.log("PROPS", this.props);
    // console.log("SESSION", this.session);
    return (
      <div>
        <p>title: {this.state.title}</p>
        <p>user: {this.state.username}</p>
        <p>content: {this.state.content}</p>
        <div>Update Content</div>
        <input
          placeholder="update content of post"
          value={this.state.content}
          onChange={e => this.handleContent(e.target.value)}
        />
        <button
          onClick={() => {
            this.updateContent(this.state.id, this.state.content);
          }}
        >
          Update
        </button>
      </div>
    );
  }
}

export default Post;
