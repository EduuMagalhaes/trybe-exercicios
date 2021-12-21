let n = 5;

if(n > 0){
  for(let j = 0; j < n; j += 1){
    let resp = new Array();
    for(let i = 1; i <= n; i += 1){
      if(i < n-j){
      resp += ' ';
      }
      else{
      resp += '*';
      }                   
    }
    console.log(resp);
  }
}