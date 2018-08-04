
import GameLogic from '../GameLogic';

it('check horizontal win', () => {
    var gameOb= new GameLogic()
    gameOb.gameBoard=[ ['x'], ['x'], ['x'], ['x'], [], [], [] ]
    console.log(gameOb.gameBoard)
    console.log(gameOb.checkWinner('x'))
    expect(gameOb.checkWinner('x'))
});

it('check vertical win', () => {
    var gameOb= new GameLogic()
    gameOb.gameBoard=[ ['x','x','x','x'], ['y'], ['y'], ['y'], [], [], [] ]
    console.log(gameOb.gameBoard)
    console.log(gameOb.checkWinner('x'))
    expect(gameOb.checkWinner('x'))
});

it('check weird ', () => {
    var gameOb= new GameLogic()
    gameOb.gameBoard=[ ['y','y'], ['y','y'], ['y','y'], ['x','x'], ['x','x','x'], ['x','x'], ['y','y'] ]
    console.log(gameOb.gameBoard)
    console.log(gameOb.checkWinner('y'))
    expect(gameOb.checkWinner('y')).toBeFalsy();
});



