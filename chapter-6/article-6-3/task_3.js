// Функция в if
// Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // В режиме обратной совсечтимости результатом будет Hello John
         // В строгом режиме будет ошибка