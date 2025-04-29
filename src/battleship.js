import "./battleship.css";

function getBoard(){
    const body = document.querySelector("body");
    const board1 = document.createElement("div");
    const board2 = document.createElement("div");

    board1.classList.add("player1-board");
    board2.classList.add("player2-board");
    
    for(let i = 1; i <= 100; i++){
       
    }

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const player1Cells = document.createElement("div");
            const player2Cells = document.createElement("div");
    
            player1Cells.classList.add("cells", "player-cell");
            player2Cells.classList.add("cells", "computer-cell");

            player1Cells.dataset.cell = `${i}${j}`;
            player2Cells.dataset.cell = `${i}${j}`;
    
            board1.appendChild(player1Cells);
            board2.appendChild(player2Cells);
            
        }
        body.appendChild(board1);
        body.appendChild(board2);
    }
}

function placeShipDOM(startCoord, endCoord){
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
       for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            //get player and computer board cell and change their background
            const cells = document.querySelectorAll(`[data-cell="${i}${j}"]`);
            cells.forEach(cell => {
            cell.style.backgroundColor = `rgb(227, 74, 74)`;
            });
        }
    }
 }



export { getBoard, placeShipDOM };