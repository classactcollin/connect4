import React, { Component } from 'react';
import GameLogic from './GameLogic';
import ButtonRow from './ButtonRow';
import GameStatus from './GameStatus';
import DisplayBoard from './DisplayBoard';
import * as AITurn from './aiTurn'
//import TurnHistory from './TurnHistory';

var _ = require('underscore');

  
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	game: new GameLogic(),
    	player: _.sample(['x','y']),
    	winner: false,
    	turnHisory: []
    	};
  }
  
  
componentWillMount(){
  	if(this.state.player==='y' && this.state.winner===false){
  	this.state.game.gameStatus()
  	let aiTurn=AITurn.aiTurn(this.state.game)
  	this.playTurn(aiTurn)
  	}
  
  }

  
componentDidUpdate() {
	if(this.state.player==='y' && this.state.winner===false){
	console.log("Update")
	this.state.game.gameStatus()
  	let aiTurn=AITurn.aiTurn(this.state.game)
  	this.playTurn(aiTurn)
  	}
  }

  
  playTurn(column){
  let currentPlayer=this.state.player
    this.state.game.placeChip(column,currentPlayer)
    let newState=this.state.game
    let winner = newState.checkWinner(currentPlayer)
    newState.winner=winner
    var newPlayer= currentPlayer
    if(!winner){
    	newState.player= currentPlayer=== 'x' ? 'y' : 'x';
    }
    this.setState(newState);
  }

  render() {
  
  
  let availableColumns = this.state.game.columnAvailable()
  console.log("Render")
  this.state.game.gameStatus()
    return (
      <div>
        <GameStatus 
        	gameOver={this.state.winner}
        	currentPlayer={this.state.player}
        />

		<ButtonRow
			gameOver={this.state.winner}
			playTurn={(i) => this.playTurn(i)} 
			availableColumns={availableColumns} 
		/>
        <DisplayBoard 
        	game={this.state.game}
        	/>
      </div>
    );
  }
}

export default GameBoard;
