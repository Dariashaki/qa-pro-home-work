//'Рік' - число закінчується на 1 (крім випадків, коли число закінчується на 11)
//'Роки' - число закінчується на 2, 3, або 4 (крім випадків, коли число закінчується на 12, 13, 14)
//'Років' - число закінчується на 0 або 5-9, а також для чисел, закінчених на 11-14.

var age = prompt('Скільки тобі років?', '25');

if (!isNaN(+age) && +age >= 0) { // Перевірка, чи введене значення є числом і не є від'ємним (isNaN функцію ми вчили на 1 занятті і я проссто додала "логічне ні" - !)
  var lastNumber = age[age.length - 1]; // Прорахування останньої цифри віку
  var secondLastNumber = age[age.length - 2]; // Прорахування передостанньої цифри віку

  if (lastNumber === '1' && secondLastNumber !== '1') {
    alert('Тобі ' + age + ' рік.');
  } else if (lastNumber >= 2 && lastNumber <= 4 && secondLastNumber !== '1') {
    alert('Тобі ' + age +  ' роки.');
  } else {
    alert('Тобі ' + age + ' років.');
  }  
} else {
  alert("Будь ласка введіть число і таке, щоб воно не було від'ємне");
}

