import React, { Component } from "react";
import { connect } from "react-redux";
import { handleUser } from "../../ducks/reducer";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };

    this.addNewPost = this.addNewPost.bind(this);
  }

  addNewPost() {
    let post = {
      title: this.state.title,
      content: this.state.content
    };
    axios.post(`/api/newpost/${this.props.id}`, post);
  }

  updateTitle(e) {
    this.setState({
      title: e
    });
  }

  updateContent(e) {
    this.setState({
      content: e
    });
  }

  render() {
    console.log("PROPS", this.props);
    console.log("STATE", this.state);
    return (
      <div className="post">
        <div className="postbox">
          <h1>New Post</h1>
          <p id="userpass">Title:</p>
          <input
            value={this.state.title}
            onChange={e => this.updateTitle(e.target.value)}
            type="text"
          />
          <p id="userpass">Content</p>
          <input
            value={this.state.content}
            onChange={e => this.updateContent(e.target.value)}
            type="text"
          />
          <div className="bottondiv">
            <Link to="/dashboard">
              {" "}
              <button onClick={this.addNewPost}>Post</button>{" "}
            </Link>
          </div>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jjmCfr_HX0U"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.id
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { handleUser }
  )(Form)
);
