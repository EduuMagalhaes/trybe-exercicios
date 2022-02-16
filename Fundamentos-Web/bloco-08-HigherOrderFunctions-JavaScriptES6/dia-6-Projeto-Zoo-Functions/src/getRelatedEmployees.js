const data = require('../data/zoo_data');

function errorTrigger() {
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  return isManager(managerId)
    ? data.employees.reduce((acc, element) => {
      if (element.managers.includes(managerId)) {
        acc.push(`${element.firstName} ${element.lastName}`);
      }
      return acc;
    }, []) : errorTrigger();
}

module.exports = { isManager, getRelatedEmployees };
