const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, element) => {
    if (element.age < 18) acc.child += 1;
    if (element.age >= 18 && element.age < 50) acc.adult += 1;
    if (element.age >= 50) acc.senior += 1;
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  return !entrants || Object.values(entrants).length === 0 ? 0
    : Object.entries(countEntrants(entrants)).reduce((acc, element) => {
      let result = acc;
      result += data.prices[element[0]] * element[1];
      return result;
    }, 0);
}

module.exports = { calculateEntry, countEntrants };
