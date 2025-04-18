class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
  }
  
  getName(){
    return this.name;
  }

  getBoard(){
    return this.board;
  }
}

export { Player };
