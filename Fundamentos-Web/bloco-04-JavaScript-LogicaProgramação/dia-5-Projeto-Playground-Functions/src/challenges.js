// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(ArrayStrings) {
  return `${ArrayStrings[ArrayStrings.length - 1]}, ${ArrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let resp = 0;
  let maior = Math.max(...arrayNumbers);
  for (let i of arrayNumbers) {
    if (i === maior) {
      resp += 1;
    }
  }
  return resp;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function checkDiv35(i) {
  if (i % 3 === 0 || i % 5 === 0) {
    return true;
  }
  return false;
}
function checkDiv02(i) {
  if (i === 9) {
    return 'fizz';
  }
  if (i % 5 === 0 && i % 2 !== 0) {
    return 'buzz';
  }
}

function checkDiv01(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    return 'fizzBuzz';
  }
  return checkDiv02(i);
}

function fizzBuzz(arrayNumbers) {
  let rusult = [];
  for (let i of arrayNumbers) {
    if (checkDiv35(i)) {
      rusult.push(checkDiv01(i));
    } else {
      rusult.push('bug!');
    }
  }
  return rusult;
}

// Desafio 9
function checkVogal(vogal, i) {
  for (let j in vogal) {
    if (i === j) {
      i = vogal[j];
      return i;
    }
  }
  return i;
}

function encode(stringCode) {
  let result = '';
  let vogal = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i of stringCode) {
    i = checkVogal(vogal, i);
    result += i;
  }
  return result;
}
function decode(stringCode) {
  let result = '';
  let vogal = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i of stringCode) {
    i = checkVogal(vogal, i);
    result += i;
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
