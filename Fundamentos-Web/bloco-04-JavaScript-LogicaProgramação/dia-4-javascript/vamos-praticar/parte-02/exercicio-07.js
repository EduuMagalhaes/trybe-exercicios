function checkStringEnd (string, stringEnd){
  let result = true;
  for(let i = 1 ; i < stringEnd.length + 1; i += 1){
    if(stringEnd[stringEnd.length - i] != string[string.length - i]){
      result = false;
      break;
    }   
  }
  return result;  
}
console.log(checkStringEnd('trybe', 'be'));