const {Ship} = require('./ship.js');
const {Gameboard} = require('./gameboard.js');
const {Player} = require('./player.js');
const {realPlayerAttackSquares} = require('./index.js');


let realPlayer = new Player('real');
let compPlayer = new Player('computer');

//create coords for real player
/*let rpCarrier = new Ship('carrier');
let rpBattleship = new Ship('battleship');
let rpCruiser = new Ship('cruiser');
let rpSub = new Ship('submarine');
let rpDestroyer = new Ship('destroyer');*/7

//create coords for pc player
let pcCarrier = new Ship('carrier');
let pcBattleship = new Ship('battleship');
let pcCruiser = new Ship('cruiser');
let pcSub = new Ship('submarine');
let pcDestroyer = new Ship('destroyer');

//realPlayer.gameboard.placeShip(rpCarrier,'A1','right');
//realPlayer.gameboard.placeShip(rpBattleship,'C6','down');
//realPlayer.gameboard.placeShip(rpCruiser,'I9','left');
//realPlayer.gameboard.placeShip(rpSub,'H6','up');
//realPlayer.gameboard.placeShip(rpDestroyer,'A3','right');


/*compPlayer.gameboard.placeShip(pcCarrier,'B2','down');
compPlayer.gameboard.placeShip(pcBattleship,'F10','right');
compPlayer.gameboard.placeShip(pcCruiser,'H2','down');
compPlayer.gameboard.placeShip(pcSub,'F8','left');
compPlayer.gameboard.placeShip(pcDestroyer,'D10','up');
*/
compPlayerPlaceShips(pcCarrier);
compPlayerPlaceShips(pcBattleship);
compPlayerPlaceShips(pcCruiser);
compPlayerPlaceShips(pcSub);
compPlayerPlaceShips(pcDestroyer);


let compAttacks=[];
let rpAttacks =[];

//pc player places ships randomly
function compPlayerPlaceShips(ship){
    //generate random coordinates
    let [xCompCoord,yCompCoord,compCoord]=generateRandomCoords();
    let shipDirection=String(generateRandomDirection());
    let validCheck=compPlayer.gameboard.placeShip(ship,compCoord,shipDirection);
    while(validCheck==false){
        [xCompCoord,yCompCoord,compCoord]=generateRandomCoords();
        shipDirection=String(generateRandomDirection());
        validCheck=compPlayer.gameboard.placeShip(ship,compCoord,shipDirection)
    }
    compPlayer.gameboard.placeShip(ship,compCoord,shipDirection);
    compPlayer.renderGameboard();
    console.log(compPlayer.gameboard.shipList);
}


let messageContainer=document.querySelector('.game-message');

const getShipCoords = (function(shipType,shipDirection,shipCoords) {
    let newShip = new Ship(shipType);
    let validCheck=realPlayer.gameboard.placeShip(newShip,shipCoords,shipDirection)
    if(validCheck==false){
        messageContainer.textContent=`Input valid coordinates for ${shipType}!`;
        return false;
    }
    realPlayer.gameboard.placeShip(newShip,shipCoords,shipDirection);
    messageContainer.textContent=`Human player put ${newShip.type} at ${shipCoords} facing ${shipDirection}!`
    realPlayer.renderGameboard();
});

const initializeGame = (function (){
    let checkReady=checkIfGameReady();
    console.log(checkReady);
    if(checkReady){
        messageContainer.textContent=`Human player, select your attack by clicking a coordinate on your attacks board!`;
        realPlayer.renderGameboard();
        compPlayer.renderGameboard();
        compAttacks=[];
        rpAttacks=[];
        return true;
    }
    else {
        return false;
    }
});

const checkIfGameReady = (function (){
    let compPlayerReady=compPlayer.gameboard.allShipsPlaced();
    let realPlayerReady=realPlayer.gameboard.allShipsPlaced();
    console.log(realPlayerReady);
    if(!compPlayerReady){
        messageContainer.textContent=`You're computer player is lazy and is not ready!`;
        return false;
    }
    if(!realPlayerReady){
        messageContainer.textContent=`Human player, you haven't placed all your ships yet!`;
        return false;
    }
    return true;
});

