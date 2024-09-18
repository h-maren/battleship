const {Ship} = require('./ship.js');

class Gameboard {
    constructor(){
        this.shipPlacement = this.initiateBoard();
        this.missedAttacks = this.initiateBoard();
    }
    initiateBoard(){
        let blankBoard=[];
        for(let i=0; i<10; i++){
            blankBoard[i]=[];
            for (let j=0; j<10; j++){
                blankBoard[i][j]=null;
            }
        }
        return blankBoard;
    }
    placeShip(Ship,coord,direction){
        //split coordinates into
        let xcoord=Number(coord.charCodeAt(coord.charAt(0))-65);
        let ycoord=Number(coord.charAt(1))-1;
        let shipLength=Ship.length;
        let shipDirection=direction.toLowerCase();
        if(shipDirection=="up"){
            let checkOffBoard=isOffBoard(xcoord,ycoord-shipLength);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<=shipLength; i++){
                this.shipPlacement[xcoord][ycoord-i]=Ship;
            }
        }
        if(shipDirection=="down"){
            let checkOffBoard=isOffBoard(xcoord,ycoord+shipLength);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<=shipLength; i++){
                this.shipPlacement[xcoord][ycoord+i]=Ship;
            }
        }
        if(shipDirection=="right"){
            let checkOffBoard=isOffBoard(xcoord+shipLength,ycoord);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<=shipLength; i++){
                this.shipPlacement[xcoord+i][ycoord]=Ship;
            }
        }
        if(shipDirection=="left"){
            let checkOffBoard=isOffBoard(xcoord-shipLength,ycoord);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<=shipLength; i++){
                this.shipPlacement[xcoord-i][ycoord]=Ship;
            }
        }
        function isOffBoard(newX,newY){
            if((newX >= 0)&&(newX <=9)&&(newY >=0)&&(newY <=9)){
                return false;
            }
            else {
                return true;
            }
        }
    }
}

module.exports = {Gameboard}