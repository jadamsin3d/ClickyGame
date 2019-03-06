import React, { Component } from "react";
// import Home from './Home';
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    curScore: 0,
    bestScore: 0
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark" style={navStyle}>
        <Link className="navbar-brand" style={linkStyle} to="/">
          The Clicky Game
        </Link>
        <div>
          <h1>Click an Image to Play!!!!</h1>
        </div>
        <span className="nav-bar-text" style={scoreStyle}>
          Current Score: {this.state.curScore} |
          Best Score: {this.state.bestScore}
        </span>
      </nav>
    );
  }
}

const navStyle = {
  position: "fixed",
  top: "0",
  width: "100%"
};

const linkStyle = {
  cursor: "pointer"
};

const scoreStyle = {
  color: "#f1f1f1"
};

export default NavBar;
