const data = require('../data/zoo_data');

const noParameters = () => data.species.reduce((acc, element) => {
  acc[element.name] = element.residents.length;
  return acc;
}, {});
const withParameters = (animal) => (!animal.sex ? data.species
  .find((element) => (element.name === animal.specie)).residents.length
  : (data.species.find((element) => element.name === animal.specie)).residents
    .reduce((acc, element) => (element.sex === animal.sex ? acc + 1 : acc), 0));

function countAnimals(animal) {
  return !animal ? noParameters() : withParameters(animal);
}

module.exports = countAnimals;
