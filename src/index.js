const {Ship} = require('./ship.js');
const {Gameboard} = require('./gameboard.js');
const {Player} = require('./player.js');
require('./style.css');

let realPlayer = new Player('real');
let compPlayer = new Player('computer');

//create coords for real player
let rpCarrier = new Ship('carrier');
let rpBattleship = new Ship('battleship');
let rpCruiser = new Ship('cruiser');
let rpSub = new Ship('submarine');
let rpDestroyer = new Ship('destroyer');

//create coords for pc player
let pcCarrier = new Ship('carrier');
let pcBattleship = new Ship('battleship');
let pcCruiser = new Ship('cruiser');
let pcSub = new Ship('submarine');
let pcDestroyer = new Ship('destroyer');

realPlayer.gameboard.placeShip(rpCarrier,'A1','right');
realPlayer.gameboard.placeShip(rpBattleship,'C6','down');
realPlayer.gameboard.placeShip(rpCruiser,'I9','left');
realPlayer.gameboard.placeShip(rpSub,'H6','up');
realPlayer.gameboard.placeShip(rpDestroyer,'A3','right');

compPlayer.gameboard.placeShip(pcCarrier,'B2','down');
compPlayer.gameboard.placeShip(pcBattleship,'F10','right');
compPlayer.gameboard.placeShip(pcCruiser,'H2','down');
compPlayer.gameboard.placeShip(pcSub,'F8','left');
compPlayer.gameboard.placeShip(pcDestroyer,'D10','left');

//realPlayer.gameboard.receiveAttack('H1');



realPlayer.renderGameboard();
compPlayer.renderGameboard();

const realPlayerAttackSquares = (function () {
    let playerGameboard=document.querySelector('.real-player-gameboard');
    let missedAttacksGameboard=playerGameboard.querySelector('.missed-attacks-gameboard');
    let attackSquares=missedAttacksGameboard.querySelectorAll('.game-square');
    return attackSquares;
})();

realPlayerAttackSquares.forEach((square) => {square.addEventListener("click", playRound)});

/*
function deactivateSquare(){
    realPlayerAttackSquares.forEach((square) => {square.removeEventListener("click", playRound)});
};*/

let compAttacks=[];
let rpAttacks=[];


function playRound(e){
    //human player round
    let xcoord=e.target.getAttribute("data-xcoord");
    console.log(e.target);
    let ycoord=e.target.getAttribute("data-ycoord");
    let coord=convertCoord(xcoord,ycoord);

    compPlayer.gameboard.receiveAttack(coord);
    let allCompShipsSunk=compPlayer.gameboard.isAllSunk();
    if(allCompShipsSunk){
            alert("all comp player ships are sunk!");
            return;
    }
    realPlayer.renderGameboard();
    compPlayer.renderGameboard();
    let messageContainer=document.querySelector('.game-message');
    if(e.target.classList.contains('missed')){
        messageContainer.textContent=`Real player selects ${coord} and misses!\n`;
    }
    if(e.target.classList.contains('hit')){
        let shipCheck=compPlayer.gameboard.shipPlacement[xcoord][ycoord].isSunk();
        console.log(shipCheck);
        if(shipCheck==true){  
            messageContainer.textContent=`Real player selects ${coord} and sinks the ${compPlayer.gameboard.shipPlacement[xcoord][ycoord].type}!`;
        } else {
        messageContainer.textContent=`Real player selects ${coord} and hits a ship!\n`;
        }
    }
    //computer player round
    console.log(compAttacks);
    let [xCompCoord,yCompCoord,compCoord]=generateRandomCoords();
    while(compAttacks.includes(compCoord)){
        [xCompCoord,yCompCoord,compCoord]=generateRandomCoords();
    }
    compAttacks.push(compCoord);
    console.log(compCoord);
    realPlayer.gameboard.receiveAttack(compCoord);
    let allRPShipsSunk=realPlayer.gameboard.isAllSunk();
    if(allRPShipsSunk){
        alert("all of real player's ships are sunk!");
        return;
    }
    realPlayer.renderGameboard();
    compPlayer.renderGameboard();
    let compGameboard=document.querySelector('.comp-player-gameboard');
    let compGameboardMA=compGameboard.querySelector('.missed-attacks-gameboard');
    let compSquare=compGameboardMA.querySelector(`[data-xcoord="${xCompCoord}"][data-ycoord="${yCompCoord}"]`);
    if(compSquare.classList.contains('missed')){
        messageContainer.textContent+=`\nComputer player selects ${compCoord} and misses!`;
    }
    if(compSquare.classList.contains('hit')){
        let shipCheck=realPlayer.gameboard.shipPlacement[xCompCoord][yCompCoord].isSunk();
        if(shipCheck==true){
            messageContainer.textContent=`Comp player selects ${compCoord} and sinks the ${realPlayer.gameboard.shipPlacement[xCompCoord][yCompCoord].type}!`;
        } else {
            messageContainer.textContent+=`Comp player selects ${compCoord} and hits a ship!`;
        }
    }
}

function generateRandomCoords() {
    let xCompCoord=Math.floor(Math.random()*10);
    let yCompCoord=Math.floor(Math.random()*10);
    let compCoord=convertCoord(xCompCoord,yCompCoord);
    return [xCompCoord,yCompCoord,compCoord];
}

function convertCoord(xcoord,ycoord){
    let coord=String.fromCharCode(Number(xcoord)+65)+String(Number(ycoord)+1);
    return coord;
}