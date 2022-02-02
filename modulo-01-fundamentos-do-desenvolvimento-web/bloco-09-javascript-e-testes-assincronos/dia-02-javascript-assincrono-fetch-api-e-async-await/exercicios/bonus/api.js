const API_URL = 'https://api.coincap.io/v2/assets';

const fetchUsdToBrl = async (usdPrice) => {
  let brlPrice;
  await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.min.json')
    .then(response => response.json())
    .then(({ brl }) => { brlPrice = usdPrice * brl });
  return brlPrice;
}

const showError = (error) => {
  const pricesList = document.getElementById('prices-list');
  pricesList.textContent = error;
}

const showPrices = (prices) => {
  const pricesList = document.getElementById('prices-list');
  const rowHead = document.createElement('tr');
  rowHead.innerHTML = `<th>Criptomoeda</th><th>Preço</th>`;
  pricesList.appendChild(rowHead);
  prices
    .filter((price, index) => (index < 10))
    .forEach(({ id, symbol, priceUsd }, index) => {

      const row = document.createElement('tr');
      pricesList.appendChild(row);

      fetchUsdToBrl(priceUsd)
        .then((convertedPrice) => {
          const price = `R$: ${Number(convertedPrice).toFixed(2).replace('.', ',')}`;
          row.innerHTML = `<td>${id} (${symbol})</td><td>${price}</td>`;
        })
        .catch(() => {
          const price = `$: ${Number(priceUsd).toFixed(2).replace('.', ',')}`;
          row.innerHTML = `<td>${id} (${symbol})</td><td>${price}</td>`;
        });

    });
}

const fetchPrices = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ data }) => showPrices(data))
    .catch((error) => showError('Não foi possível obter a cotação. Recarregue a página para tentar de novo.'));
};

window.onload = fetchPrices;
