// Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


function getSecondsToTomorrow(){
    let time = new Date();
    return 86400 - (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds());
}

console.log(getSecondsToday())
