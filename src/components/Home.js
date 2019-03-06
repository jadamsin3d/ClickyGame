import React from "react";
import '../assets/css/newStyle.css';

function Home() {
  
  let selected = [];

  const proceedGame = (event) => {
    const item = event.target.id;
    let dupe = selected.some((r) => r === item);
    if (dupe) {
      selected = [];
      selected.push(item);
      randomDiv();
    } else {
      selected.push(item);
      randomDiv();
    }
  }

  const randomDiv = (event) => {
    const animals = document.querySelector('.container');
    for(let i = animals.children.length; i >= 0; i--) {
      animals.appendChild(animals.children[Math.random() * i | 0]);
    }
  }

  return (
    <div className="container" style={patternStyle}>
            <div className="boxItem" id="hippo" onClick={proceedGame}><i className="fas fa-hippo" id="hippo"></i></div>
            <div className="boxItem" id="dog" onClick={proceedGame}><i className="fas fa-dog" id="dog"></i></div>
            <div className="boxItem" id="cat" onClick={proceedGame}><i className="fas fa-cat" id="cat"></i></div>
            <div className="boxItem" id="frog" onClick={proceedGame}><i className="fas fa-frog" id="frog"></i></div>
            <div className="boxItem" id="horse" onClick={proceedGame}><i className="fas fa-horse" id="horse"></i></div>
            <div className="boxItem" id="dragon" onClick={proceedGame}><i className="fas fa-dragon" id="dragon"></i></div>
            <div className="boxItem" id="crow" onClick={proceedGame}><i className="fas fa-crow" id="crow"></i></div>
            <div className="boxItem" id="dove" onClick={proceedGame}><i className="fas fa-dove" id="dove"></i></div>
            <div className="boxItem" id="fish" onClick={proceedGame}><i className="fas fa-fish" id="fish"></i></div>
            <div className="boxItem" id="kiwi" onClick={proceedGame}><i className="fas fa-kiwi-bird" id="kiwi"></i></div>
            <div className="boxItem" id="spider" onClick={proceedGame}><i className="fas fa-spider" id="spider"></i></div>
            <div className="boxItem" id="bug" onClick={proceedGame}><i className="fas fa-bug" id="bug"></i></div>
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
