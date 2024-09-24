const {Ship} = require('./ship.js');
const {Gameboard} = require('./gameboard.js');
const {Player} = require('./player.js');
const {playRound, initializeGame, getShipCoords} = require('./gameplay.js');
require('./style.css');


let placeCarrierBtn=document.querySelector('.place-carrier');

placeCarrierBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});

let placeBattleshipBtn=document.querySelector('.place-battleship');

placeBattleshipBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});

let placeSubBtn=document.querySelector('.place-submarine');

placeSubBtn.addEventListener("click", (e) => {
    sendShipCoords(e);
});

/*placeSubBtn.addEventListener("click", () => {
    let shipDirection=document.querySelector('input#sub-direction').value;
    let shipCoords=document.querySelector('input#sub-coords').value;
    let shipType='submarine';
    let validCheck=getShipCoords(shipType,shipDirection,shipCoords);
    if(validCheck==false){
        placeSubForm.reset();
        return;
    }
    placeSubForm.remove();
});*/

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