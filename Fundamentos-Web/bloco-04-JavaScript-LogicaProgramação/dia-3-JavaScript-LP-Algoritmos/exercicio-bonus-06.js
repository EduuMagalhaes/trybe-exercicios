let n = 47, aux = 0;

for(let i=2; i<=n; i+=1){
  if(n%i === 0)
    aux += 1;
}

if(aux == 1){
  console.log("Primo!");
}
else{
  console.log("Não Primo!");
}