/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  Ship\n} = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nclass Gameboard {\n  constructor() {\n    this.shipPlacement = this.initiateBoard();\n    this.missedAttacks = this.initiateBoard();\n    this.shipList = [];\n  }\n  initiateBoard() {\n    let blankBoard = [];\n    for (let i = 0; i < 10; i++) {\n      blankBoard[i] = [];\n      for (let j = 0; j < 10; j++) {\n        blankBoard[i][j] = null;\n      }\n    }\n    return blankBoard;\n  }\n  placeShip(Ship, coord, direction) {\n    //split coordinates into x and y\n    let xcoord = Number(coord.charCodeAt(coord.charAt(0)) - 65);\n    let ycoord = Number(coord.charAt(1)) - 1;\n    if (coord.length == 3) {\n      ycoord = Number(coord.charAt(1) + coord.charAt(2)) - 1;\n    }\n    let shipLength = Ship.length;\n    let shipDirection = direction.toLowerCase();\n    let checkWithinBoard = isWithinBoard(shipLength, shipDirection, xcoord, ycoord);\n    if (!checkWithinBoard) {\n      return false;\n    }\n    let ifValidPlacement = this.isValidPlacement(shipLength, shipDirection, xcoord, ycoord);\n    if (!ifValidPlacement) {\n      return false;\n    }\n    if (shipDirection == \"up\") {\n      for (let i = 0; i < shipLength; i++) {\n        this.shipPlacement[xcoord][ycoord - i] = Ship;\n      }\n    }\n    if (shipDirection == \"down\") {\n      for (let i = 0; i < shipLength; i++) {\n        this.shipPlacement[xcoord][ycoord + i] = Ship;\n      }\n    }\n    if (shipDirection == \"right\") {\n      for (let i = 0; i < shipLength; i++) {\n        this.shipPlacement[xcoord + i][ycoord] = Ship;\n      }\n    }\n    if (shipDirection == \"left\") {\n      for (let i = 0; i < shipLength; i++) {\n        this.shipPlacement[xcoord - i][ycoord] = Ship;\n      }\n    }\n    this.shipList.push(Ship.type);\n  }\n  receiveAttack(coord) {\n    let xcoord = Number(coord.charCodeAt(coord.charAt(0)) - 65);\n    let ycoord = Number(coord.charAt(1)) - 1;\n    if (coord.length == 3) {\n      ycoord = Number(coord.charAt(1) + coord.charAt(2)) - 1;\n    }\n    let checkWithinBoard = isWithinBoard(xcoord, ycoord);\n    if (checkWithinBoard) {\n      return false;\n    }\n    if (this.shipPlacement[xcoord][ycoord] == null) {\n      this.missedAttacks[xcoord][ycoord] = \"missed\";\n    }\n    if (this.shipPlacement[xcoord][ycoord] != null) {\n      this.shipPlacement[xcoord][ycoord].hit();\n      this.missedAttacks[xcoord][ycoord] = \"hit\";\n    }\n  }\n  isAllSunk() {\n    let uniqueShips = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let ship = this.shipPlacement[i][j];\n        if (ship != null) {\n          if (!uniqueShips.includes(ship)) {\n            uniqueShips.push(ship);\n          }\n        }\n      }\n    }\n    let checkIfSunk = uniqueShips.every(ship => ship.isSunk() === true);\n    return checkIfSunk;\n  }\n  isValidPlacement(shipLength, shipDirection, xcoord, ycoord) {\n    if (shipDirection == \"up\") {\n      for (let i = 0; i < shipLength; i++) {\n        if (this.shipPlacement[xcoord][ycoord - i] !== null) {\n          return false;\n        }\n      }\n    }\n    if (shipDirection == \"down\") {\n      for (let i = 0; i < shipLength; i++) {\n        if (this.shipPlacement[xcoord][ycoord + i] !== null) {\n          return false;\n        }\n      }\n    }\n    if (shipDirection == \"right\") {\n      for (let i = 0; i < shipLength; i++) {\n        if (this.shipPlacement[xcoord + i][ycoord] !== null) {\n          return false;\n        }\n      }\n    }\n    if (shipDirection == \"left\") {\n      for (let i = 0; i < shipLength; i++) {\n        if (this.shipPlacement[xcoord - i][ycoord] !== null) {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n  allShipsPlaced() {\n    if (!this.shipList.includes(\"battleship\")) {\n      return false;\n    }\n    if (!this.shipList.includes(\"carrier\")) {\n      return false;\n    }\n    if (!this.shipList.includes(\"battleship\")) {\n      return false;\n    }\n    if (!this.shipList.includes(\"submarine\")) {\n      return false;\n    }\n    if (!this.shipList.includes(\"destroyer\")) {\n      return false;\n    }\n    return true;\n  }\n}\nfunction isWithinBoard(shipLength, shipDirection, xcoord, ycoord) {\n  let newX = xcoord;\n  let newY = ycoord;\n  if (shipDirection == \"up\") {\n    newY = ycoord - shipLength + 1;\n  }\n  if (shipDirection == \"down\") {\n    newY = ycoord + shipLength - 1;\n  }\n  if (shipDirection == \"right\") {\n    newX = xcoord + shipLength - 1;\n  }\n  if (shipDirection == \"left\") {\n    newX = xcoord - shipLength + 1;\n  }\n  if (newX >= 0 && newX <= 9 && newY >= 0 && newY <= 9) {\n    return true;\n  } else {\n    return false;\n  }\n}\nmodule.exports = {\n  Gameboard\n};\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  Ship\n} = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst {\n  Gameboard\n} = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nconst {\n  Player\n} = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nlet realPlayer = new Player(\"real\");\nlet compPlayer = new Player(\"computer\");\n\n//hide comp game squares\nconst compPlayerGameSquares = function () {\n  let compPlayerGameboard = document.querySelector(\".comp-player-gameboard\");\n  let compPlacementGameboard = compPlayerGameboard.querySelector(\".ship-placement-gameboard\");\n  let compPlacementSquares = compPlacementGameboard.querySelectorAll(\".game-square\");\n  return compPlacementSquares;\n}();\ncompPlayerGameSquares.forEach(square => {\n  square.classList.add(\"hide-grey\");\n});\nlet pcCarrier = new Ship(\"carrier\");\nlet pcBattleship = new Ship(\"battleship\");\nlet pcCruiser = new Ship(\"cruiser\");\nlet pcSub = new Ship(\"submarine\");\nlet pcDestroyer = new Ship(\"destroyer\");\ncompPlayerPlaceShips(pcCarrier);\ncompPlayerPlaceShips(pcBattleship);\ncompPlayerPlaceShips(pcCruiser);\ncompPlayerPlaceShips(pcSub);\ncompPlayerPlaceShips(pcDestroyer);\nlet compAttacks = [];\nlet rpAttacks = [];\n\n//pc player places ships randomly\nfunction compPlayerPlaceShips(ship) {\n  //generate random coordinates\n  let [xCompCoord, yCompCoord, compCoord] = generateRandomCoords();\n  let shipDirection = String(generateRandomDirection());\n  let validCheck = compPlayer.gameboard.placeShip(ship, compCoord, shipDirection);\n  while (validCheck == false) {\n    [xCompCoord, yCompCoord, compCoord] = generateRandomCoords();\n    shipDirection = String(generateRandomDirection());\n    validCheck = compPlayer.gameboard.placeShip(ship, compCoord, shipDirection);\n  }\n  compPlayer.gameboard.placeShip(ship, compCoord, shipDirection);\n  compPlayer.renderGameboard();\n}\nlet messageContainer = document.querySelector(\".game-message\");\nconst getShipCoords = function (shipType, shipDirection, shipCoords) {\n  shipDirection = shipDirection.toLowerCase();\n  if (shipDirection == \"right\" || shipDirection == \"left\" || shipDirection == \"up\" || shipDirection == \"down\") {\n    let newShip = new Ship(shipType);\n    let validCheck = realPlayer.gameboard.placeShip(newShip, shipCoords, shipDirection);\n    if (validCheck == false) {\n      messageContainer.textContent = `Input valid coordinates for ${shipType}!`;\n      return false;\n    }\n    realPlayer.gameboard.placeShip(newShip, shipCoords, shipDirection);\n    messageContainer.textContent = `Human player put ${newShip.type} at ${shipCoords} facing ${shipDirection}!`;\n    realPlayer.renderGameboard();\n  } else {\n    messageContainer.textContent = `Must put right, left, up, or down as direction!`;\n    return false;\n  }\n};\nconst initializeGame = function () {\n  let checkReady = checkIfGameReady();\n  if (checkReady) {\n    messageContainer.textContent = `Human player, select your attack by clicking a coordinate on your attacks board!`;\n    realPlayer.renderGameboard();\n    compPlayer.renderGameboard();\n    compAttacks = [];\n    rpAttacks = [];\n    return true;\n  } else {\n    return false;\n  }\n};\nconst checkIfGameReady = function () {\n  let compPlayerReady = compPlayer.gameboard.allShipsPlaced();\n  let realPlayerReady = realPlayer.gameboard.allShipsPlaced();\n  if (!compPlayerReady) {\n    messageContainer.textContent = `You're computer player is lazy and is not ready!`;\n    return false;\n  }\n  if (!realPlayerReady) {\n    messageContainer.textContent = `Human player, you haven't placed all your ships yet!`;\n    return false;\n  }\n  return true;\n};\nconst playRound = function (e) {\n  let xcoord = e.target.getAttribute(\"data-xcoord\");\n  let ycoord = e.target.getAttribute(\"data-ycoord\");\n  let coord = convertCoord(xcoord, ycoord);\n  let allCompShipsSunk = compPlayer.gameboard.isAllSunk();\n  let allRPShipsSunk = realPlayer.gameboard.isAllSunk();\n  if (allCompShipsSunk || allRPShipsSunk) {\n    return;\n  }\n  if (rpAttacks.includes(coord)) {\n    messageContainer.textContent = `Pick valid coordinates!`;\n    return;\n  }\n  rpAttacks.push(coord);\n  compPlayer.gameboard.receiveAttack(coord);\n  realPlayer.renderGameboard();\n  compPlayer.renderGameboard();\n  if (e.target.classList.contains(\"missed\")) {\n    messageContainer.textContent = `Real player selects ${coord} and misses!\\n`;\n  }\n  if (e.target.classList.contains(\"hit\")) {\n    let shipCheck = compPlayer.gameboard.shipPlacement[xcoord][ycoord].isSunk();\n    if (shipCheck == true) {\n      messageContainer.textContent = `Real player selects ${coord} and sinks the ${compPlayer.gameboard.shipPlacement[xcoord][ycoord].type}!\\n`;\n      let compSunkenShipList = document.querySelector(\".computer-sunken-ships-list\");\n      let sunkenShipListItem = compSunkenShipList.querySelector(`li.${compPlayer.gameboard.shipPlacement[xcoord][ycoord].type}-sunk`);\n      sunkenShipListItem.classList.add(\"sunken\");\n      allCompShipsSunk = compPlayer.gameboard.isAllSunk();\n      if (allCompShipsSunk) {\n        alert(\"all comp player ships are sunk!\");\n        messageContainer.textContent = `Human player wins!`;\n        compPlayerGameSquares.forEach(square => {\n          square.classList.remove(\"hide-grey\");\n        });\n        return;\n      }\n    } else {\n      messageContainer.textContent = `Real player selects ${coord} and hits a ship!\\n`;\n    }\n  }\n  //computer player round\n  let [xCompCoord, yCompCoord, compCoord] = generateRandomCoords();\n  while (compAttacks.includes(compCoord)) {\n    [xCompCoord, yCompCoord, compCoord] = generateRandomCoords();\n  }\n  compAttacks.push(compCoord);\n  realPlayer.gameboard.receiveAttack(compCoord);\n  realPlayer.renderGameboard();\n  compPlayer.renderGameboard();\n  let compGameboard = document.querySelector(\".comp-player-gameboard\");\n  let compGameboardMA = compGameboard.querySelector(\".missed-attacks-gameboard\");\n  let compSquare = compGameboardMA.querySelector(`[data-xcoord=\"${xCompCoord}\"][data-ycoord=\"${yCompCoord}\"]`);\n  if (compSquare.classList.contains(\"missed\")) {\n    messageContainer.textContent += `Computer player selects ${compCoord} and misses!`;\n  }\n  if (compSquare.classList.contains(\"hit\")) {\n    let shipCheck = realPlayer.gameboard.shipPlacement[xCompCoord][yCompCoord].isSunk();\n    if (shipCheck == true) {\n      messageContainer.textContent = `Comp player selects ${compCoord} and sinks the ${realPlayer.gameboard.shipPlacement[xCompCoord][yCompCoord].type}!`;\n      let humanSunkenShipList = document.querySelector(\".human-sunken-ships-list\");\n      let sunkenShipListItem = humanSunkenShipList.querySelector(`li.${realPlayer.gameboard.shipPlacement[xcoord][ycoord].type}-sunk`);\n      sunkenShipListItem.classList.add(\"sunken\");\n      if (allRPShipsSunk) {\n        alert(\"all of real player's ships are sunk!\");\n        messageContainer.textContent = `Comp player wins!`;\n        compPlayerGameSquares.forEach(square => {\n          square.classList.remove(\"hide-grey\");\n        });\n        return;\n      }\n    } else {\n      messageContainer.textContent += `Comp player selects ${compCoord} and hits a ship!`;\n    }\n  }\n};\nfunction generateRandomCoords() {\n  let xCompCoord = Math.floor(Math.random() * 10);\n  let yCompCoord = Math.floor(Math.random() * 10);\n  let compCoord = convertCoord(xCompCoord, yCompCoord);\n  return [xCompCoord, yCompCoord, compCoord];\n}\nfunction generateRandomDirection() {\n  let randomNumber = Math.floor(Math.random() * 4);\n  let randomDirection = \"left\";\n  if (randomNumber == 0) {\n    randomDirection = \"right\";\n  }\n  if (randomNumber == 1) {\n    randomDirection = \"down\";\n  }\n  if (randomNumber == 2) {\n    randomDirection = \"up\";\n  }\n  return randomDirection;\n}\nfunction convertCoord(xcoord, ycoord) {\n  let coord = String.fromCharCode(Number(xcoord) + 65) + String(Number(ycoord) + 1);\n  return coord;\n}\nmodule.exports = {\n  playRound,\n  initializeGame,\n  getShipCoords,\n  checkIfGameReady\n};\n\n//# sourceURL=webpack://battleship/./src/gameplay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  Ship\n} = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst {\n  Gameboard\n} = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nconst {\n  Player\n} = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst {\n  playRound,\n  initializeGame,\n  getShipCoords,\n  checkIfGameReady\n} = __webpack_require__(/*! ./gameplay.js */ \"./src/gameplay.js\");\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\nlet placeCarrierBtn = document.querySelector(\".place-carrier\");\nplaceCarrierBtn.addEventListener(\"click\", e => {\n  sendShipCoords(e);\n});\nlet placeBattleshipBtn = document.querySelector(\".place-battleship\");\nplaceBattleshipBtn.addEventListener(\"click\", e => {\n  sendShipCoords(e);\n});\nlet placeCruiserBtn = document.querySelector(\".place-cruiser\");\nplaceCruiserBtn.addEventListener(\"click\", e => {\n  sendShipCoords(e);\n});\nlet placeSubBtn = document.querySelector(\".place-submarine\");\nplaceSubBtn.addEventListener(\"click\", e => {\n  sendShipCoords(e);\n});\nlet placeDestBtn = document.querySelector(\".place-destroyer\");\nplaceDestBtn.addEventListener(\"click\", e => {\n  sendShipCoords(e);\n});\nfunction sendShipCoords(e) {\n  let shipType = e.target.parentElement.firstElementChild.textContent.toLowerCase();\n  let shipForm = document.querySelector(`#input-${shipType}`);\n  let shipDirection = document.querySelector(`input#${shipType}-direction`).value;\n  let shipCoords = document.querySelector(`input#${shipType}-coords`).value;\n  let validCheck = getShipCoords(shipType, shipDirection, shipCoords);\n  if (validCheck == false) {\n    shipForm.reset();\n    return;\n  }\n  shipForm.remove();\n}\nlet startBtn = document.querySelector(\".start-btn\");\nstartBtn.addEventListener(\"click\", startGame);\nfunction startGame() {\n  let checkReady = initializeGame();\n  if (!checkReady) {\n    return;\n  }\n  initializeGame();\n  startBtn.textContent = \"Game has started!\";\n  realPlayerAttackSquares.forEach(square => {\n    square.addEventListener(\"click\", playRound);\n  });\n  startBtn.removeEventListener(\"click\", startGame);\n}\nconst realPlayerAttackSquares = function () {\n  let playerGameboard = document.querySelector(\".real-player-gameboard\");\n  let missedAttacksGameboard = playerGameboard.querySelector(\".missed-attacks-gameboard\");\n  let attackSquares = missedAttacksGameboard.querySelectorAll(\".game-square\");\n  return attackSquares;\n}();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  Gameboard\n} = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nclass Player {\n  constructor(playerType) {\n    if (playerType !== \"computer\" && playerType !== \"real\") {\n      throw new Error(\"Invalid player type! Input real or computer!\");\n    }\n    this.playerType = playerType;\n    this.gameboard = new Gameboard();\n  }\n  renderGameboard() {\n    let parentShipContainer = document.querySelector(\".real-player-gameboard\");\n    let parentMissedAttackContainer = document.querySelector(\".comp-player-gameboard\");\n    if (this.playerType == \"computer\") {\n      parentShipContainer = document.querySelector(\".comp-player-gameboard\");\n      parentMissedAttackContainer = document.querySelector(\".real-player-gameboard\");\n    }\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let ship = this.gameboard.shipPlacement[i][j];\n        let shipGameboard = parentShipContainer.querySelector(\".ship-placement-gameboard\");\n        let missedAttack = this.gameboard.missedAttacks[i][j];\n        let missedAttackGameboard = parentMissedAttackContainer.querySelector(\".missed-attacks-gameboard\");\n        let xValue = String(i);\n        let yValue = String(j);\n        if (ship) {\n          let gameSquare = shipGameboard.querySelector(`[data-xcoord=\"${xValue}\"][data-ycoord=\"${yValue}\"]`);\n          gameSquare.classList.add(\"ship\");\n        }\n        if (missedAttack) {\n          let missedSquare = missedAttackGameboard.querySelector(`[data-xcoord=\"${xValue}\"][data-ycoord=\"${yValue}\"]`);\n          if (missedAttack) {\n            missedSquare.classList.add(missedAttack);\n          }\n        }\n      }\n    }\n  }\n}\nmodule.exports = {\n  Player\n};\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n  constructor(type) {\n    this.length = this.findLength(type);\n    this.numHits = 0;\n    this.type = type.toLowerCase();\n  }\n  findLength(type) {\n    let newString = type.toLowerCase();\n    if (newString == \"carrier\") {\n      return 5;\n    }\n    if (newString == \"battleship\") {\n      return 4;\n    }\n    if (newString == \"cruiser\") {\n      return 3;\n    }\n    if (newString == \"submarine\") {\n      return 3;\n    }\n    if (newString == \"destroyer\") {\n      return 2;\n    } else {\n      throw new Error(\"input a valid ship!\");\n    }\n  }\n  hit() {\n    this.numHits++;\n  }\n  isSunk() {\n    if (this.numHits >= this.length) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\nmodule.exports = {\n  Ship\n};\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/blackopsone-regular-webfont.woff2 */ \"./src/fonts/blackopsone-regular-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/blackopsone-regular-webfont.woff */ \"./src/fonts/blackopsone-regular-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/quantico-bold-webfont.woff2 */ \"./src/fonts/quantico-bold-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/quantico-bold-webfont.woff */ \"./src/fonts/quantico-bold-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/quantico-regular-webfont.woff2 */ \"./src/fonts/quantico-regular-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/quantico-regular-webfont.woff */ \"./src/fonts/quantico-regular-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n\n@font-face {\n    font-family: 'black_ops_oneregular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n         url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'quanticobold';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),\n         url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'quanticoregular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('woff2'),\n         url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\nbody {\n    font-family: 'quanticoregular', Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-columns: 2fr 3fr 3fr;\n}\n\nbutton {\n    font-family: 'quanticoregular', Arial, Helvetica, sans-serif;\n}\n\n.header, .game-message {\n    grid-column: 1/2;\n    text-align: center;\n}\n\nh1, h2, h3, h4 {\n    font-family: 'black_ops_oneregular','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: 5px;\n    text-align: center;\n}\n\nul {\n    margin: 0px;\n    padding: 0px;\n}\n\nli {\n    list-style-type: none;\n    display: inline-block;\n    padding: 0 10px;\n}\n\n.form-row {\n    display: flex;\n    align-items: center;\n}\n\n.real-player-gameboard {\n    grid-column: 2/3;\n}\n\n.comp-player-gameboard {\n    grid-column: 3/4;\n}\n\n.play-interface {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.missed-attacks-gameboard, .ship-placement-gameboard {\n    display: grid;\n    grid-template-columns: repeat(11,30px);\n    grid-template-rows: repeat(11,30px);\n}\n\n.game-square {\n    border-style: groove;\n    border-color: black;\n    border-width: 1px;\n}\n\n.legend-square {\n    text-align: center;\n}\n\n.real-player-gameboard, .comp-player-gameboard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.ship-placement-gameboard .game-square {\n    background-color: blue;\n}\n\n.missed-attacks-gameboard .game-square {\n    background-color: red;\n}\n\n.ship-placement-gameboard .ship {\n    background-color: black;\n}\n\n.missed-attacks-gameboard .missed {\n    background-color: yellow;\n}\n\n.missed-attacks-gameboard .hit {\n    background-color: green;\n}\n\n.comp-player-gameboard .ship-placement-gameboard .hide-grey {\n    background-color: grey;\n}\n\n.sunken {\n    color: red;\n}\n\n.input-ships {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.carrier-info, .battleship-info, .cruiser-info, .submarine-info, .destroyer-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.form-row {\n    gap: 10px;\n}\n\nbutton {\n    margin: 10px;\n}\n\ninput {\n    width: 50px;\n    font-family: 'quanticoregular', Arial, Helvetica, sans-serif;\n}\n\n.input-ships h4 {\n    margin-top: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fonts/blackopsone-regular-webfont.woff":
/*!****************************************************!*\
  !*** ./src/fonts/blackopsone-regular-webfont.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e6251cdde2160c0054ab.woff\";\n\n//# sourceURL=webpack://battleship/./src/fonts/blackopsone-regular-webfont.woff?");

/***/ }),

