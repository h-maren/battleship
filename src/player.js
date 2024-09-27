const { Gameboard } = require("./gameboard.js");

class Player {
  constructor(playerType) {
    if (playerType !== "computer" && playerType !== "real") {
      throw new Error("Invalid player type! Input real or computer!");
    }
    this.playerType = playerType;
    this.gameboard = new Gameboard();
  }
  renderGameboard() {
    let parentShipContainer = document.querySelector(".real-player-gameboard");
    let parentMissedAttackContainer = document.querySelector(
      ".comp-player-gameboard"
    );
    if (this.playerType == "computer") {
      parentShipContainer = document.querySelector(".comp-player-gameboard");
      parentMissedAttackContainer = document.querySelector(
        ".real-player-gameboard"
      );
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let ship = this.gameboard.shipPlacement[i][j];
        let shipGameboard = parentShipContainer.querySelector(
          ".ship-placement-gameboard"
        );
        let missedAttack = this.gameboard.missedAttacks[i][j];
        let missedAttackGameboard = parentMissedAttackContainer.querySelector(
          ".missed-attacks-gameboard"
        );
        let xValue = String(i);
        let yValue = String(j);
        if (ship) {
          let gameSquare = shipGameboard.querySelector(
            `[data-xcoord="${xValue}"][data-ycoord="${yValue}"]`
          );
          gameSquare.classList.add("ship");
        }
        if (missedAttack) {
          let missedSquare = missedAttackGameboard.querySelector(
            `[data-xcoord="${xValue}"][data-ycoord="${yValue}"]`
          );
          if (missedAttack) {
            missedSquare.classList.add(missedAttack);
          }
        }
      }
    }
  }
}

module.exports = { Player };
