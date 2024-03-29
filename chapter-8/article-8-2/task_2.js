// Создайте новый объект с помощью уже существующего

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
// но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.


// будет работать

function Animal(name){
    this.name = name;
}
  
let animal = new Animal('animal');
let rabbit = new animal.constructor('rabbit');

console.log(rabbit.name);

// не будет работать

function Car(name){
    this.name = name;
}
  
Car.prototype = {};

let car = new Car('car');
let honda = new car.constructor('honda');

console.log(honda.name);