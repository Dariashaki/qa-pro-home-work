function pad(str, symb, count, start) {
    var diff = count - str.length;
    if (diff <= 0) {
        return str;
    }
    var newStr = str;
    for (var i = 0; i < diff; i++) {
        if (start === false) {
            newStr = newStr + symb;
        } else {
            newStr = symb + newStr;
        }
    }
    return newStr;
} 
pad('abcd', '@', 9, true)


function padStart(str, symb, count) {
    return pad(str, symb, count, true);
}
function padEnd(str, symb, count) {
    return pad(str, symb, count, false);
}
