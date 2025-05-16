import { GameBoard } from '../src/gameboard'
import { Ship } from '../src/ship'

describe('test gameboard class', () => {
  const board = new GameBoard();
  board.createBoard();
  board.placeShip([5, 5], [6, 5], new Ship(2))

  test('test receiveAttack method', () => {
    expect(board.receiveAttack([5, 5])).toBe(1);
  })

  test('test receiveAttack method', () => {
    expect(board.receiveAttack([1, 1])).toBe(2);
  })
})

describe('test gameboard class', () => {
  const board = new GameBoard();
  board.createBoard();
  const ship1 = new Ship(1);
  const ship2 = new Ship(3);
  const ship3 = new Ship(3);

  board.placeShip([5, 5], [5, 5], ship1);
  board.placeShip([6, 3], [8, 3], ship2);
  board.placeShip([7, 7], [7, 9], ship3);

  ship1.hit();
  ship2.hit();
  ship2.hit();
  ship2.hit();
  ship3.hit();
  ship3.hit();

  test('test allShipSunk method', () => {
    expect(board.allShipSunk([[5,5], [6,3]])).toBe(true);
  })

  test('test allShipSunk method', () => {
    expect(board.allShipSunk([[5,5], [6,3], [7,7]])).toBe(false);
  })

  test('test allShipSunk method', () => {
    ship3.hit();
    expect(board.allShipSunk([[5,5], [6,3], [7,7]])).toBe(true);
  })
})
