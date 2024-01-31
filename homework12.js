var arr = [null, 'abc', '', ' ', 0, 13]; // наш рандомний масив
// оголошуємо функцію для перемішування масиву (аргумент - наш масив)
function myBlend(arr) {
// цикл який проходить по нашому масиву від індексу 0 до кінця
    for (var i = 0; i < arr.length; i++) {
// генеруємо випадковий індекс: Math.random() генерує число від 0 до 1, Math.floor() округлює до цілого
// множення на arr.length дає нам випадковий індекс у межах довжини нашого масиву
        var randomIndex = Math.floor(Math.random() * arr.length);
// зберігаємо значення поточного елементу arr[i] у змінний temp
// обмінюємось значеннями між поточним елементом arr[i] та випадковим елементом arr[randomIndex]
        var temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr; // кінець нашого циклу -> повертаємо наш перемішаний масив
}

console.log(myBlend(arr)); // викликаємо нашу функцію
