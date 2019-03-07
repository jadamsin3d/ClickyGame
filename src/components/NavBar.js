import React, { Component } from "react";
// import Home from './Home';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark" style={navStyle}>
      <Link className="navbar-brand" style={linkStyle} to="/">
        The Clicky Game
      </Link>
      <div>
        <h1>Click an Image to Play!!!!</h1>
      </div>
      <span className="nav-bar-text" style={scoreStyle}>
        Current Score: {props.curScore} |
        High Score: {props.highScore}
      </span>
    </nav>
  );
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
