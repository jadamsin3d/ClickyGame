import React from "react";
import carbonfibre from "../assets/images/carbon_fibre_@2X.png";

function Header() {
  return (
    <div style={headerStyle}>
      <h1>The Clicky Game</h1>
      <h2>Click on an image to earn points, but don't click on any image more than once!</h2>
    </div>
  );
}

const headerStyle = {
    backgroundImage: `url(${carbonfibre})`,
    backgroundRepeat: 'repeat',
    padding: '80px 0px 20px 0px',
    textAlign: 'center',
    color: '#f1f1f1'
}


export default Header;
