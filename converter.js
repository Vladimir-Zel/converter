//const baseUrl = 'http://data.fixer.io/api/latest?access_key=ae6d8c72868d4b95742c55cd40b5da8a&format=1';
const amount = document.getElementById('amount');
const from = document.getElementById('fromCurrency');
const to = document.getElementById('toCurrency');
const bConvert = document.getElementById('convert');
const result = document.getElementById('result');
let currency;
let firstVal;
let secondVal;

bConvert.onclick = () => {
    fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(data => {
            currency = data.rates;
            for (let val in currency) {
                if (val === from.value) {
                    firstVal = currency[val];
                }
            }

            for (let val in currency) {
                if (val === to.value) {
                    secondVal = currency[val];
                }
            }

            const total = (amount.value / firstVal) * secondVal;
            const res = document.createElement('p')
            res.appendChild(document.createTextNode(`${total.toFixed(2)} ${to.value}`));

            if (result.firstElementChild) {
                result.firstElementChild.remove();
            }
            result.appendChild(res);
        })
}