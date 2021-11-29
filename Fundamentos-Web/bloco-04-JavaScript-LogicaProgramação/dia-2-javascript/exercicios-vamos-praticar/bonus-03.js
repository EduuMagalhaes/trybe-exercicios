let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let dobroNumbers = new Array();

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i+1] != undefined){
    dobroNumbers.push(numbers[i] * numbers[i+1]);
  }
  else{
    dobroNumbers.push(numbers[i] * 2);
  }  
}
console.log(dobroNumbers);