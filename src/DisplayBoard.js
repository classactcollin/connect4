import React, { Component } from 'react';

var _ = require('underscore');

  
class DisplayBoard extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {
  }

	displayBoard(){
let that = this
  	var out =_.map([5,4,3,2,1,0], 
  	function(num){ 
  	return <tr className="board-row">
  		{_.map(that.props.game.gameBoard, function(row){
  			return (<td className="square"><div id={'circle' +row[num]}/></td>);})}
  		</tr> 
  		}
  		);
  return <table><tbody>{out}</tbody></table>;
}

 
	
  render() {
    return (
	<div>
	{this.displayBoard()}
	</div>

)
  }
}

export default DisplayBoard;
