import GameLogic from './GameLogic';
var _ = require('underscore');




export function aiTurn(game){
let availableColumns=game.columnAvailable()
let choice = _.sample(availableColumns)
let optionsLose = []
let optionsWin = []
_.map(availableColumns, 
	function(col){

	
		if(testNextWinnerWin(game,col,'x')){optionsLose.push(col)}
		if(testNextWinnerWin(game,col,'y')){optionsWin.push(col)}
	})

	if (optionsWin.length >0){
		return _.sample(optionsWin)	
}else if(optionsLose.length >0){
	return _.sample(optionsLose) 
}else{
	return choice
	}
	
	
}

function testNextWinnerWin(game,col,player){
var game1 = JSON.parse(JSON.stringify( game ))
var gameOb= new GameLogic()
gameOb.gameBoard=game1.gameBoard
gameOb.gameOver=game1.gameOver
//console.log("Testing")
//console.log(gameOb.gameBoard)
gameOb.placeChip(col,player)
//console.log(gameOb.gameBoard)
if(gameOb.checkWinner(player)){
	console.log(player+" would win on: "+col)
	return true
}else{
	return false
}

}
