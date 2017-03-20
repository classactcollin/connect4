import React, { Component } from 'react';
import GameLogic from './GameLogic';

var _ = require('underscore');


function WhoseTurn(props){
  return <h2>It is {props.game.player}'s turn.</h2>;
}

function DisplayBoard(props){
  var out =_.map([0,1, 2,3,4,5], 
  	function(num){ 
  	return <div className="board-row">
  		{_.map(props.game.gameBoard, function(row){
  			return (<div className="square" id={'circle' +row[num]}></div>);})}
  		</div> 
  		}
  		);
  
  return <div>{out}</div>;
}

  
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
                 game: new GameLogic()
                 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  rowSelector(row){
}

  tick() {
    this.state.game.placeChip(_.random(0,6),this.state.game.player)
    
    this.state.game.rotateTurn()
    this.setState({
      game: this.state.game
    });
  }
  render() {
    return (
      <div>
        <WhoseTurn game={this.state.game}/>
		
        <DisplayBoard game={this.state.game}/>
      </div>
    );
  }
}

export default GameBoard;