const playRound = (function (e){
    let xcoord=e.target.getAttribute("data-xcoord");
    let ycoord=e.target.getAttribute("data-ycoord");
    let coord=convertCoord(xcoord,ycoord);
    if(rpAttacks.includes(coord)){
        messageContainer.textContent=`Pick valid coordinates!`;
        return;
    }
    rpAttacks.push(coord);
    let allRPShipsSunk=realPlayer.gameboard.isAllSunk();
    if(allRPShipsSunk){
        alert("all of real player's ships are sunk!");
        realPlayerAttackSquares.forEach((square) => {square.removeEventListener("click", playRound)});
        return;
    }
    let allCompShipsSunk=compPlayer.gameboard.isAllSunk();
    if(allCompShipsSunk){
            alert("all comp player ships are sunk!");
            realPlayerAttackSquares.forEach((square) => {square.removeEventListener("click", playRound)});
            return;
    }
    compPlayer.gameboard.receiveAttack(coord);
    realPlayer.renderGameboard();
    compPlayer.renderGameboard();
    if(e.target.classList.contains('missed')){
        messageContainer.textContent=`Real player selects ${coord} and misses!`;
        messageContainer.textContent+="\n";
    }
    if(e.target.classList.contains('hit')){
        let shipCheck=compPlayer.gameboard.shipPlacement[xcoord][ycoord].isSunk();
        if(shipCheck==true){  
            messageContainer.textContent=`Real player selects ${coord} and sinks the ${compPlayer.gameboard.shipPlacement[xcoord][ycoord].type}!`;
            messageContainer.textContent+="\n";
        } else {
        messageContainer.textContent=`Real player selects ${coord} and hits a ship!`;
        messageContainer.textContent+="\n";
        }
    }
    //computer player round
    let [xCompCoord,yCompCoord,compCoord]=generateRandomCoords();
    while(compAttacks.includes(compCoord)){
        [xCompCoord,yCompCoord,compCoord]=generateRandomCoords();
    }
    compAttacks.push(compCoord);
    realPlayer.gameboard.receiveAttack(compCoord);
    realPlayer.renderGameboard();
    compPlayer.renderGameboard();
    let compGameboard=document.querySelector('.comp-player-gameboard');
    let compGameboardMA=compGameboard.querySelector('.missed-attacks-gameboard');
    let compSquare=compGameboardMA.querySelector(`[data-xcoord="${xCompCoord}"][data-ycoord="${yCompCoord}"]`);
    if(compSquare.classList.contains('missed')){
        messageContainer.textContent+=`Computer player selects ${compCoord} and misses!`;
    }
    if(compSquare.classList.contains('hit')){
        let shipCheck=realPlayer.gameboard.shipPlacement[xCompCoord][yCompCoord].isSunk();
        if(shipCheck==true){
            messageContainer.textContent=`Comp player selects ${compCoord} and sinks the ${realPlayer.gameboard.shipPlacement[xCompCoord][yCompCoord].type}!`;
        } else {
            messageContainer.textContent+=`Comp player selects ${compCoord} and hits a ship!`;
        }
    }
});

function generateRandomCoords() {
    let xCompCoord=Math.floor(Math.random()*10);
    let yCompCoord=Math.floor(Math.random()*10);
    let compCoord=convertCoord(xCompCoord,yCompCoord);
    return [xCompCoord,yCompCoord,compCoord];
}

function generateRandomDirection(){
    let randomNumber=Math.floor(Math.random()*4);
    let randomDirection="left";
    if(randomNumber==0){
        randomDirection="right";
    }
    if(randomNumber==1){
        randomDirection="down";
    }
    if(randomNumber==2){
        randomDirection="up";
    }
    return randomDirection;
}

function convertCoord(xcoord,ycoord){
    let coord=String.fromCharCode(Number(xcoord)+65)+String(Number(ycoord)+1);
    return coord;
}


module.exports = {playRound, initializeGame, getShipCoords, checkIfGameReady}
