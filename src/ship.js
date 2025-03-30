class Ship {
  constructor(length) {
    this.length = length;
    this.numOfHits = 0;
    this.isSunk = false;
  }

  hit() {
    this.numOfHits = this.numOfHits + 1;
  }

  isSunk() {
    if (this.numOfHits == this.length) {
      this.isSunk = true;
      return true;
    }
    return false;
  }
}

export { Ship };
