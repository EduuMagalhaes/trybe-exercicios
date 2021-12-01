function maiorPalavra(array = new Array){
  let maior = new String;
  array.forEach(palavra =>{
    if(palavra.length > maior.length)
      maior = palavra;
  });
  return maior;
 }
 console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));