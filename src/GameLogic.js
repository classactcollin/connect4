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


class Board {
  constructor() {
  this.gameBoard = matrix(7,6,'0');
  this.player = _.sample(['x','y']);
  }
  
  gameState() {
    console.log(this.gameBoard);
    console.log(this.player);
  }
  
  rotateTurn(){
    this.player= this.player== 'x' ? 'y' : 'x';  
  }
  
  placeChip(row,token){
  var bottom=_.findIndex(this.gameBoard[row], function(char){ 
    return char == 'x'|| char =='y'; })
  if(bottom==-1){
    this.gameBoard[row][this.gameBoard.length-1]=token
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
  return _.map(gameBoard,_.first)[column]=='0';
  

}
}

var game1 = new Board()

function action(array,column){
  var slot =_.random(0, 6)

  var goodTurn = game1.placeChip(slot,game1.player)
  if (goodTurn){
    console.log(game1.player+" has placed their token in row " + slot)
    game1.rotateTurn();
    
  }
  
} 
