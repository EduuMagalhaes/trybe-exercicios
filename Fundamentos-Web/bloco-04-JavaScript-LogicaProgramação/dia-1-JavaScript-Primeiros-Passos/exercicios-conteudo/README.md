# DIA 1 JavaScript


### JavaScript - Primeiros passos


### JavaScript - Variáveis

scripts.js

1 - Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).

2 - Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.

3 - Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.

4 - Utilize o console.log() para imprimir as constantes e variáveis que você criou.

5 - Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!

6 - Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?



### JavaScript - Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

scripts.js
```javascript
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
```
O que aconteceria se tentássemos checar qual o tipo da variável patientAge ? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined , como você pôde observar no retorno do console.log(typeof patientAge) . Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.
Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível nesse link se tiver dúvidas. Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

1 - Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8. 

2 - Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as  variáveis e checar os resultados das operações! 

3 - Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.



### JavaScript - Condições If e Else

scripts.js

1 - Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

2 - Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

* Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
* Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
* Se a nota for menor que 60, imprima "Você foi reprovada(o)"

3 - Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

4 - Altere o valor da nota para verificar se as condições que você implementou funcionam;



### JavaScript - Operadores lógicos

scripts.js

#### Operador AND - &&

1 - Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

2 - Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

3 - Implemente condicionais para que:

* Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
* Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
* Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
* Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
* Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

4 - Agora imprima a variável message fora das suas condições.

#### Operador OR - ||

1 - Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

2 - Implemente condicionais para que: 

* Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
* Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".


### JavaScript - Switch e Case

scripts.js

1 - Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;

2 - Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
