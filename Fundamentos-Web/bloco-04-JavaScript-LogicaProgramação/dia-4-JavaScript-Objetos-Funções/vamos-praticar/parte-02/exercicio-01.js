function verificaPalindrome(palavra){   
  if(palavra === palavra.split('').reverse().join(''))
    return true;
  else
    return false;
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));