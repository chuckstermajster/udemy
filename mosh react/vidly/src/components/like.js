import React, { Component } from "react";

class Like extends Component {
  handleLikeClasses = () => {
    let classes = "fa fa-heart";
    if (!this.props.isLiked) {
      classes += "-o";
    }
    return classes;
  };

  render() {
    return (
      <i
        className={this.handleLikeClasses()}
        aria-hidden="true"
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;
