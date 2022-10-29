{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.8330;
        const rateUSD = 4.9569;
        const rateCHF = 4.9526;
        const rateGBP = 5.5886;
        const rateCZK = 0.1965;
        const rateHRK = 0.6415;
        const rateJPY = 3.3561;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "CHF":
                return amount / rateCHF;
            case "GBP":
                return amount / rateGBP;
            case "CZK":
                return amount / rateCZK;
            case "HRK":
                return amount / rateHRK;
            case "JPY":
                return amount / rateJPY;
        }
    };

    const updateResultText = (text) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = text;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(`${result.toFixed(2)} ${currency}`);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}