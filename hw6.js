// // Задание 1
// let firstStr = "прИвеТ менЯ ЗОВУТ МаРиНа";
// console.log(firstStr);
// let newStr = firstStr.toUpperCase();
// console.log(newStr);


// // Задание 2
// function searchWords() {
//     const varArray = ['Мельница', 'Жизнь', 'Сознание', 'Меланхолия', 'Радость', 'Ветер', 'Окно', 'Мелодия'];
//     const varString = 'Мел';
//     emptyArr = [];

//     varArray.forEach((varWord) => {
//         if (varWord.toLowerCase().startsWith(varString.toLowerCase())) {
//             emptyArr.push(varWord);
//         }
//     });
//     console.log(emptyArr);
// }
// searchWords();


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
// const getNumber = 12;
// let lengthArr = getNumber / 2; // 6
// let randNumber;

// function getRandomArrNumbers() {
//     for (const newArr = []; newArr.length <= lengthArr;) {

//         function getRandomNumber(min, max) {
//             randNumber = Math.floor(Math.random() * (max - min) + min);
//         }
//         getRandomNumber(0, lengthArr);

//         newArr.push(randNumber);
//         console.log(newArr);
//     }
// }

// getRandomArrNumbers();


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






