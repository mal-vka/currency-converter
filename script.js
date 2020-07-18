let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;

    let result = amount * 4.5;

    resultElement.innerText = result.toFixed(2);    
});