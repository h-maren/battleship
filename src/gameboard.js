const { Ship } = require("./ship.js");

class Gameboard {
  constructor() {
    this.shipPlacement = this.initiateBoard();
    this.missedAttacks = this.initiateBoard();
    this.shipList = [];
  }
  initiateBoard() {
    let blankBoard = [];
    for (let i = 0; i < 10; i++) {
      blankBoard[i] = [];
      for (let j = 0; j < 10; j++) {
        blankBoard[i][j] = null;
      }
    }
    return blankBoard;
  }
  placeShip(Ship, coord, direction) {
    //split coordinates into x and y
    let xcoord = Number(coord.toUpperCase().charCodeAt(coord.charAt(0))) - 65;
    let ycoord = Number(coord.charAt(1)) - 1;
    if (coord.length == 3) {
      ycoord = Number(coord.charAt(1) + coord.charAt(2)) - 1;
    }
    let shipLength = Ship.length;
    let shipDirection = direction.toLowerCase();
    let checkWithinBoard = isWithinBoard(
      shipLength,
      shipDirection,
      xcoord,
      ycoord
    );
    if (!checkWithinBoard) {
      return false;
    }
    let ifValidPlacement = this.isValidPlacement(
      shipLength,
      shipDirection,
      xcoord,
      ycoord
    );
    if (!ifValidPlacement) {
      return false;
    }
    if (shipDirection == "up") {
      for (let i = 0; i < shipLength; i++) {
        this.shipPlacement[xcoord][ycoord - i] = Ship;
      }
    }
    if (shipDirection == "down") {
      for (let i = 0; i < shipLength; i++) {
        this.shipPlacement[xcoord][ycoord + i] = Ship;
      }
    }
    if (shipDirection == "right") {
      for (let i = 0; i < shipLength; i++) {
        this.shipPlacement[xcoord + i][ycoord] = Ship;
      }
    }
    if (shipDirection == "left") {
      for (let i = 0; i < shipLength; i++) {
        this.shipPlacement[xcoord - i][ycoord] = Ship;
      }
    }
    this.shipList.push(Ship.type);
  }
  receiveAttack(coord) {
    let xcoord = Number(coord.charCodeAt(coord.charAt(0)) - 65);
    let ycoord = Number(coord.charAt(1)) - 1;
    if (coord.length == 3) {
      ycoord = Number(coord.charAt(1) + coord.charAt(2)) - 1;
    }
    let checkWithinBoard = isWithinBoard(xcoord, ycoord);
    if (checkWithinBoard) {
      return false;
    }
    if (this.shipPlacement[xcoord][ycoord] == null) {
      this.missedAttacks[xcoord][ycoord] = "missed";
    }
    if (this.shipPlacement[xcoord][ycoord] != null) {
      this.shipPlacement[xcoord][ycoord].hit();
      this.missedAttacks[xcoord][ycoord] = "hit";
    }
  }
  isAllSunk() {
    let uniqueShips = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let ship = this.shipPlacement[i][j];
        if (ship != null) {
          if (!uniqueShips.includes(ship)) {
            uniqueShips.push(ship);
          }
        }
      }
    }
    let checkIfSunk = uniqueShips.every((ship) => ship.isSunk() === true);
    return checkIfSunk;
  }
  isValidPlacement(shipLength, shipDirection, xcoord, ycoord) {
    if (shipDirection == "up") {
      for (let i = 0; i < shipLength; i++) {
        if (this.shipPlacement[xcoord][ycoord - i] !== null) {
          return false;
        }
      }
    }
    if (shipDirection == "down") {
      for (let i = 0; i < shipLength; i++) {
        if (this.shipPlacement[xcoord][ycoord + i] !== null) {
          return false;
        }
      }
    }
    if (shipDirection == "right") {
      for (let i = 0; i < shipLength; i++) {
        if (this.shipPlacement[xcoord + i][ycoord] !== null) {
          return false;
        }
      }
    }
    if (shipDirection == "left") {
      for (let i = 0; i < shipLength; i++) {
        if (this.shipPlacement[xcoord - i][ycoord] !== null) {
          return false;
        }
      }
    }
    return true;
  }
  allShipsPlaced() {
    if (!this.shipList.includes("battleship")) {
      return false;
    }
    if (!this.shipList.includes("carrier")) {
      return false;
    }
    if (!this.shipList.includes("battleship")) {
      return false;
    }
    if (!this.shipList.includes("submarine")) {
      return false;
    }
    if (!this.shipList.includes("destroyer")) {
      return false;
    }
    return true;
  }
}

function isWithinBoard(shipLength, shipDirection, xcoord, ycoord) {
  let newX = xcoord;
  let newY = ycoord;
  if (shipDirection == "up") {
    newY = ycoord - shipLength + 1;
  }
  if (shipDirection == "down") {
    newY = ycoord + shipLength - 1;
  }
  if (shipDirection == "right") {
    newX = xcoord + shipLength - 1;
  }
  if (shipDirection == "left") {
    newX = xcoord - shipLength + 1;
  }
  if (newX >= 0 && newX <= 9 && newY >= 0 && newY <= 9) {
    return true;
  } else {
    return false;
  }
}

module.exports = { Gameboard };
