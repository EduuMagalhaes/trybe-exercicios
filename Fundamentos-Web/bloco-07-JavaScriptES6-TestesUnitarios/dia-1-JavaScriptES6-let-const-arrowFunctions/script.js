/* parte 01 */
/* Exercicio 01 */
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }  
}
testingScope(true);

/* Exercicio 02 */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = array => array.sort((a, b) => a - b);
console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} e encontram ordenados de forma crescente!`); 


/* parte 02 */
/* Exercicio 01 */
const fatorial = num => num > 1 ? num * fatorial(num - 1) : 1;
console.log(fatorial(4));

/* Exercicio 02 */
const longestWord = string => string.split(' ').reduce((a, b) => a.length > b.length ? a : b);
console.log(longestWord(`Antônio foi no banheiro e não sabemos o que aconteceu`));

/* Exercicio 03 */
let contador = 0;
document.querySelector('#click-button').addEventListener('click', () => document.querySelector('#click-number').innerHTML = contador += 1);

/* Exercicio 04 */
const string = 'Tryber x aqui!';
const searchLetter = word => string.replace('x', word);
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python'];
skills.sort();
let stringSkills = '';
skills.forEach((a, index) => stringSkills = `${stringSkills}
${a}`);
const addSkills = (a) => `${a}
Minhas cinco principais habilidades são:${stringSkills}
#goTrybe`;
console.log(addSkills(searchLetter('Eduardo')));
