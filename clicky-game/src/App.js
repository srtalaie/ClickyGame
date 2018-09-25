import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Clicky Game</h1>
        </header>
        <div className="jumbotron">
          <h3>Click on Each Image to Get Points</h3>
          <h4>But don't click on any one more than once!</h4>
        </div>
        <div id="score"></div>
        <div id="image-holder">`</div>
      </div>
    );
  }
}

export default App;
