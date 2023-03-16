// Армия функций
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;

    let shooter = function() { 
      console.log( j ); 
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); 
army[5](); 

// Не работало потому что в момент вызова army[0]() и army[5]() цикл закончился и i == 10;
