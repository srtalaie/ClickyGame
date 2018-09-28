import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PicCard from './components/PicCard';
import Wrapper from './components/Wrapper/Wrapper';
import Images from './images.json';

function shuffleArray(array){
  for(let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
} 

class App extends Component {

  resetGame = () => {
    this.setState(shuffleArray(this.state.Images));
    this.setState({score: 0});
    this.setState({clicked: []});
  }

  state = {
    Images,
    score: 0,
    clicked: [],
    winLose: ""
  }

  componentDidMount(){
    this.setState(shuffleArray(this.state.Images))
  }

  handleClick = (id) => {
    if(this.state.clicked.includes(id)){
      this.resetGame();
      this.setState({winLose: "    You Lose! Click on a House Banner to start again."});
    } else if (this.state.score === 11){
      this.resetGame();
      this.setState({score: 12});
      this.setState({winLose: "    Congrats you win! Click a House Banner to start again."});
    }else if (this.state.score >= 12){
      this.resetGame();
      this.setState({winLose: ""});
    } else {
      this.setState(shuffleArray(this.state.Images));
      this.setState({clicked: [...this.state.clicked, id]});
      this.setState({score: (this.state.score + 1)})
      this.setState({winLose: ""});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky Game</h1>
        </header>
        <div className="container">
          <div id="score" className="row">
            <div><label>Score: </label><span name="score">{this.state.score}{this.state.winLose}</span></div>
          </div>
          <div className="row">
            <div id="image-holder">
              <Wrapper>
              {this.state.Images.map((image) =>(
                <PicCard 
                  imageUrl = {image.image}
                  key = {image.id}
                  id = {image.id}
                  data = {image.clicked}
                  handleClick = {this.handleClick}
                />
              ))}
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
