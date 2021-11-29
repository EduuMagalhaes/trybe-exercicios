let salarioBruto = 3000;

if(salarioBruto <= 1556.94){
  salarioBruto -= (salarioBruto * 0.08);
}
if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  salarioBruto -= (salarioBruto * 0.09);
}
if(salarioBruto >= 2594.93 && salarioBruto <=5189.82){
  salarioBruto -= (salarioBruto * 0.11);
}
if(salarioBruto > 5189.82){
  salarioBruto -= 570.88;
}


if(salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
  salarioBruto -= (salarioBruto * 0.075) - 142.80
}
if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
  salarioBruto -= (salarioBruto * 0.15) - 354.80;
}
if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
  salarioBruto -= (salarioBruto * 0.225) - 636.13;
}
if(salarioBruto > 4664.68){
salarioBruto -= (salarioBruto * 0.275) - 869.36 ;
}

console.log(salarioBruto);