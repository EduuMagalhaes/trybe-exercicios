const data = require('../data/zoo_data');

const mondayObj = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
function noParam() {
  return Object.keys(data.hours).reduce((acc, hour) => {
    if (hour === 'Monday') {
      acc[hour] = mondayObj.Monday;
      return acc;
    }
    acc[hour] = {
      officeHour: `Open from ${data.hours[hour].open}am until ${data.hours[hour].close}pm`,
      exhibition: data.species.reduce((arr, specie) => {
        if (specie.availability.includes(hour)) arr.push(specie.name);
        return arr;
      }, []),
    };
    return acc;
  }, {});
}

function dayParam(day) {
  if (day === 'Monday') return mondayObj;
  return {
    [day]: {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species.reduce((arr, specie) => {
        if (specie.availability.includes(day)) arr.push(specie.name);
        return arr;
      }, []),
    },
  };
}

function withParam(param) {
  return Object.keys(data.hours).includes(param)
    ? dayParam(param) : data.species.find((specie) => specie.name === param).availability;
}

function getSchedule(scheduleTarget) {
  return (Object.keys(data.hours).includes(scheduleTarget)
    || data.species.reduce((acc, element) => {
      acc.push(element.name);
      return acc;
    }, []).includes(scheduleTarget))
    ? withParam(scheduleTarget) : noParam();
}

module.exports = getSchedule;
