// // Задание 1
// let firstStr = "прИвеТ менЯ ЗОВУТ МаРиНа";
// console.log(firstStr);
// let newStr = firstStr.toUpperCase();
// console.log(newStr);


// // Задание 2
// const varString = 'Мел';
// // const varString = 'Ра'; // Иной вариант параметра
// emptyArr = [];

// function searchWords(varString) {
//     const varArray = ['Мельница', 'Жизнь', 'Равенство', 'Меланхолия', 'Радость', 'Ветер', 'Рама', 'Мелодия'];

//     varArray.forEach((varWord) => {
//         if (varWord.toLowerCase().startsWith(varString.toLowerCase())) {
//             emptyArr.push(varWord);
//         }
//     });
//     console.log(emptyArr);
// }
// searchWords(varString);


// // Задание 3
// let number = 32.58884;

// // До меньшего целого
// let newNumberMin = Math.floor(number);
// console.log(newNumberMin);

// // До большего целого
// let newNumberMore = Math.ceil(number);
// console.log(newNumberMore);

// // До ближайшего целого
// let newNumberRound = Math.round(number);
// console.log(newNumberRound);


// // Задание 4
// const varNumber = [52, 53, 49, 21, 32];

// let minNum = Math.min.apply(null, varNumber);
// console.log(minNum);

// let maxNum = Math.max.apply(null, varNumber);
// console.log(maxNum);


// // Задание 5
// let randomNumber;

// function randomOutput(randomNumber) {
//     randomNumber = Math.round(Math.random() * 10);
//     console.log(randomNumber);
// }
// randomOutput();


// // Задание 6
// // Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. 
// // Длина массива должна быть в 2 раза меньше переданного числа.

// const getArray = (num) => {
//     let result = [];

//     for (let i = 0; i < Math.floor(num / 2); i++) {
//         result.push(Math.round(Math.random() * num));
//     }
//     return result;
// }

// console.log(getArray(12));


// // Задание 7
// let randNumber;

// function getRandomNumber(min, max) {
//     randNumber = Math.floor(Math.random() * (max - min) + min);
// }
// getRandomNumber(0, 18);
// console.log(randNumber);


// // Задание 8
// let currentDate = new Date();
// console.log(currentDate);


// // Задание 9
// let date = new Date();
// console.log(date);
// date.setSeconds(date.getSeconds() + 73 * 24 * 60 * 60);

// console.log(date);


// // Задание 10
// // format
// // Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// // Время: <часы>:<минуты>:<секунды>

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// function myTime() {
//     let myDate = new Date();
//     let fullDate = "Дата: " + myDate.getDate() +
//         " " + months[myDate.getMonth()] +
//         " " + myDate.getFullYear() +
//         " - это " + days[myDate.getDay()] +
//         '\n' +
//         "Время: " + myDate.getHours() +
//         ":" + myDate.getMinutes() +
//         ":" + myDate.getSeconds();

//     console.log(fullDate);
// }

// myTime();






