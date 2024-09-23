const {Ship} = require('./ship.js');
const {Gameboard} = require('./gameboard.js');
const {Player} = require('./player.js');
const {playRound, initializeGame} = require('./gameplay.js');
require('./style.css');


let startBtn=document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
    initializeGame();
    startBtn.textContent='Game has started!';
});

const realPlayerAttackSquares = (function () {
    let playerGameboard=document.querySelector('.real-player-gameboard');
    let missedAttacksGameboard=playerGameboard.querySelector('.missed-attacks-gameboard');
    let attackSquares=missedAttacksGameboard.querySelectorAll('.game-square');
    return attackSquares;
})();

realPlayerAttackSquares.forEach((square) => {square.addEventListener("click", playRound)});