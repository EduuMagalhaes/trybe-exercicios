const data = require('../data/zoo_data');

function getObject(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor
      .map((element) => data.species.find((specie) => specie.id === element).name),
    locations: employee.responsibleFor
      .map((element) => data.species.find((specie) => specie.id === element).location),
  };
}

function noParameters() {
  return data.employees.reduce((acc, employee) => {
    acc.push(getObject(employee));
    return acc;
  }, []);
}

function nameParameters(parameter) {
  const employeeNameList = [];
  employeeNameList.push(...(data.employees
    .map((element) => element.firstName)), ...(data.employees.map((element) => element.lastName)));
  if (!employeeNameList.includes(parameter.name)) throw new Error('Informações inválidas');
  const employee = data.employees
    .find((element) => element.firstName === parameter.name || element.lastName === parameter.name);
  return getObject(employee);
}

function idParameters(parameter) {
  const employeeIdList = data.employees.map((element) => element.id);
  if (!employeeIdList.includes(parameter.id)) throw new Error('Informações inválidas');
  const employee = data.employees.find((element) => element.id === parameter.id);
  return getObject(employee);
}

function getEmployeesCoverage(parameter) {
  if (!parameter) return noParameters();
  if (!parameter.name) return idParameters(parameter);
  return nameParameters(parameter);
}

module.exports = getEmployeesCoverage;
