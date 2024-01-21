function getRandomValidNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Максимум та мінімум діапазону рандомного числа
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function checkProbabilityTheory(count) {
    var evenNumbers = 0;
    var oddNumbers = 0;
    for (var i = 0; i < count; i++) {
        var rnd = getRandomValidNumber(100, 1000); // 100-1000
        if (rnd % 2 === 0) {
            evenNumbers = evenNumbers + 1;     
        } else {
            oddNumbers = oddNumbers + 1;
        }
        console.log(i, rnd);
    }
    var percentageEven = Math.round((evenNumbers / count) * 100);
    var percentageOdd = Math.round((oddNumbers / count) * 100);
    return {
        quantity: count,
        even: evenNumbers,
        odd: oddNumbers,
        percentageEven: percentageEven, 
        percentageOdd: percentageOdd,
        message: percentageEven + '% до ' + percentageOdd + '%'
    };
}
checkProbabilityTheory(24)
