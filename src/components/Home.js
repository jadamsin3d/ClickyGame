import React from "react";
import '../assets/css/newStyle.css';

function Home(props) {
  return (
    <div className="container" style={patternStyle}>
            <div className="boxItem" onClick='onClick'><i className="fas fa-hippo"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-dog"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-cat"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-frog"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-horse"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-dragon"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-crow"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-dove"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-fish"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-kiwi-bird"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-spider"></i></div>
            <div className="boxItem" onClick='onClick'><i className="fas fa-bug"></i></div>
    </div>
  );
}

const patternStyle = {
    fontSize: '150px',
    display: 'flex',
    margin: 'auto',
    textAlign: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

export default Home;
