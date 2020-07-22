let amountElement = document.querySelector(".js-amount");
let currencyFromElement = document.querySelector(".js-currencyFrom");
let currencyToElement = document.querySelector(".js-currencyTo");

let calculatorElement = document.querySelector(".js-calculator");
let resultElement = document.querySelector(".js-result");
let valueElement = document.querySelector(".js-value");

// currency selling rates from cinkciarz.pl, 19.07.2020, 14:00
const toEUR = 4.4912;
const toUSD = 3.9324;
const toGBP = 4.9385;
const toCHF = 4.1892;
const toRUB = 0.0563;

calculatorElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    // let currencyFrom = currencyFromElement.value;
    let currencyTo = currencyToElement.value;
       
    switch (currencyTo) {
        case "EUR": result = amount / toEUR;
            break;
        case "USD": result = amount / toUSD;
            break;
        case "GBP": result = amount / toGBP;
            break;
        case "CHF": result = amount / toCHF;
            break;
        case "RUB": result = amount / toRUB;
            break;
    };

    resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)} ${currencyTo}</strong>`;
    valueElement.value = `${result.toFixed(2)} ${currencyTo}`

});