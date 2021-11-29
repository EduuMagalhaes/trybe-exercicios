let n = 5;
let resp = new Array();

if(n > 0){
  for(let i = 0; i < n; i += 1){
    resp += '*';
  }
  for(let j = 0; j < n; j += 1){
    console.log(resp);
  }
}