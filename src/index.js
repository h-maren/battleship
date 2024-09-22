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

realPlayer.gameboard.receiveAttack('H1');



realPlayer.renderGameboard();
compPlayer.renderGameboard();
