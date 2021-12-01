function somaAll (numero){
  let result = new Number;
  for(let i = 1; i <= numero; i+=1)
  {
    result += i;
  }
  return result;
}
console.log(somaAll(6));