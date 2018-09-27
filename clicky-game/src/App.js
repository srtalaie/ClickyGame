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

  state = {
    Images
  }

  componentDidMount(){
    this.setState(shuffleArray(this.state.Images))
  }

  isClicked = event => {
    //Look at library activity in class-repo
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky Game</h1>
        </header>
        <div id="score"></div>
        <div id="image-holder">
          <Wrapper>
          {this.state.Images.map(image =>(
            <PicCard 
              imageUrl = {image.image}
              key = {image.id}
            />
          ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
