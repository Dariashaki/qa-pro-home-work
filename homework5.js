function sum() {
    var numbers = 0;
    for (i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            numbers += i; 
        }
    }
    return numbers;
}
console.log(sum());

//можна було й без функції, але хай вже буде