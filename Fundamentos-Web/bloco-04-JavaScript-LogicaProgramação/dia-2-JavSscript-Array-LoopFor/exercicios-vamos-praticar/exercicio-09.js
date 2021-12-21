let array = new Array();
for(let i = 0; i < 25; i += 1){
  array.push(i + 1);
}
for(let array1 of array){
  console.log(array1 / 2);
}