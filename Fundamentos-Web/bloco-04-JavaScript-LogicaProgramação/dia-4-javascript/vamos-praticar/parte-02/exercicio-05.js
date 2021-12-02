function maisRepete(array = new Array){
  let cont = 0;
  let resp = [0,0];
  
  for(let i of array){    
    for(let j of array){
      if(i == j)
        cont += 1;
    }    
    if(cont > resp[1]){
      resp[0] = i;
      resp[1] = cont;
    }
    cont = 0;
  }
  return resp[0];  
 }
 console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));