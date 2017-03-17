import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Connect 4</h2>
        </div>
        <div>
	  <GameBoard />
	</div>
      </div>
    );
  }
}

export default App;
