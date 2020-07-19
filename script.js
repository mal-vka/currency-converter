let amountElement = document.querySelector(".js-amount");
let currencyFromElement = document.querySelector(".js-currencyFrom");
let currencyToElement = document.querySelector(".js-currencyTo");

let calculatorElement = document.querySelector(".js-calculator");
let resultElement = document.querySelector(".js-result");
let valueElement = document.querySelector(".js-value");

// let orderElement = document.querySelector(".js-order");

// let toPLNElement= document.querySelector(".js-toPLN");
// let toEURElement= document.querySelector(".js-toEUR");
// let toUSDElement= document.querySelector(".js-toUSD");
// let toGBPElement= document.querySelector(".js-toGBP");
// let toCHFElement= document.querySelector(".js-toCHF");
// let toRUBElement= document.querySelector(".js-toRUB");

// currency selling rates from cinkciarz.pl, 19.07.2020, 14:00
const toEUR = 4.4912;
const toUSD = 3.9324;
const toGBP = 4.9385;
const toCHF = 4.1892;
const toRUB = 0.0563;

// currency purchase rates from cinkciarz.pl, 19.07.2020, 14:00
// const fromEUR = 4.4611;
// const fromUSD = 3.9021;
// const fromGBP = 4.9079;
// const fromCHF = 4.1578;
// const fromRUB = 0.0527;

// currencyFromElement.addEventListener("change", () => {
//     event.preventDefault();

//     let currencyFrom = currencyFromElement.value;      

//     if (currencyFrom === "PLN") {
//         toPLNElement.disabled = true;
//     }

//     console.log(`${amountElement.value}, ${currencyFromElement.value}, ${currencyToElement.value}`);       
// });

calculatorElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
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
    valueElement.value = result.toFixed(2) + " " + currencyTo

});

// orderElement.addEventListener("submit", (event) => {
//     event.preventDefault();


// });