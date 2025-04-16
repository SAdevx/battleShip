class GameBoard {
  constructor() {
    this.row = 10;
    this.col = 10;
    this.board = [];
    this.missedCells = new Map();
    this.foundCells = new Map();
    this.shipsNeighborsCells = new Map();
  }

  createBoard() {
    for (let i = 0; i < this.row; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.col; j++) {
        this.board[i].push(null);
      }
    }
  }

  
  cellTaken(startCoord, endCoord){
    for(let i = startCoord[0]-1; i <= endCoord[0]+1; i++){
      for(let j = startCoord[1]-1; j <= endCoord[1]+1; j++){
        if(i >= 0 && i <= this.row && j >= 0 && j <= this.row){
          if(this.shipsNeighborsCells.has(`${i}${j}`)){
            return true;
          }
        }
      }
    }
    return false;
  }

  placeShip(startCoord, endCoord, board, ship) {
    // store ship and its neighbors cells to stop placement
    // of other ships around it
    for(let i = startCoord[0]-1; i <= endCoord[0]+1; i++){
      for(let j = startCoord[1]-1; j <= endCoord[1]+1; j++){
        if(i >= 0 && i <= this.row && j >= 0 && j <= this.row){
          this.shipsNeighborsCells.set(`${i}${j}`,true);
        }
      }
    }

    for (let i = startCoord[0]; i <= endCoord[1]; i++) {
      for (let j = startCoord[1]; j <= endCoord[1]; j++) {
        board[i][j].push(ship);
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
