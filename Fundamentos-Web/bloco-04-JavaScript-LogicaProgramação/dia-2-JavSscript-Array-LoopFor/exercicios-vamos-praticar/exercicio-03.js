let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
for(let number of numbers){
  som += number;
}
console.log(som / numbers.length);