const data = require('../data/zoo_data');

function noParameters() {
  return data.species.reduce((acc, element) => {
    acc[element.location].push(element.name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function includeNamesTrue(options) {
  return data.species.reduce((acc, element) => {
    const obj = {};
    obj[element.name] = element.residents.reduce((arr, resident) => {
      if (!options.sex) arr.push(resident.name);
      else if (resident.sex === options.sex) (arr.push(resident.name));
      return options.sorted !== true ? arr : arr.sort();
    }, []);
    acc[element.location].push(obj);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalMap(options) {
  return !options || options.includeNames !== true ? noParameters() : includeNamesTrue(options);
}

module.exports = getAnimalMap;
