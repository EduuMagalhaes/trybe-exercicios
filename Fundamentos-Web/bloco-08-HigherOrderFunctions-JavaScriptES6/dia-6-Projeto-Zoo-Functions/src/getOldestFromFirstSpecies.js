const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = (data.species.find((specie) => specie.id === (data.employees
    .find((employee) => employee.id === id).responsibleFor[0])).residents)
    .reduce((acc, element) => {
      let result = acc;
      if (result.age < element.age) result = element;
      return result;
    });
  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
