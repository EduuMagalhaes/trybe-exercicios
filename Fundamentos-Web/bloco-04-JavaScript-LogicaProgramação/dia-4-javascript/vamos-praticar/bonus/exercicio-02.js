function arrayOfNumbers(array){
  let result = new Array;  
  for(let i = 0; i < array.length; i+= 1){
    array[i].forEach(number =>{
      if(number % 2 === 0)
        result.push(number);
    });
  }
  return result;  
}
console.log(arrayOfNumbers([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]]));
