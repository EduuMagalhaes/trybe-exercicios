let n = 4;

if(n > 0){
  for(let j = 0; j <= (n+1)/2; j += 1){
    let resp = new Array();
    for(let i = 0; i <= n; i += 1){
      if(i > ((n+1)/2)-j && i < ((n+1)/2)+j){
      resp += '*';
      }
      else{
      resp += ' ';
      }                   
    }
    console.log(resp);
  }
}