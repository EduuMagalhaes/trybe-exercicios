function calcRomano(romano){
  const numRomano = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }  
  romano = romano.toUpperCase();
  let result = numRomano[romano[romano.length - 1]];
  for(let i = 2; i <= romano.length; i += 1){
    if(numRomano[romano[romano.length - i]] >= numRomano[romano[romano.length - (i -1)]])
      result += numRomano[romano[romano.length - i]]
    else
      result -= numRomano[romano[romano.length - i]]
  }
  return result;
}
console.log(calcRomano('MMXVIII'));