// Desafio 10
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

// Desafio 11
function checkNumber(arrayNumber, i) {
  let cont = 0;
  for (let j of arrayNumber) {
    if (i === j) {
      cont += 1;
    }
  }
  if (cont >= 3) {
    return true;
  }
  return false;
}

function repeteTres(arrayNumber) {
  let resp;
  for (let i of arrayNumber) {
    resp = checkNumber(arrayNumber, i);
    if (resp === true) {
      return resp;
    }
  }
  return resp;
}

function checkPho1(aNum) {
  if (aNum.length === 11 && Math.min(...aNum) >= 0
  && Math.max(...aNum) <= 9 && repeteTres(aNum) !== true) {
    return true;
  }
  return false;
}
function checkPho2(aNum) {
  if (aNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (Math.min(...aNum) < 0 || Math.max(...aNum) >= 9 || repeteTres(aNum) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

function generatePhoneNumber(aNum) {
  if (checkPho1(aNum)) {
    let phoneNumber = `(${aNum[0]}${aNum[1]}) ${aNum[2]}${aNum[3]}${aNum[4]}${aNum[5]}`;
    phoneNumber += `${aNum[6]}-${aNum[7]}${aNum[8]}${aNum[9]}${aNum[10]}`;
    return phoneNumber;
  }
  return checkPho2(aNum);
}

// Desafio 12
function checkTriang1(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC) {
    return true;
  }
  return false;
}
function checkTriang2(lineA, lineB, lineC) {
  if (lineC < lineB + lineA && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}
function checkTriang3(lineA, lineB, lineC) {
  if (lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}

function triangleCheck(A, B, C) {
  if (checkTriang1(A, B, C) && checkTriang2(A, B, C) && checkTriang3(A, B, C)) {
    return true;
  }
  return false;
}

// Desafio 13
// Referencia da sintaxe .match().map() retirada do site -> https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
