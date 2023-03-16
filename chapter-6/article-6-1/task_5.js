// Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// ------цикл------
function printList(list) {
    let arrValues = [];
    let cloneList = list;

    while(cloneList != null){
        arrValues.push(cloneList.value);
        cloneList = cloneList.next;
    }
    
    let i = arrValues.length - 1;
    
    while(i >= 0){
        console.log(arrValues[i]);
        i--;
    }
}

printList(list);

//-----рекурсия------

function printList(list) {
    
    if(list.next){
        printList(list.next);
    } 

    console.log(list.value);
}

printList(list);