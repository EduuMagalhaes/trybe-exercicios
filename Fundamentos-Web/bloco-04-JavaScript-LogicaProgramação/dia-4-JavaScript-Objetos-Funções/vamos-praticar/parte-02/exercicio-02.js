function indiceDoMaior(array = new Array){
 return array.findIndex(arrays => arrays === Math.max(...array)); 
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));