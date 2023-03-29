// Задание 1
// let password = `12345`;
// // console.log(password); // Check
// let userPassword = prompt("Введите пароль");

// if (password === userPassword) {
//     console.log("Пароль введен верно");
// } else {
//     console.log("Пароль введен неправильно");
// }

// Задание 2
// let c = prompt("Введите любое число");
// // console.log(c); // Check

// if (c >= 0 && c < 10) {
//     console.log("Right");
// } else {
//     console.log("Wrong");
// }

// Задание 3
// let d = prompt("Введите любое число");
// // console.log(d); // Check
// let e = prompt("Введите любое число");
// // console.log(e); // Check

// if (d > 100 || e > 100) {
//     console.log("Right");
// } else {
//     console.log("Wrong");
// }

// Задание 4
// let a = 2;
// let b = 3;
// alert(a + b);

// Задание 5
// let monthNumber = Number(prompt("Введите любой месяц года (в формате 1/2/3 и т.д.)"));
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Это зимний месяц");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Это весенний месяц");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Это летний месяц");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Это осенний месяц");
//         break;

//     default:
//         console.log("Такого месяца не существует!");
//         break;
// }


// Задание 7
// let numberRandom = prompt("Пожалуйста, введите любое число");

// // // Проверка, что введенное значение - число
// // if (numberRandom = Number(numberRandom)) {
// //     console.log("Значение введено корректно");
// // } else {
// //     console.log("Введите значение повторно");
// // }

// if (Math.abs(numberRandom) % 2 === 1) {
//     console.log("Число нечетное");
// } else if (Math.abs(numberRandom) % 2 === 0) {
//     console.log("Число четное");
// }
// else {
//     console.log("Введено не число, попробуйте заново");
// }

// Задание 8
// let clientOS = Number(prompt("Для удобства пользования нашими услугами мы предлагаем Вам установить наше мобильное приложение. Введите 0, если Вы используете iOS, и 1, если Вы используете Android"));
// if (clientOS === 0) {
//     console.log("Установите версию приложения для iOS по ссылке");
// } else if (clientOS === 1) {
//     console.log("«Установите версию приложения для Android по ссылке»");
// }
// else {
//     console.log("Повторите попытку");
// }

// Задание 9

// let clientOS = Number(prompt("Введите 0, если Вы используете iOS, и 1, если Вы используете Android"));
// let clientDeviceYear = Number(prompt("Для лучшей работы нашего приложения введите год выпуска Вашего устройства"));

// if (clientOS === 0 && clientDeviceYear > 2015) {
//     console.log("Установите облегченную версию приложения для iOS по ссылке");
// } else if (clientOS === 1 && clientDeviceYear > 2015) {
//     console.log("Установите облегченную версию приложения для Android по ссылке");
// }
// else if (clientOS === 0 && clientDeviceYear <= 2015) {
//     console.log("Установите версию приложения для iOS по ссылке");
// }
// else if (clientOS === 1 && clientDeviceYear <= 2015) {
//     console.log("Установите версию приложения для Android по ссылке");
// }

