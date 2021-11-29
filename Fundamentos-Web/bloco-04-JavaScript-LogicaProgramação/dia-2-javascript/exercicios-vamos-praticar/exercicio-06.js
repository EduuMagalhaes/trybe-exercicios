let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for(let number of numbers){
  if(number % 2 != 0)
    result += 1;     
}
if(result > 0){
  console.log(result);
}
else{
  console.log("nenhum valor ímpar encontrado");
}