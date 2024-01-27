var services = {
    haircut: '500 uah',
	shaving: '250 uah',
	hairWashing: '50 uah',
    price: function() {
        var total = 0;
        for (var service in this) {
            if (typeof this[service] !== 'function') {
                total += parseInt(this[service]);
            } 
        }
        return total + ' uah';
    },
    minPrice: function () {
        var min;
        for (var service in this) {
            if (typeof this[service] !== 'function') {
                var price = parseInt(this[service]);
                if (min === undefined || price < min) {
                    min = price;
                }
            } 
        }
        return min + ' uah'
    },
    maxPrice: function () {
        var max;
        for (var service in this) {
            if (typeof this[service] !== 'function') {
                var price = parseInt(this[service]);
                if (max === undefined || price > max) {
                    max = price;
                }
            } 
        }
        return max + ' uah'
    }
}

services.styling = '300 uah';
console.log('total:', services.price());
console.log('min:', services.minPrice());
console.log('max:', services.maxPrice());
