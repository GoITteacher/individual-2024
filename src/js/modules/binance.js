const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};
let userSymbol;

//!===============================================================
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const pair = e.target.elements.query.value;
  getPrice(pair)
    .then(data => {
      const markup = priceTemplate(data);
      refs.infoEl.innerHTML = markup;
    })
    .catch(err => {});
});

//!===============================================================

function getPrice(userSymbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const params = new URLSearchParams({
    symbol: userSymbol,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'binance43.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}

//!===============================================================

function priceTemplate({ symbol, price }) {
  const img = symbol.replace('USDT', '').toLowerCase();

  return `<img
  class="coin-logo"
  src="https://assets.coincap.io/assets/icons/${img}@2x.png"
/>
<p class="coin-title">${symbol}</p>
<p class="coin-price">${(+price).toFixed(2)}</p>`;
}
