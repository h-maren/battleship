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

realPlayer.gameboard.placeShip(rpCarrier,'A1','right');
realPlayer.gameboard.placeShip(rpBattleship,'C6','down');
realPlayer.gameboard.placeShip(rpCruiser,'I9','left');
realPlayer.gameboard.placeShip(rpSub,'H6','up');
realPlayer.gameboard.placeShip(rpDestroyer,'A10','right');