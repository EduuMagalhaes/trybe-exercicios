const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 01
const changeShift = (objeto, chave, valor) => objeto[chave] = valor;
changeShift(lesson2, 'turno', 'noite');

// 02
const listKeys = objeto => Object.keys(objeto);

// 03
const objectSize = objeto => Object.keys(objeto).length;

// 04
const listValues = objeto => Object.values(objeto);

// 05
const allLessons = Object.assign({}, {lesson2, lesson1, lesson3});

// 06
const totalStudents = objeto => {
  let result = 0;
  for (const index in objeto) {
    result += objeto[index].numeroEstudantes;
  }
  return result;
}

// 07
const getValueByNumber = (objeto, index) => Object.values(objeto)[index];

// 08
const verifyPair = (objeto, chave, valor) => {
  const keys = Object.keys(objeto);  
  for (const key of keys) {    
    if (key === chave && objeto[key] === valor) {
      return true;
    }
  } 
  return false;
}

console.log(listKeys(lesson2));
console.log(objectSize(lesson2));
console.log(listValues(lesson2));
console.log(allLessons);
console.log(totalStudents(allLessons));
console.log(getValueByNumber(lesson1, 0));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
console.log(verifyPair(lesson3, 'turno', 'noite'));
