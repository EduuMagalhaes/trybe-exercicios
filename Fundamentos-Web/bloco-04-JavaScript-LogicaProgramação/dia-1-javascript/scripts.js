/* Primeira parte */

const myName = "Eduardo";
const birthCity = "Uberlandia";
let birthYear = 1992;
console.log(myName, birthCity, birthYear); 

birthYear = 2030;
console.log(birthYear);

/* birthCity = "São Paulo";
console.log(birthCity); */

/* Segunda parte */

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

patientId = "50";
console.log(typeof patientId);


const base = 5;
let height = 8;
const area = base * height;
console.log("Base:",base," Height:",height," Area:",area);
const perimeter = base*2 + height*2;
console.log("Perimeter:",perimeter);

/* Terceira parte */

const nota = 15;
if(nota >= 80){
  console.log("Parabéns, você foi aprovada(o)!");
}
else if(nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera");
}
else{
  console.log("Você foi reprovada(o)");
}

 