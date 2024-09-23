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
        //split coordinates into x and y
        let xcoord=Number(coord.charCodeAt(coord.charAt(0))-65);
        let ycoord=Number(coord.charAt(1))-1;
        if(coord.length==3){
            ycoord=Number(coord.charAt(1)+coord.charAt(2))-1;
        }
        let shipLength=Ship.length;
        let shipDirection=direction.toLowerCase();
        if(shipDirection=="up"){
            let checkOffBoard=isOffBoard(xcoord,ycoord-shipLength);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<shipLength; i++){
                this.shipPlacement[xcoord][ycoord-i]=Ship;
            }
        }
        if(shipDirection=="down"){
            let checkOffBoard=isOffBoard(xcoord,ycoord+shipLength);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<shipLength; i++){
                this.shipPlacement[xcoord][ycoord+i]=Ship;
            }
        }
        if(shipDirection=="right"){
            let checkOffBoard=isOffBoard(xcoord+shipLength,ycoord);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<shipLength; i++){
                this.shipPlacement[xcoord+i][ycoord]=Ship;
            }
        }
        if(shipDirection=="left"){
            let checkOffBoard=isOffBoard(xcoord-shipLength,ycoord);
            if(checkOffBoard){
                return;
            }
            for(let i=0; i<shipLength; i++){
                this.shipPlacement[xcoord-i][ycoord]=Ship;
            }
        }
    }
    receiveAttack(coord){
        let xcoord=Number(coord.charCodeAt(coord.charAt(0))-65);
        let ycoord=Number(coord.charAt(1))-1;
        if(coord.length==3){
            ycoord=Number(coord.charAt(1)+coord.charAt(2))-1;
        }
        let checkOffBoard=isOffBoard(xcoord,ycoord);
        if(checkOffBoard){
            return;
        }
        if(this.shipPlacement[xcoord][ycoord]==null){
            this.missedAttacks[xcoord][ycoord]='missed';
        }
        if(this.shipPlacement[xcoord][ycoord]!=null){
            this.shipPlacement[xcoord][ycoord].hit();
            this.missedAttacks[xcoord][ycoord]='hit';
        }
    }
    isAllSunk(){
        let uniqueShips=[];
        for(let i=0; i<10; i++){
            for (let j=0; j<10; j++){
                let ship=this.shipPlacement[i][j]
                if(ship!=null){
                    if(!uniqueShips.includes(ship)){
                        uniqueShips.push(ship);
                    }
                }
            }
        }
        let checkIfSunk=uniqueShips.every(ship=>ship.isSunk()===true);
        return checkIfSunk;
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

module.exports = {Gameboard}