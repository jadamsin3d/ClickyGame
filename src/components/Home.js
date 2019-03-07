import React, {Component} from "react";
import '../assets/css/newStyle.css';
import NavBar from "./NavBar";
import Header from "./Header";

let selected = [];

class Home extends Component {
  state = {
    score: 0,
    highScore: 0
  }
  proceedGame = (event) => {
    const item = event.target.id;
    let dupe = selected.some((r) => r === item);
    if (dupe) {
      if(this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score});
      }
      this.setState({score: this.state.score *  0});
      selected = [];
      selected.push(item);
      console.log(selected);
      this.randomDiv();
      this.setState({score: 0})
    } else {
      //curScore += 1 
      selected.push(item);
      console.log(selected);
      this.randomDiv();

      this.setState({score: this.state.score + 1});
    }
  }

  randomDiv = (event) => {
    const animals = document.querySelector('.container');
    for(let i = animals.children.length; i >= 0; i--) {
      animals.appendChild(animals.children[Math.random() * i | 0]);
    }
  }

  render() {
    return (
      <>
        <NavBar curScore={this.state.score} highScore={this.state.highScore} />
        <Header />
        <div className="container" style={patternStyle}>
                <div className="boxItem" id="hippo" onClick={this.proceedGame}><i className="fas fa-hippo" id="hippo"></i></div>
                <div className="boxItem" id="dog" onClick={this.proceedGame}><i className="fas fa-dog" id="dog"></i></div>
                <div className="boxItem" id="cat" onClick={this.proceedGame}><i className="fas fa-cat" id="cat"></i></div>
                <div className="boxItem" id="frog" onClick={this.proceedGame}><i className="fas fa-frog" id="frog"></i></div>
                <div className="boxItem" id="horse" onClick={this.proceedGame}><i className="fas fa-horse" id="horse"></i></div>
                <div className="boxItem" id="dragon" onClick={this.proceedGame}><i className="fas fa-dragon" id="dragon"></i></div>
                <div className="boxItem" id="crow" onClick={this.proceedGame}><i className="fas fa-crow" id="crow"></i></div>
                <div className="boxItem" id="dove" onClick={this.proceedGame}><i className="fas fa-dove" id="dove"></i></div>
                <div className="boxItem" id="fish" onClick={this.proceedGame}><i className="fas fa-fish" id="fish"></i></div>
                <div className="boxItem" id="kiwi" onClick={this.proceedGame}><i className="fas fa-kiwi-bird" id="kiwi"></i></div>
                <div className="boxItem" id="spider" onClick={this.proceedGame}><i className="fas fa-spider" id="spider"></i></div>
                <div className="boxItem" id="bug" onClick={this.proceedGame}><i className="fas fa-bug" id="bug"></i></div>
        </div>
      </>
    );
  }
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
