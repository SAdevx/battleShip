class Ship {
  constructor(length) {
    this.length = length;
    this.numOfHits = 0;
    this.sunk = false;
  }

  hit() {
    this.numOfHits = this.numOfHits + 1;
  }

  isSunk() {
    if (this.numOfHits == this.length) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}

export { Ship };
