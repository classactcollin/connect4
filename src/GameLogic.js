var _ = require('underscore');

function matrix( rows){
  var arr = [];
  for(var i=0; i < rows; i++){
      arr.push([]);
  }
return arr;
}



export default class GameLogic {
  constructor() {
  this.gameBoard = matrix(7);
  this.gameOver = false
  }
  
  displayBoard() {
	var out = []
	out = this.gameBoard
	return (_.map(out,
		function(i){var j = i.slice()
			while(j.length<6)
				{j.push('0')}
				return j})
				)
	;
    
  }
  gameStatus(){
  	console.log("Game", this.gameBoard)
  	console.log("DisplayBoad",this.displayBoard())
  }
  
  
  placeChip(column,token){

  this.gameBoard[column].push(token)
  }
  
  columnAvailable(){
	var out= new Array(7)
	console.log("Board",this.gameBoard)	
  _.map(this.gameBoard, function(col, index) {if (col.length<6) {out.push(index)}}) 
    
  return out; 
}


checkWinner(player) {
var b = this.displayBoard()
console.log("Display",b)
    var len=b.length, r=0, c=0, dr=0, dl=0, win=4

    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            (b[j][i]===player) ? c++ : c=0;
            (b[i][j]===player) ? r++ : r=0;
        	if(b[i][j]===player && i<len-win+1){ dr=0; dl=0;
        		for(var z=0;z<win;z++){ 
        			(b[i+z][j+z]===player) ? dr++ : dr=0;
        			(b[i+z][j-z]===player) ? dl++ : dl=0;
        		}
        	}
			if(c===win || r===win || dr===win || dl===win){return true;}
		} r=0;
    }
    return false
}
  
  
  
}
