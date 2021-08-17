class GuessingGame {
    constructor() {
        this.arr = [],
        this.low = 0,
        this.high,
        this.middle
    }
    setRange(min, max) {
        for (let i = min; i <= max; i++){
            this.arr.push(i);
        }
        // this.low = this.arr[0];
        this.high = this.arr.length -1;
        return this.arr;
    }

    guess() {

        this.middle = Math.ceil( (this.high + this.low) / 2);
        return this.middle;
    }

    lower() {
        this.high  = this.middle ;
        return this.high
    }

    greater() {
        this.low = this.middle ;
        return this.low;
    }
}





module.exports = GuessingGame;
