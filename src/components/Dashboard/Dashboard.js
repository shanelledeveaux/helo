import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import { connect } from "react-redux";
import { handleUser } from "../../ducks/reducer";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      posts: [],
      myPosts: true,
      id: 0
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }
  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  handleCheckBox(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  updateSearch(e) {
    this.setState({
      search: e
    });
  }

  submitSearch() {
    axios
      .get(
        `/api/posts/${2}?userposts=${this.state.myPosts}&string=${
          this.state.search
        }`
      )
      .then(res => {
        this.setState({ posts: res.data });
      });
  }

  resetSearch() {
    if (this.state.search.length > 0 || this.state.myPosts(false)) {
      axios
        .get(
          `/api/posts/?userposts=${this.state.myPosts}string=${
            this.state.search
          }`
        )
        .then(res => {
          this.setState({ posts: res.data });
        });
    } else {
      axios.get("/api/posts").then(res => {
        this.setState({ posts: res.data });
      });
    }
    this.setState({ search: "" });
  }

  render() {
    let posts = this.state.posts.map((post, i) => {
      return (
        <div>
          {post.title}
          {post.username}
          {post.profilepic}
        </div>
      );
    });
    return (
      <div className="maincontent">
        <div className="searchfield">
          <input
            placeholder="Post"
            value={this.state.search}
            onChange={e => this.updateSearch(e.target.value)}
            type="text"
          />
          <input
            name="myPosts"
            type="checkbox"
            checked={this.state.myPosts}
            onChange={this.handleCheckBox}
          />
          <button>Search</button>
          <button>Reset</button>
        </div>
        <div className="postbox">SOME POSTS</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.id
  };
}

export default connect(mapStateToProps, { handleUser })(Dashboard);
