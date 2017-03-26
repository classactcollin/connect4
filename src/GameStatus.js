import React, { Component } from 'react';

var _ = require('underscore');

  
class GameStatus extends Component {


  componentDidMount() {

  }

  componentWillUnmount() {
  }
	WhoseTurn(props){
	var color =  props.game.player=== 'x' ? 'red' : 'yellow'
  return <h2>You are up {color}</h2>;
}

  render() {
    return (
	<div>
	<div> {this.props.currentPlayer=== 'x' ? 'red' : 'yellow'} </div>
	<div> {this.props.gameOver? ('Winner: '+ this.props.currentPlayer) : 'No winner yet'} </div>
	</div>

)
  }
}

export default GameStatus;
