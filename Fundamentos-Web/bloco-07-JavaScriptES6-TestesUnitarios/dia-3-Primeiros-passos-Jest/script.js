//01
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

//02
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//03
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//04
function checkVogal(element) {
  let vogal = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  for (let j in vogal) {
    if (element === j) {
      element = vogal[j];
      return element;
    }
  }
  return element;
}
function encode(stringCode) { 
  let result = '';
  for (let index of stringCode) {
    index = checkVogal(index);
    result += index;
  }
  return result;
}
function decode(stringCode) {
  let result = '';
  for (let index of stringCode) {
    index = checkVogal(index);
  result += index;
  }  
  return result;
}

function techList(techs, nome) {
  let arrayOnject = [];
  techs = techs.sort();
  if (techs.length > 0) {
    for (let i of techs) {
      arrayOnject.push({ tech: i, name: nome });
    }
    return arrayOnject;
  }
  return 'Vazio!';
}
function hydrate(string) {
  let valor = string.match(/\d+/g).map(Number);
  let resp = 0;
  for (let i of valor) {
    resp += i;
  }
  if (resp > 1) {
    return `${resp} copos de água`;
  }
  return `${resp} copo de água`;
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};
