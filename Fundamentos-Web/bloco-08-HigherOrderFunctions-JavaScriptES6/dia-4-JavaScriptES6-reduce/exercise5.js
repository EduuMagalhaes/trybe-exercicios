const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((acc, element) => acc + element.split('').reduce((acc, element) => element.toLowerCase() === 'a' ? acc + 1 : acc, 0), 0);
console.log(containsA);
