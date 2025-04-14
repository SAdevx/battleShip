class GameBoard {
  constructor() {
    this.row = 10;
    this.col = 10;
    this.board = [];
    this.missedCells = new Map();
    this.foundCells = new Map();
  }

  createBoard() {
    for (let i = 0; i < this.row; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.col; j++) {
        this.board[i].push(null);
      }
    }
  }

  placeShip(startCoord, endCoord, playerBoard, ship) {
    for (let i = startCoord[0]; i <= endCoord[1]; i++) {
      for (let j = startCoord[1]; j <= endCoord[1]; j++) {
        playerBoard[i][j].push(ship);
      }
    }
  }

  receiveAttack(coord) {
    // let user get another chance if the coordinate chosen
    // is part of an already missed cell or found cell
    if (this.missedCells.has(this.board[coord[0]][coord[1]]) ||
        this.foundCells(this.board[coord[0]][coord[1]]) ) {
        return true;
    }

    // don't let user take another turn if coord did not 
    // hit any cell
    if (this.board[coord[0]][coord[1]] == null) {
      this.missedCells.set(this.board[coord[0]][coord[1]], true);
      return false;
    }
    this.board[coord[0]][coord[1]].hit();
    this.foundCells.set(this.board[coord[0]][coord[1]], true);

    return true;
  }

  // passes an array of all ships and check if all of them have been sunked
  allShipSunk(allShip) {
    for (let currShip = 0; currShip < allShip.length; currShip++) {
      if (allShip[currShip].isSunk() == false) {
        return false;
      }
    }
    return true;
  }
}

export { GameBoard };
