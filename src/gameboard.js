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

  receivedAttack(coord) {
    if (
      this.missedCells.has(this.board[coord[0]][coord[1]]) ||
      this.foundCells(this.board[coord[0]][coord[1]])
    ) {
      // prompt user for coordinates again
      return null;
    }

    if (this.board[coord[0]][coord[1]] == null) {
      this.missedCells.set(this.board[coord[0]][coord[1]], true);
      // use return value to prompt for diff coord
      return;
    }
    this.board[coord[0]][coord[1]].hit();
    this.foundCells.set(this.board[coord[0]][coord[1]], true);
    // use the return value here to say hit was valid and let user choose another coord
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
