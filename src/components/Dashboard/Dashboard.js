import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      myPosts: true
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
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
    axios.get(
      `/api/posts/${2}?userposts=${this.state.myPosts}&string=${
        this.state.search
      }`
    );
  }

  render() {
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
      </div>
    );
  }
}

export default Dashboard;
