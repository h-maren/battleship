const {Ship} = require('./ship.js');
const {Gameboard} = require('./gameboard.js');
const {Player} = require('./player.js');
const {playRound, initializeGame, getShipCoords} = require('./gameplay.js');
require('./style.css');



let placeSubForm=document.querySelector('#input-sub');
let placeSubBtn=document.querySelector('.place-sub');

placeSubBtn.addEventListener("click", () => {
    let shipDirection=document.querySelector('input#sub-direction').value;
    let shipCoords=document.querySelector('input#sub-coords').value;
    let shipType='submarine';
    getShipCoords(shipType,shipDirection,shipCoords);
    //NEED TO FIX - only remove if input is valid

    placeSubForm.remove();
});

let placeCarrierForm=document.querySelector('#input-carrier');
let placeCarrierBtn=document.querySelector('.place-carrier');

placeCarrierBtn.addEventListener("click", () => {
    let shipDirection=document.querySelector('input#carrier-direction').value;
    let shipCoords=document.querySelector('input#carrier-coords').value;
    let shipType='carrier';
    getShipCoords(shipType,shipDirection,shipCoords);
        //NEED TO FIX - only remove if input is valid

    placeCarrierForm.remove();
});



let startBtn=document.querySelector('.start-btn');
startBtn.addEventListener('click', (e) => {
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