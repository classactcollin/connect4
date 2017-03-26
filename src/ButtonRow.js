import React, { Component } from 'react';
var _ = require('underscore');
  
class ButtonRow extends Component {
constructor(props) {
    super(props);

 
    this.handleClick = this.handleClick.bind(this);
    
    }
    
    handleClick(i) {
    	this.props.playTurn(i)
  }
  
  renderButtons(deactivate){
  let that=this
  
  	let buttons=_.map([0,1,2,3,4,5,6], function(col){
  	if(deactivate || _.indexOf(that.props.availableColumns,col)===-1){
  	return (<th className="square2" />)}else{
  			return (<th onClick={(i) => that.handleClick(col)} className="square" />)
  			}
  		})
  		
  		return buttons
  
  }



  render() {
  	let buttons=this.renderButtons(this.props.gameOver)
  	
	return (
	<tr>
		
		{buttons}
		
	</tr>)
	
  }
}

export default ButtonRow;
