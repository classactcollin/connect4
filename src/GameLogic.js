var _ = require('underscore');

function matrix( rows, cols, defaultValue){
  var arr = [];
  for(var i=0; i < rows; i++){
      arr.push([]);
      arr[i].push( new Array(cols));
      for(var j=0; j < cols; j++){     
        arr[i][j] = defaultValue;
      }
  }
return arr;
}

export default class GameLogic {
  constructor() {
  this.gameBoard = matrix(7,6,'0');
  this.player = _.sample(['x','y']);
  }
  
  gameState() {
    console.log(this.gameBoard);
    console.log(this.player);
  }
  
  rotateTurn(){
    this.player= this.player=== 'x' ? 'y' : 'x';  
  }
  
  placeChip(row,token){
  var bottom=_.findIndex(this.gameBoard[row], function(char){ 
    return char === 'x'|| char ==='y'; })
  if(bottom===-1){
    this.gameBoard[row][this.gameBoard.length-2]=token
    return true;
  }else if(bottom===0){
    console.log("Row full")
    return false;
  }else{
    this.gameBoard[row][bottom-1]=token
    return true;
  }
  }
    columnAvailable(column){
  return _.map(this.gameBoard,_.first)[column]==='0';
  

}
}
