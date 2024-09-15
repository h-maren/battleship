//testing ship class
const {Ship} = require('./src/ship.js');

const testCarrierShip = new Ship('carrier');
testCarrierShip.hit();

const testCruiser = new Ship('Cruiser');
testCruiser.hit();
testCruiser.hit();
testCruiser.hit();



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


