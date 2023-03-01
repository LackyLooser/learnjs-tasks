// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.


  
  let arr = ["HTML", "JavaScript", "CSS"];

  function copySorted(arr){
    return arr.slice().sort();
  }
  
  let copyArr = copySorted(arr);
  
  console.log( copyArr );
  console.log( arr );