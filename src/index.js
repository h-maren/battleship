const {Ship} = require('./ship.js');
const {Gameboard} = require('./gameboard.js');
const {Player} = require('./player.js');
const {playRound, initializeGame, getShipCoords, checkIfGameReady} = require('./gameplay.js');
require('./style.css');


let placeCarrierBtn=document.querySelector('.place-carrier');

placeCarrierBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});

let placeBattleshipBtn=document.querySelector('.place-battleship');

placeBattleshipBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});

let placeCruiserBtn=document.querySelector('.place-cruiser');

placeCruiserBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});

let placeSubBtn=document.querySelector('.place-submarine');

placeSubBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});

let placeDestBtn=document.querySelector('.place-destroyer');

placeDestBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});



function sendShipCoords (e){
    let shipType=e.target.parentElement.parentElement.firstElementChild.textContent.toLowerCase()
    let shipForm=document.querySelector(`#input-${shipType}`);
    let shipDirection=document.querySelector(`input#${shipType}-direction`).value;
    let shipCoords=document.querySelector(`input#${shipType}-coords`).value;
    let validCheck=getShipCoords(shipType,shipDirection,shipCoords);
    if(validCheck==false){
        shipForm.reset();
        return;
    }
    shipForm.remove();
}




let startBtn=document.querySelector('.start-btn');
startBtn.addEventListener('click', (e) => {
    //NEED TO FIX
    let checkReady=initializeGame();
    console.log(checkReady);
    if(!checkReady){
        return;
    }
    initializeGame();
    startBtn.textContent='Game has started!';
    realPlayerAttackSquares.forEach((square) => {square.addEventListener("click", playRound)});
});

const realPlayerAttackSquares = (function () {
    let playerGameboard=document.querySelector('.real-player-gameboard');
    let missedAttacksGameboard=playerGameboard.querySelector('.missed-attacks-gameboard');
    let attackSquares=missedAttacksGameboard.querySelectorAll('.game-square');
    return attackSquares;
})();

