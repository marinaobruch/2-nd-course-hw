// // Задание 1
// const arrVar = [1, 5, 4, 10, 0, 3];

// for (let a = 0; a < arrVar.length; a++) {
//     if (arrVar[a] == 10) break;
//     console.log(arrVar[a]);
// }

// // Задание 2
// const array = [1, 5, 4, 10, 0, 3];

// for (let a = 0; a < array.length; a++) {
//     if (array[a] !== 4) continue;
//     console.log(a); // Выведет "2", т.к. счет массива начинается с "0"
// }

// // Задание 3
// let greetings = [1, 3, 5, 10, 20];
// greetings = greetings.join(' ');
// console.log(greetings);

// // // Задание 4
// const arr = []

// for (let i = 0; i <= 2; i++) {
//     arr.push([]);
//     for (let j = 0; j <= 2; j++) {
//         arr[i][j] = 1;
//     }
// }

// console.log(arr);

// // Задание 5
// let array5 = [1, 1, 1];
// array5.push(2, 2, 2);
// console.log(array5);

// // Задание 6
// let array6 = [9, 8, 7, 'a', 6, 5];
// array6 = array6.sort();
// console.log(array6);
// array6.pop();
// console.log(array6);

// // Задание 7
// let array7 = [9, 8, 7, 6, 5];

// let userNumber = Number(prompt("Введите число от 1 до 10"));

// if (array7.includes(userNumber)) {
//     console.log("Ваше число есть в массиве");
// } else {
//     console.log("Ваше число не в массиве");
// }

// // Задание 8
// let str = 'abcdef';

// let arr = str.split('');
// console.log(arr);

// let arrRev = arr.reverse();
// console.log(arrRev);

// let result = arrRev.join('');
// console.log(result);

// // // Задание 9
// let array9 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// let newArr = array9.flat(2);
// console.log(newArr);

// // Задание 10
// let array10 = [1, 6, 9, 4, 5, 8];

// for (let a = 0; a < array10.length; a++) {
//     if (a < array10.length - 1) {
//         console.log(array10[a] + array10[a + 1]);
//     } else {
//         console.log(array10[a]);
//     }
// }

// // Задание 11
// const array11 = [5, 2, 4, 8, 6];
// console.log(array11);
// let result = array11.map(item => (item ** 2));
// console.log(result);

// // Задание 12
// let array12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];

// // New method
// let newArr = array12.map(function (far) { return far.length });
// console.log(newArr);

// // Old method
// let newArrSec = array12.map((far) => {
//     return far.length;
// });
// console.log(newArrSec);


// Попытки создать через функцию for (не увенчались успехом))
// for (let a = 0; a < array12.length; a++) {
//     let newArr = array12[a];
//     // console.log(newArr);

//     let combArr = newArr.split('');
//     // console.log(combArr);

//     let getLengthWords = (newArr.length);
//     // console.log(getLengthWords);

//     let newArray1 = [getLengthWords];
//     console.log(newArray1);

//     // let combString = newArray2.split(' ');
//     // console.log(combString);

// }

// // // Задание 13
// let array13 = [1, -2, 3, 4, -6, 10, -5, 78, -97];

// // New method
// let newArr = array13.filter(function (item) { return item < 0 });
// console.log(newArr);

// // Old method
// const resultFilter = array13.filter(item => item < 0);
// console.log(resultFilter);
