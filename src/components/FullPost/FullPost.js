import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedpost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedpost ||
        (this.state.loadedpost && this.state.loadedpost.id !== this.props.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then((res) => {
            this.setState({ loadedpost: res.data });
          });
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    if (this.state.loadedpost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedpost.title}</h1>
          <p>{this.state.loadedpost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
