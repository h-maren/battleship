const {Gameboard} = require('./gameboard.js');

class Player {
    constructor(playerType){
        if(playerType !== 'computer' && playerType !== 'real'){
            throw new Error('Invalid player type! Input real or computer!');
        }
        this.playerType=playerType;
        this.gameboard=new Gameboard;
    }
}

module.exports = {Player}