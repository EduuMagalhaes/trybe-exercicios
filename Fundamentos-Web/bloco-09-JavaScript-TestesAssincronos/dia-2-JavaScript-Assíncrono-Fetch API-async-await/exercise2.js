const fetchCoin = async () => { 
  const url = 'https://api.coincap.io/v2/assets'; 
  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());    
  const ul = document.getElementById('Crypto-list');
  coins.reduce((acc, coin, index) => { 
    if (index < 10) acc.push(coin)
    return acc;
   },[])
    .forEach((element) => {
      const li = document.createElement('li');
      let price = element.priceUsd;
      li.innerText = `${element.name} (${element.symbol}): ${Number(price).toFixed(2)}`
      ul.appendChild(li);
    });   
};

fetchCoin();
