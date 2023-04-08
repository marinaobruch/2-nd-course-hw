// Задание 1
// function lessNumber(a, b) {
//     if (a <= b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }

//Проверки
// lessNumber(8, 4);
// lessNumber(6, 6);

// Задание 2
// function evenNumber(c) {

//     if (c % 2 == 0) {
//         console.log(`Число четное`);
//     } else {
//         console.log(`Число нечетное`);
//     }
// }

//Проверки
// evenNumber(4);
// evenNumber(-44);
// evenNumber(0);
// evenNumber(5);
// evenNumber(-5);

// Задание 3
// // 3.1
// let squareNumber = (d) => {
//     let result = Math.abs(d) ** 2;
//     console.log(`Возведение числа а в квадрат равно ${result}`);
// }

//Проверки
// squareNumber(4);
// squareNumber(-4);
// squareNumber(5);

// // 3.2
// let squareNumber2 = (e) => {
//     return Math.abs(e) ** 2;
// }

//Проверки
// console.log(squareNumber2(4));
// console.log(squareNumber2(-4));
// console.log(squareNumber2(5));

// Задание 4
// function ageHi(ageUser) {
//     if (ageUser <= 0) {
//         alert(`Вы ввели неправильное значение, повторите попытку`);
//         ageHi(prompt(`Введите свой возраст`)); // Цикл будет повторяться, пока пользователь не введет положительное значение
//     } else if (ageUser > 13) {
//         alert(`Добро пожаловать!`);
//     } else {
//         alert(`Привет, друг!`);
//     }
// }

// ageHi(prompt(`Введите свой возраст`));

// Задание 5
// function variableNumbers(num1, num2) {
//     if (isNaN(num1 * num2) === true) {
//         console.log('Одно или оба значения не являются числом');
//     }
//     else {
//         console.log(num1 * num2);
//     }
// }

// //Проверки
// variableNumbers(5, 5);
// variableNumbers(5, -5);
// variableNumbers(5, 0);
// variableNumbers(5, `rere`);
// variableNumbers(`rere`, 5);
// variableNumbers(`rere`, `rere`);


// Задание 6
// let functionNumber = -1;
// while (functionNumber < 10) {
//     functionNumber = (functionNumber + 1);
//     userVarNumber(functionNumber);
// }

// userVarNumber(`rere`); // Проверка первого условия в функции ниже

// function userVarNumber(varNum) {
//     if (isNaN(varNum) === true) {
//         console.log('Переданный параметр не является числом');
//     }
//     else {
//         let squareNumber = varNum ** 2;
//         console.log(`Полученное значение в кубе равняется ${squareNumber}`);
//     }
// }

// Задание 7
// const circle1 = {
//     radius: 5,
//     getArea: function () {
//         console.log(this.radius ** 2 * 3.14);
//     },

//     getPerimeter: function () {
//         console.log(this.radius * 2 * 3.14);
//     }
// }

// const circle2 = {
//     radius: 10,
//     getArea: function () {
//         console.log(this.radius ** 2 * 3.14);
//     },

//     getPerimeter: function () {
//         console.log(this.radius * 2 * 3.14);
//     }
// }

// circle1.getArea();
// circle2.getArea();

// circle1.getPerimeter();
// circle2.getPerimeter();

