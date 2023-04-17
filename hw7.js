// // //Задание 1

// let array1 = [1, 2, 3, 4, 5]

// function mult(arr) {
//     return Math.round(arr.reduce((acc, curr) => acc * curr));
// };

// function sum(arr) {
//     return arr.reduce(((acc, current) => acc + current));
// };

// function getRes(arr, callback) {
//     console.log(callback(arr));
// }

// getRes(array1, mult);
// getRes(array1, sum);


// //Задание 2
// const users = [
//     { name: 'Jon', age: 22 },
//     { name: 'Richard', age: 18 },
//     { name: 'Anton', age: 32 },
//     { name: 'Lida', age: 23 },
//     { name: 'Bob', age: 44 }
// ];

// function compareUser(a, b) {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
// }

// users.sort(compareUser);
// console.log(users);

// //Задание 3
// const array1 = [1, '4', false, 9, 'two'];
// console.log(array1);


// const reversedArr = (arr) => {
//     const reversed = arr.reverse();
//     // console.log(reversed);
//     return reversed;
// }

// const clearNumber = (arr) => {
//     arr = arr.map(str => { return +str }).filter(function (value) {
//         return !Number.isNaN(value);
//     });

//     // console.log(arr);
//     return arr;
// }

// const each = (arr, callback) => {
//     return callback(arr);
// }

// console.log(each(array1, reversedArr));
// console.log(each(array1, clearNumber));


// //Задание 4
// let currentDate = new Date();
// let timerLag = 3;

// const timer = (dedline) => {
//     let time = dedline;
//     console.log(currentDate);
//     const IdInterval = setInterval(() => {
//         time -= 1;

//         function getCurrentTime() {
//             return new Date();
//         }
//         console.log(new Date());
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(IdInterval);
//         console.log("30 секунд прошло");
//     }, 3000 * dedline);
// }

// timer(9);


// //Задание 5
// function calling() {
//     console.log('Звоню!');
// };

// function beeps(callback) {
//     setTimeout(() => {
//         let response = 'Идут гудки...';
//         callback(response);
//     }, 1000);
// }

// function talk(b) {
//     console.log(b);
//     console.log('Разговор');
// }

// let response = beeps(talk);

// calling();

