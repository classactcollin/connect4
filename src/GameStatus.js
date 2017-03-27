import React, { Component } from 'react';

var _ = require('underscore');

  
class GameStatus extends Component {


  componentDidMount() {

  }

  componentWillUnmount() {
  }
	currentPlayer(){
		return this.props.currentPlayer=== 'x' ? 'Human' : 'AI'
}


  render() {
	
    return (
	<div>
	<div> {this.currentPlayer()} </div>
	<div> {this.props.gameOver? ('Winner: '+ this.currentPlayer()) : 'No winner yet'} </div>
	</div>

)
  }
}

export default GameStatus;
