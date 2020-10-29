let currencyUsdBuy = 28.1;
let currencyUsdSale = 28.5;
let currencyEuroBuy = 33.15;
let currencyEuroSale = 33.67;
let currencyPlnBuy = 7.03;
let currencyPlnSale = 7.4;

const USD_BUY = document.getElementById('usdbuy');
const USD_SALE = document.getElementById('usdsale');
const EURO_BUY = document.getElementById('eurobuy');
const EURO_SALE = document.getElementById('eurosale');
const PLN_BUY = document.getElementById('plnbuy');
const PLN_SALE = document.getElementById('plnsale');

USD_BUY.innerText = currencyUsdBuy;
USD_SALE.innerText = currencyUsdSale;
EURO_BUY.innerText = currencyEuroBuy;
EURO_SALE.innerText = currencyEuroSale;
PLN_BUY.innerText = currencyPlnBuy;
PLN_SALE.innerText = currencyPlnSale;

buy.onclick = () => {
	const n = document.getElementById('user-select').options.selectedIndex;
	const sel = document.getElementById('user-select').options[n].text;
	const val = document.getElementById('user-input').value;
	showResultsBuy(sel, val);
}

showResultsBuy = (sel, val) => {
	let result;
	switch (sel) {
		case "USD":
			result = val * currencyUsdBuy;
			break;
		case "EURO":
			result = val * currencyEuroBuy;
			break;
		case "PLN":
			result = val * currencyPlnBuy
			break;
	}
	document.getElementById('result').innerHTML = `До сплати: ${result.toFixed(2)} грн.`;
}

sele.onclick = () => {
	const n = document.getElementById('user-select').options.selectedIndex;
	const sel = document.getElementById('user-select').options[n].text;
	const val = document.getElementById('user-input').value;
	showResultsSale(sel, val);
}

showResultsSale = (sel, val) => {
	let result;
	switch (sel) {
		case "USD":
			result = val * currencyUsdSale;
			break;
		case "EURO":
			result = val * currencyEuroSale;
			break;
		case "PLN":
			result = val * currencyPlnSale
			break;
	}
	document.getElementById('result').innerHTML = `Отримаєте: ${result.toFixed(2)} грн.`;
}