const checknumber = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Insira apenas numeros para realizar a soma!');
  }
  if (!num1 || !num2) {
    throw new Error('Dois numeros são necessário para realizar a soma!');
  }
} 

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value; 
  const result = parseInt(value1) + parseInt(value2); 
  try {
    checknumber(value1, value2); 
    document.getElementById('result').innerHTML = `Resultado: ${result}`;   
  }
  catch (e){    
    document.getElementById('result').innerHTML = `Erro: ${e.message}`;
  }
  finally {    
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}