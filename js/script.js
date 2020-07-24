{
    const calculateResult = (amount, currencyTo) => {
        // currency selling rates from cinkciarz.pl, 19.07.2020, 14:00
        const toEUR = 4.4912;
        const toUSD = 3.9324;
        const toGBP = 4.9385;
        const toCHF = 4.1892;
        const toRUB = 0.0563;
        switch (currencyTo) {
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
        }
    };

    const updateResultText = (amount, result, currencyTo) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)} ${currencyTo}</strong>`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyToElement = document.querySelector(".js-currencyTo");
                
        const amount = +amountElement.value;
        const currencyTo = currencyToElement.value;

        const result = calculateResult(amount, currencyTo);

        updateResultText(amount, result, currencyTo);
    };

    const init = () => {
        const calculatorElement = document.querySelector(".js-calculator");
        calculatorElement.addEventListener("submit", onFormSubmit);
    };

    init();
}