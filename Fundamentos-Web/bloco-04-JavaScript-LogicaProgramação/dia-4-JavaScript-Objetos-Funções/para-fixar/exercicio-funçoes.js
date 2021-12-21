// exercicio 01

function adicao (a,b){
  return a + b;
}
function subtracao (a,b){
  return a - b;
}
function multiplicacao (a,b){
  return a * b;
}
function divisao (a,b){
  return a / b;
}
function modulo (a,b){
  return a % b;
}

// exercicio 02

function maiorElemento(a,b){
  if(a > b){    
    return a;
  }
  else{    
    return b;
  }
}

// exercicio 03

function maiorElemento3(a,b,c){
  if(a > b && a > c){    
    return a;
  }
  else if(b > c){    
    return b;
  }
  else{    
    return c;
  }
}

// exercicio 04

function checkNegativePositive(a){
  if(a > 0){    
    return "positive";
  }
  else if(a < 0){    
    return "negative";
  }
  else{    
    return "zero";
  }
}

// exercicio 05

function checkTriangulo(anguloA,anguloB,anguloC){
  if(anguloA > 0 && anguloB > 0 && anguloC > 0){
    if(anguloA+anguloB+anguloC === 180){      
      return true;
    }
    else{      
      return false;
    }
  }
  else{    
    return "Valor de angulo invalido";
  }
}