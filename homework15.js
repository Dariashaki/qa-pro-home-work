var regexp = /^[a-z\d]+(\.[a-z\d]+)?@(gmail\.com|yahoo\.com)$/i;
var result = [];

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

for (var user of arr) {
    if (regexp.test(user.email)) {
        result.push(user.email);
    }
}

console.log(result);