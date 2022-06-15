// Задача 1
let password = '123456789';

if ((password.length >= 4) && ((password.indexOf('-') >= 0) || (password.indexOf('_') >= 0))) {
    console.log('Пароль надежный');
} else {
    console.log('Пароль не надежный');
}

// Задача 2

let myName = 'KoNSTAntiN';
let mySurname = 'Bavin';

let firstSymbolName = myName[0].toUpperCase();
let firstSymbolSurname = mySurname[0].toUpperCase();

let allSymbolsName = (myName.substring(1)).toLowerCase();
let allSymbolsSurname = (mySurname.substring(1)).toLowerCase();

let nameResult = firstSymbolName + allSymbolsName;
let surnameResult  = firstSymbolSurname + allSymbolsSurname; 

console.log(nameResult + ' ' + surnameResult);

console.log(myName === nameResult ? 'Имя осталось без изменений' : 'Имя было преобразовано');
console.log(mySurname === surnameResult ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована');