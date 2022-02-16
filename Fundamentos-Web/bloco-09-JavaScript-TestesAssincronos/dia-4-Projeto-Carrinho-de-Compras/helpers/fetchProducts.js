const fetchProducts = async () => {  
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');    
  const results = await response.json();  
  return results;  
};
fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
