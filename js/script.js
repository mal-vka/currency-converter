{
    const resultElement = document.querySelector(".js-result");

    const exchangeToPLN = (currencyTo, amount) => {
        // currency selling rates from cinkciarz.pl, 19.07.2020, 14:00
        const toPLN = 1;
        const toEUR = 4.4912;
        const toUSD = 3.9324;
        const toGBP = 4.9385;
        const toCHF = 4.1892;
        const toRUB = 0.0563;

        switch (currencyTo) {
            case "PLN":
                return amount / toPLN;
            case "EUR":
                return amount / toEUR;
            case "USD":
                return amount / toUSD;
            case "GBP":
                return amount / toGBP;
            case "CHF":
                return amount / toCHF;
            case "RUB":
                return amount / toRUB;
        };
    };

    const exchangeFromPLN = (currencyFrom, amount) => {
        // currency purchase rates from cinkciarz.pl, 19.07.2020, 14:00
        const fromPLN = 1;
        const fromEUR = 4.4611;
        const fromUSD = 3.9021;
        const fromGBP = 4.9079;
        const fromCHF = 4.1578;
        const fromRUB = 0.0527;

        switch (currencyFrom) {
            case "PLN":
                return amount * fromPLN;
            case "EUR":
                return amount * fromEUR;
            case "USD":
                return amount * fromUSD;
            case "GBP":
                return amount * fromGBP;
            case "CHF":
                return amount * fromCHF;
            case "RUB":
                return amount * fromRUB;
        };
    };

    const calculateResult = (amount, currencyFrom, currencyTo) => {
        if (currencyFrom === currencyTo) {
            return amount;
        } else if (currencyFrom === "PLN") {
            return exchangeToPLN(currencyTo, amount);
        } else if (currencyTo === "PLN") {
            return exchangeFromPLN(currencyFrom, amount);
        } else {
            return exchangeFromPLN(currencyFrom, exchangeToPLN(currencyTo, amount));
        };
    };

    const displayResult = (amount, currencyFrom, result, currencyTo) => {
        resultElement.innerHTML = `${amount.toFixed(2)} ${currencyFrom} = <strong>${result.toFixed(2)} ${currencyTo}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyFromElement = document.querySelector(".js-currencyFrom");
        const currencyToElement = document.querySelector(".js-currencyTo");

        const amount = +amountElement.value;
        const currencyFrom = currencyFromElement.value;
        const currencyTo = currencyToElement.value;

        const result = calculateResult(amount, currencyFrom, currencyTo);

        displayResult(amount, currencyFrom, result, currencyTo);
    };

    const onResetButton = () => {
        resultElement.innerHTML = "";
    };

    const init = () => {
        const calculatorElement = document.querySelector(".js-calculator");
        calculatorElement.addEventListener("submit", onFormSubmit);

        const resetButton = document.querySelector(".js-resetButton");
        resetButton.addEventListener("click", onResetButton);
    };

    init();
}