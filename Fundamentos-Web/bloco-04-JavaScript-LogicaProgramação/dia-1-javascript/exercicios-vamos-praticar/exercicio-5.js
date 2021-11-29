const anguloA = 90;
const anguloB = 30;
const anguloC = 60;

if(anguloA > 0 && anguloB > 0 && anguloC > 0){
  if(anguloA+anguloB+anguloC === 180){
    console.log(true);
    return true;
  }
  else{
    console.log(false);
    return false;
  }
}
else{
  console.log("Valor de angulo invalido");
  return "Valor de angulo invalido";
}