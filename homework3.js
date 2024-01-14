// 1 км = 1000 м
// 1 г = 60 хв
// 1 кг = 1000 грм

var unit = 'км';
var ammount = 30;

switch(unit) {
    case 'км':
        console.log(ammount * 1000 + ' м.');
        break;
    case 'г':
        console.log(ammount * 60 + ' хв.');
        break;
    case 'кг':
        console.log(ammount * 1000 + ' грм.');
        break;
    default:
        console.log('Невірна одиниця вимірювання!')
}
