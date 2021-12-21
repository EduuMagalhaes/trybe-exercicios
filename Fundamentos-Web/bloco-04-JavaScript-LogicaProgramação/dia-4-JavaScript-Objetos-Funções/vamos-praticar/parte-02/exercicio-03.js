function indiceDoMaior(array = new Array){
  return array.findIndex(arrays => arrays === Math.min(...array)); 
 }
 console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]));