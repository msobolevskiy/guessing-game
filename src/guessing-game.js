class GuessingGame {
constructor() {
    let closestPoint = undefined;
    this.max = undefined;
    this.min = undefined;
}

setRange(min, max) {
    this.max = max;
    this.min = min;
}

guess() {
    this.closestPoint = Math.round((this.min + this.max) / 2);
    return this.closestPoint;
}

lower() {
    this.max = this.closestPoint;
}

greater() {
    this.min = this.closestPoint;
}
}

module.exports = GuessingGame;
