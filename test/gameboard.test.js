import { GameBoard } from "../src/gameboard";
import { Ship } from "../src/ship";

describe('test gameboard class', () => {
    test('test cellTaken method', () => {
        const board = new GameBoard();
        board.createBoard();
        board.placeShip([5,5],[6,5], new Ship(2));
        expect(board.cellTaken([5,5],[7,5])).toBe(true);
    });
});

describe('test gameboard class', () => {
    const board = new GameBoard();
    board.createBoard();
    board.placeShip([5,5],[6,5], new Ship(2));
    
    test('test receiveAttack method', () => { 
        expect(board.receiveAttack([5,5])).toBe(true);
    });

    test('test receiveAttack method', () => { 
        expect(board.receiveAttack([1,1])).toBe(false);
    });
});