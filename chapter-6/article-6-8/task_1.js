//  Вывод каждую секунду
//  Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

//  Сделайте два варианта решения.

//  Используя setInterval.
//  Используя рекурсивный setTimeout.

//--------setInterval-------

function printNumbers(from, to){
    let num = from;
    const timerId = setInterval(function(){
        console.log(num++);
        if(num > to){
            clearInterval(timerId);
        } 
    },1000);
}
printNumbers(3,6);
//----- рекурсивный setTimeout-------

function printNumbers(from, to){
    let num = from;

    setTimeout(function recursiveTimeout(){

        console.log(num++);

        if(num <= to){
            setTimeout(recursiveTimeout, 1000);
        }  
    },1000);
    
}

printNumbers(3,6);