/***/ "./src/fonts/blackopsone-regular-webfont.woff2":
/*!*****************************************************!*\
  !*** ./src/fonts/blackopsone-regular-webfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"da323b2506c773973327.woff2\";\n\n//# sourceURL=webpack://battleship/./src/fonts/blackopsone-regular-webfont.woff2?");

/***/ }),

/***/ "./src/fonts/quantico-bold-webfont.woff":
/*!**********************************************!*\
  !*** ./src/fonts/quantico-bold-webfont.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6736528746984baec13d.woff\";\n\n//# sourceURL=webpack://battleship/./src/fonts/quantico-bold-webfont.woff?");

/***/ }),

/***/ "./src/fonts/quantico-bold-webfont.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/quantico-bold-webfont.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"da25ef51a42987f84d69.woff2\";\n\n//# sourceURL=webpack://battleship/./src/fonts/quantico-bold-webfont.woff2?");

/***/ }),

/***/ "./src/fonts/quantico-regular-webfont.woff":
/*!*************************************************!*\
  !*** ./src/fonts/quantico-regular-webfont.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b198d12407936147af5b.woff\";\n\n//# sourceURL=webpack://battleship/./src/fonts/quantico-regular-webfont.woff?");

/***/ }),

/***/ "./src/fonts/quantico-regular-webfont.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/quantico-regular-webfont.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"641e60e3dd42fce59e6e.woff2\";\n\n//# sourceURL=webpack://battleship/./src/fonts/quantico-regular-webfont.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;