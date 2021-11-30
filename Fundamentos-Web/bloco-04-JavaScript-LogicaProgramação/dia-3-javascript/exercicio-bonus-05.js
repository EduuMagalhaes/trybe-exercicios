let n = 7;

if(n > 0 && n%2 != 0){
  for(let j = 0; j < (n+1)/2; j += 1){
    let resp = new Array();
    for(let i = 1; i <= n; i += 1){
      if(i === ((n+1)/2)-j || i === ((n+1)/2)+j || j === ((n+1)/2)-1){
      resp += '*';
      }
      else{
      resp += ' ';
      }                   
    }
    console.log(resp);
  }
}