// First game
// // Запуск кода через Onclick
function guessMonth() {
    const month = Number(prompt(`Укажите номер месяца`));

    if (month === 12 || month === 1 || month === 2) {
        console.log(`Зима`);
        alert(`Зима`);
    } else if (month === 3 || month === 4 || month === 5) {
        console.log(`Весна`);
        alert(`Весна`);
    } else if (month === 6 || month === 7 || month === 8) {
        console.log(`Лето`);
        alert(`Лето`);
    } else if (month === 9 || month === 10 || month === 11) {
        console.log(`Осень`);
        alert(`Осень`);
    } else {
        alert(`Вы ввели некорректное значение`);
        console.log(`Вы ввели некорректное значение`);
    }
}


// Second game
// // Запуск кода через Onclick

function guessWords() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list);

    let rightFirstWord = list[0];
    console.log(rightFirstWord); // Проверка
    let rightLasttWord = list[6];
    console.log(rightLasttWord); // Проверка

    let firstUserWord = prompt("Какое было первое слово?");
    console.log(firstUserWord); // Проверка
    let lastUserWord = prompt("Какое было последнее слово?");
    console.log(lastUserWord); // Проверка

    if (rightFirstWord.toLowerCase() === firstUserWord.toLowerCase() && rightLasttWord.toLowerCase() === lastUserWord.toLowerCase()) {
        alert('Поздравляю! Ты чемпион!! Ты верно всё запомнил!!!');
    } else if (rightFirstWord.toLowerCase() === firstUserWord.toLowerCase() || rightLasttWord.toLowerCase() === lastUserWord.toLowerCase()) {
        alert('Ты был близок к победе! Сыграй еще и пробуй угадать оба слова');
    }
    else {
        alert("Ты ответил неверно :(( Попробуй еще разок!");
    }

}

