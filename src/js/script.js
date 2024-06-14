import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

// ====================================

// function fetchUser(id) {
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const END_POINT = '/users';

//   const params = new URLSearchParams({
//     id: id,
//     test: 'Hello',
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   return fetch(url).then(res => res.json());
// }

// fetchUser(1);

//!===============================================================

// function getPrice(userSymbol) {
//   const BASE_URL = 'https://binance43.p.rapidapi.com';
//   const END_POINT = '/ticker/price';
//   const params = new URLSearchParams({
//     symbol: userSymbol,
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const headers = {
//     'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
//     'x-rapidapi-host': 'binance43.p.rapidapi.com',
//   };

//   return fetch(url, { headers }).then(res => res.json());
// }

// getPrice('BTCUSDT').then(data => {
//   console.log(data);
// });
