class GameBoard {
    constructor(){
        this.row = 10;
        this.col = 10;
        this.board = [];
        this.missedCells = new Map();
        this.foundCells = new Map();
    }

    createBoard(){
        for(let i = 0; i < this.row; i++){
            this.board[i] = [];
            for(let j = 0; j < this.col; j++){
                this.board[i].push(null);
            }
        }
    }

    placeShip(startCoord, endCoord, playerBoard, ship){
        for(let i = startCoord[0]; i < endCoord[1]; i++){
            for(let j = startCoord[1]; j <= endCoord[1]; j++){
                playerBoard[i][j].push(ship);
            }
        }
    }

   /* receivedAttack(coord){  
        this.board
    }*/
}

export {GameBoard};