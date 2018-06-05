import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleUser } from "../../ducks/reducer";
import Song from "./song.mp3";

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
    axios.get(`/api/posts`).then(res => {
      this.setState({ posts: res.data });
      // console.log(res.data);
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
        `/api/posts?userposts=${this.state.myPosts}&string=${this.state.search}`
      )
      .then(res => {
        this.setState({ posts: res.data });
      });
  }

  resetSearch() {
    if (this.state.search.length > 0 || this.state.myPosts(false)) {
      axios
        .get(
          `/api/posts?userposts=${this.state.myPosts}&string=${
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
        <Link to={`/post/${post.id}`}>
          <div className="small_post">
            <div className="title">{post.title}</div>
            <div className="username">{post.username}</div>
            <div>{post.profilepic}</div>
          </div>
        </Link>
      );
    });
    console.log("PROPS", this.props);
    console.log("STATE", this.state);

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
          <button
            onClick={() =>
              this.submitSearch(
                this.props.id,
                this.state.myPosts,
                this.state.search
              )
            }
          >
            Search
          </button>
          <button onClick={this.resetSearch}>Reset</button>

          <div className="postbox">{posts}</div>
          <footer>
            THIS IS ACTUALLY A FOOTER
            <audio src={Song} controls />
          </footer>
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

export default connect(
  mapStateToProps,
  { handleUser }
)(Dashboard);
