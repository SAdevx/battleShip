import { Ship } from "./ship";
import { GameBoard } from "./gameboard";
import { Player } from "./player";
import { getBoard, placeShipDOM } from "./battleship";

getBoard();

const playerBoard = document.querySelector(".player-cell");
const computerBoard = document.querySelectorAll(".computer-cell");


const p1GameBoard = new GameBoard();
const p2GameBoard = new GameBoard();

p1GameBoard.createBoard();
p2GameBoard.createBoard();

//player board
p1GameBoard.placeShip([0,0],[0,0], new Ship(1));
p1GameBoard.placeShip([4,8],[4,8], new Ship(1));
p1GameBoard.placeShip([9,5],[9,5], new Ship(1));
p1GameBoard.placeShip([3,3],[3,3], new Ship(1));
p1GameBoard.placeShip([6,2],[7,2], new Ship(2));
p1GameBoard.placeShip([6,4],[7,4], new Ship(2));
p1GameBoard.placeShip([9,8],[9,9], new Ship(2));
p1GameBoard.placeShip([1,4],[1,6], new Ship(3));
p1GameBoard.placeShip([7,7],[7,9], new Ship(3));
p1GameBoard.placeShip([6,0],[9,0], new Ship(4));

//computer board
p2GameBoard.placeShip([0,0],[0,0], new Ship(1));
p2GameBoard.placeShip([4,8],[4,8], new Ship(1));
p2GameBoard.placeShip([9,5],[9,5], new Ship(1));
p2GameBoard.placeShip([3,3],[3,3], new Ship(1));
p2GameBoard.placeShip([6,2],[7,2], new Ship(2));
p2GameBoard.placeShip([6,4],[7,4], new Ship(2));
p2GameBoard.placeShip([9,8],[9,9], new Ship(2));
p2GameBoard.placeShip([1,4],[1,6], new Ship(3));
p2GameBoard.placeShip([7,7],[7,9], new Ship(3));
p2GameBoard.placeShip([6,0],[9,0], new Ship(4));

//show ship on UI
placeShipDOM([0,0],[0,0]);
placeShipDOM([4,8],[4,8]);
placeShipDOM([9,5],[9,5]);
placeShipDOM([3,3],[3,3]);
placeShipDOM([6,0],[9,0]);
placeShipDOM([6,2],[7,2]);
placeShipDOM([6,4],[7,4]);
placeShipDOM([1,4],[1,6]);
placeShipDOM([7,7],[7,9]);
placeShipDOM([9,8],[9,9]);


const player1 = new Player("Player", p1GameBoard);
const player2 = new Player("Computer", p2GameBoard);

//first have a function to place the ships on both boards manually first

computerBoard.forEach((cell) => {
   cell.addEventListener("click", (e)=>{
   console.log(e.target.dataset.cell);
   });
});



