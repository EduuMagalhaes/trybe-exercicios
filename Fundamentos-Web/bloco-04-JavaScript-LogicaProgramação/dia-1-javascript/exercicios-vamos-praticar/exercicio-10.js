const valorCusto = 50, valorVenda = 95;

if(valorCusto < 0 || valorVenda < 0){
  console.log("valor invalido");
  return "valor invalido";
}
else {
  console.log((valorVenda - (valorCusto + (valorCusto* 0.2))) * 1000);
  return (valorVenda - (valorCusto + (valorCusto* 0.2))) * 1000;
}