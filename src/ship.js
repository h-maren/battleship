class Ship {
    constructor(type){
        this.length=this.findLength(type);
        this.numHits=0;
        this.type=type.toLowerCase();
    }
    findLength(type){
        let newString=type.toLowerCase();
        if(newString=='carrier'){
            return 5;
        }
        if(newString=='battleship'){
            return 4;
        }
        if(newString=='cruiser'){
            return 3;
        }
        if(newString=='submarine'){
            return 3;
        }
        if(newString=='destroyer'){
            return 2;
        }
        else {
            throw new Error('input a valid ship!');
        }
    }
    hit(){
        this.numHits++;
    }
    isSunk(){
        if(this.numHits>=this.length){
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = {Ship}