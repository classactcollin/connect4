import React, { Component } from 'react';
import GameLogic from './GameLogic';
var _ = require('underscore');


function WhoseTurn(props){
  return <h2>It is {props.game.player}'s turn.</h2>;
}

function DisplayBoard(props){
  var out=_.map(props.game.gameBoard, function(row){ 
    return <td>{_.map(row, function(i){
      return <tr>{i}</tr>
    })}</td> 
  })  
  return <table>{out}</table>;
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
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
