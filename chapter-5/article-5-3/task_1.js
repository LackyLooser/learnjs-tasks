// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('str'))