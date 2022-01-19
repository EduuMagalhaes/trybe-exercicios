const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};
const register = (name) => ({nomeCompleto: name, email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`});

console.log(newEmployees(register));