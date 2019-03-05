import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark" style={navStyle}>
      <Link className="navbar-brand" style={linkStyle} to="/">
        The Clicky Game
      </Link>
      <div>
        <h1>Click an Image to Play!!!!</h1>
      </div>
      <span className="nav-bar-text" style={scoreStyle}>Current Score: 0 | Best Score: 0</span>
    </nav>
  );
}

const navStyle = {
  position: "fixed",
  top: "0",
  width: "100%"
}

const linkStyle = {
  cursor: "pointer"
}

const scoreStyle = {
    color: '#f1f1f1'
}

export default NavBar;
