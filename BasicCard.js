function Basic (front, back) {
    this.front = front;
    this.back = back;
    this.frontPrint = function() {
        console.log(this.front);
    }
    this.backPrint = function() {
        console.log(this.back);
    }
}

module.exports = Basic;