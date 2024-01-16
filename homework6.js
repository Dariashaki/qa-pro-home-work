function pow(x, y) {
    if (y === 0) {
        return 1;
    }
    var positiveY = y < 0 ? -y : y
    var result = 1;
    for (var i = 1; i <= positiveY; i++) {
        result *= x;
    }
    if (y < 0) {
        return 1 / result;
    }
    return result;
}
console.log(pow(0, -1));

 
