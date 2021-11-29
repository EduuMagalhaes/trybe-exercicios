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

/* Quarta parte */

const currentHour = 5;
let message;

if(currentHour>=22){
  message = "Não deveríamos comer nada, é hora de dormir";
}
if(currentHour>=18 && currentHour<22){
  message = "Rango da noite, vamos jantar :D";
}
if(currentHour>=14 && currentHour<18){
  message = "Vamos fazer um bolo pro café da tarde?";
}
if(currentHour>=11 && currentHour<14){
  message = "Hora do almoço!!!";
}
if(currentHour>=4 && currentHour<11){
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message);



let weekDay = "quarta-feira"

if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else if(weekDay === "sabado" || weekDay === "domingo"){
  console.log("FINALMENTE, descanso merecido UwU");
}



















 