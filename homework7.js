function IsSmthNaN(a) {
    var n = +a;
    if (n >= 0 || n < 0) {
        return false;
    } else {
        return true;
    }
}

IsSmthNaN('') // false
IsSmthNaN(' ') // false
IsSmthNaN('5') // false
IsSmthNaN('abc') // true
IsSmthNaN('1abc') // true
IsSmthNaN('1.1') // false
IsSmthNaN('1,1') // true
IsSmthNaN(1.2) // false
IsSmthNaN('NaN') // true
IsSmthNaN(NaN) // true
IsSmthNaN({}) // true
IsSmthNaN({smth: NaN}) // true
IsSmthNaN({smth: 'NaN'}) // true
IsSmthNaN({smth: 'abc'}) // true
IsSmthNaN({smth: 5}) // true
IsSmthNaN(null) // false
IsSmthNaN(0) // false
IsSmthNaN('0') // false
IsSmthNaN(undefined) // true

