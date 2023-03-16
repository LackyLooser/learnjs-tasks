// Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// -------- цикл -------
function sumTo(n){
    let result = 0;

    for(let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

//-------- рекурсия -------
function sumTo(n){
    if(n == 1){
        return n
    } else {
        return n + sumTo(n - 1)
    }
}
//-------- арифметическая прогрессия. -------
function sumTo(n) {
    return n * (n + 1) / 2;
  }

console.log(sumTo(100))

// Какой вариант решения самый быстрый? Самый медленный? Почему?

// Самый быстрый с помощью арифметической прогресии потому что он выполняет только вычисления по формуле
// Самый медленный будет рекурсивный т.к в отличии от цикла рекурсии требуется запоминать контекст.

// Можно ли при помощи рекурсии посчитать sumTo(100000)?
// Если движок на котором будет выполнятся код не поддерживает хвостовой вызов то нельзя 
// максимальная глубина рекурсии будет примерно 10000
