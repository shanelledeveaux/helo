import React, { Component } from "react";
import { connect } from "react-redux";
import { handleUser } from "../../ducks/reducer";
import { Link, withRouter } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  addNewPost() {
    let post = {
      title: this.state.title,
      content: this.state.content
    };
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
            <button>Post</button>
          </div>
        </div>
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
