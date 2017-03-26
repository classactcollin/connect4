import React, { Component } from 'react';
import GameLogic from './GameLogic';
import ButtonRow from './ButtonRow';
import GameStatus from './GameStatus';
import DisplayBoard from './DisplayBoard';

var _ = require('underscore');

  
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	game: new GameLogic(),
    	player: _.sample(['x','y']),
    	winner: false
    	};
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }
  
  playTurn(column){
  if(_.indexOf(this.state.game.columnAvailable(),column)===-1){
  	alert("nope")
  }else{
  	
    this.state.game.placeChip(column,this.state.player)
    
    this.setState({
    	game: this.state.game
    	});
    	this.endTurn()
    	}
  }
  endTurn(){ 
  if(this.state.game.checkWinner(this.state.player)){
  	this.setState({winner:true})}else{
  	this.rotateTurn()
  	}
  }
  
  rotateTurn(){
    var newPlayer= this.state.player=== 'x' ? 'y' : 'x'; 
    this.setState({
    	player: newPlayer
    	}); 
  }

  render() {
  
  let availableColumns = this.state.game.columnAvailable()

    return (
      <div>
        <GameStatus 
        	gameOver = {this.state.winner}
        	currentPlayer = {this.state.player}
        />

		<ButtonRow
			gameOver = {this.state.winner}
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
