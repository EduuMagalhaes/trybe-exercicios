const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids === [] ? ids : ids.reduce((acc, element) => {
    data.species.forEach((specie) => {
      if (specie.id === element) {
        acc.push(specie);
      }
    });
    return acc;
  }, []);
}

module.exports = getSpeciesByIds;
