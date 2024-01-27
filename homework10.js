var candy = {
    flavour: 'milk',
    quantity: 1,
    price: 200,
    getInfo: function () {
        for (var key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ': ' + this[key]);
            }
        }
    }
};

candy.getInfo();
console.log('');
candy.discount = '10%';
candy.getInfo();
















