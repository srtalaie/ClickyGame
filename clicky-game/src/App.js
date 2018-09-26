import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PicCard from './components/PicCard/PicCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky Game</h1>
        </header>
        <div id="score"></div>
        <div id="image-holder">
          <PicCard />
        </div>
      </div>
    );
  }
}

export default App;
