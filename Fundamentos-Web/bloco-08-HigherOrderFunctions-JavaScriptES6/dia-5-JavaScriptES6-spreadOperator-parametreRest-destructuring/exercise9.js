const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const months = ({spring, summer, autumn, winter}) => [...spring, ...summer, ...autumn, ...winter];

console.log(months(yearSeasons));
