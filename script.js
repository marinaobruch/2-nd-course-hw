function guessMonth() {
    let month = Number(prompt(`Укажите номер месяца`));

    if (month === 12 || month === 1 || month === 2) {
        console.log(`Зима`);
    } else if (month === 3 || month === 4 || month === 5) {
        console.log(`Весна`);
    } else if (month === 6 || month === 7 || month === 8) {
        console.log(`Лето`);
    } else if (month === 9 || month === 10 || month === 11) {
        console.log(`Осень`);
    } else {
        console.log(`Вы ввели некорректное значение`);
    }

    guessMonth();
}