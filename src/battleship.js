import "./battleship.css";

function getBoard(){
    const body = document.querySelector("body");
    const board1 = document.createElement("div");
    const board2 = document.createElement("div");

    board1.classList.add("board");
    board2.classList.add("board");
    
    for(let i = 1; i <= 100; i++){
        const player1Cells = document.createElement("div");
        const player2Cells = document.createElement("div");

        player1Cells.classList.add("cells");
        player2Cells.classList.add("cells");

        board1.appendChild(player1Cells);
        board2.appendChild(player2Cells);
    }
    body.appendChild(board1);
    body.appendChild(board2);
}


export { getBoard };
