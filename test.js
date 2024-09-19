//testing ship class
const {Ship} = require('./src/ship.js');
const {Gameboard} = require('./src/gameboard.js');

const testCarrierShip = new Ship('carrier');
testCarrierShip.hit();

const testCruiser = new Ship('Cruiser');
testCruiser.hit();
testCruiser.hit();
testCruiser.hit();
const gameBoard3=new Gameboard;
gameBoard3.placeShip(testCruiser,'B2','down');

const testSub = new Ship('submarine');
const gameBoard = new Gameboard;
const gameBoard2 = new Gameboard;
gameBoard.placeShip(testSub,'A1','right');

gameBoard2.placeShip(testCruiser,'A1','up');

gameBoard.receiveAttack('B1');

gameBoard.receiveAttack('F1');

test('check length of cruiser', () => {
    expect(testCruiser.length).toBe(3);
});

test('check if cruiser ship has 3 hits', () => {
    expect(testCruiser.numHits).toBe(3);
});

test('check if cruiser with 3 hits is sunk', () => {
    expect(testCruiser.isSunk()).toBeTruthy();
});

test('check if carrier ship with one hit is sunk', () => {
    expect(testCarrierShip.beenSunk).toBeFalsy();
});

test('check length', () => {
    expect(testCarrierShip.length).toBe(5)
});

test('hit function', () => {
    expect(testCarrierShip.numHits).toBe(1);
});

test('placing ship on gameboard', () => {
    expect(gameBoard.shipPlacement[0][0].type).toBe('submarine');
});

test('placing ship on gameboard', () => {
    expect(gameBoard.shipPlacement[1][0].type).toBe('submarine');
});

test('placing ship on gameboard', () => {
    expect(gameBoard.shipPlacement[2][0].type).toBe('submarine');
});

test('check empty spot on gameboard', () => {
    expect(gameBoard.shipPlacement[3][3]).toBeNull();
});

test('placing ship out of gameboard', () => {
    expect(gameBoard2.shipPlacement[0][0]).toBeNull();
});

test('if sub has been hit', () => {
    expect(testSub.numHits).toBe(1);
});

test('if sub has sunk', ()=> {
    expect(testSub.isSunk()).toBeFalsy();
});
test('if showing missed attack', () => {
    expect(gameBoard.missedAttacks[5][0]).toBe('missed');
});
test('are all ships sunk on gameboard 1', () => {
    expect(gameBoard.isAllSunk()).toBeFalsy();
});
test('are all ships sunk on gameboard 3', () => {
    expect(gameBoard3.isAllSunk()).toBeTruthy();
});