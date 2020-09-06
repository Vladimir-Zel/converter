const baseUrl = 'http://data.fixer.io/api/latest?access_key=ae6d8c72868d4b95742c55cd40b5da8a&format=1';

fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(data => {
        const currency = data.rates;

        for (let rate of Object.keys(currency)) {
            const firstSlot = document.getElementById('fromCurrency');
            const option = document.createElement('option');
            option.setAttribute('value', rate);
            option.appendChild(document.createTextNode(rate));
            firstSlot.appendChild(option);
        }

        for (let rate of Object.keys(currency)) {
            const secondSlot = document.getElementById('toCurrency');
            const option = document.createElement('option');
            option.setAttribute('value', rate);
            option.appendChild(document.createTextNode(rate));
            secondSlot.appendChild(option);
        }
    })
    .catch(e => console.log(e));