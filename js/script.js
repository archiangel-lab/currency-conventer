{
    const calculateResult = (ammount, currency) => {
        const rateEUR = 4.8330;
        const rateUSD = 4.9569;
        const rateCHF = 4.9526;
        const rateGBP = 5.5886;
        const rateCZK = 0.1965;
        const rateHRK = 0.6415;
        const rateJPY = 3.3561;

        switch (currency) {
            case "EUR":
                return ammount / rateEUR;


            case "USD":
                return ammount / rateUSD;


            case "CHF":
                return ammount / rateCHF;


            case "GBP":
                return ammount / rateGBP;


            case "CZK":
                return ammount / rateCZK;


            case "HRK":
                return ammount / rateHRK;


            case "JPY":
                return ammount / rateJPY;
        }
    };

    const updateResultText = (ammount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${ammount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const ammountElement = document.querySelector(".js-ammount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const ammount = +ammountElement.value;

        let result = calculateResult(ammount, currency);

        updateResultText(ammount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}