const uah = 1;
const uahsell = 1.01;
const usd = 27.8;
const euro = 33.6;
const zloty = 7;

let usdBuy = document.getElementById('usd-buy');
let usdSell = document.getElementById('usd-sell');

let euroBuy = document.getElementById('euro-buy');
let euroSell = document.getElementById('euro-sell');

let zlotyBuy = document.getElementById('zloty-buy');
let zlotySell = document.getElementById('zloty-sell');

usdBuy.innerText = (uah * usd)
euroBuy.innerText = (uah * euro)
zlotyBuy.innerText = (uah * zloty)

usdSell.innerText = (uahsell * usd)
euroSell.innerText = (uahsell * euro)
zlotySell.innerText = (uahsell * zloty)