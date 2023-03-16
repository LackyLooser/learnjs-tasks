// Тормозящий (throttling) декоратор
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, 
// передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», 
// игнорируются.

// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», 
// то он выполняется в конце.

function f(a){
  console.log(a)
}

function throttle(func, ms){

    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper(){

    if(isThrottled){ 
        savedArgs = arguments;
        savedThis = this;
        return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function(){
        isThrottled = false;
        if(savedArgs){
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
        }
    }, ms);
    }

  return wrapper;
}
let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);