let formElement = document.querySelector(".js-form");
let ammountElement = document.querySelector(".js-ammount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.8330;
let rateUSD = 4.9569;
let rateCHF = 4.9526;
let rateGBP = 5.5886;
let rateCZK = 0.1965;
let rateHRK = 0.6415;
let rateJPY = 3.3561;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let ammount = +ammountElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = ammount / rateEUR;
            break;

        case "USD":
            result = ammount / rateUSD;
            break;

        case "CHF":
            result = ammount / rateCHF;
            break;

        case "GBP":
            result = ammount / rateGBP;
            break;

        case "CZK":
            result = ammount / rateCZK;
            break;

        case "HRK":
            result = ammount / rateHRK;
            break;

        case "JPY":
            result = ammount / rateJPY;
            break;
    }

    resultElement.innerText = `PLN = ${result.toFixed(2)} ${currency}`;

});