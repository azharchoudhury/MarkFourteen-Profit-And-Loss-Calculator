const initialPrice = document.querySelector("#initial-price");

const qtyOfStocks = document.querySelector("#quantity");

const currentPrice = document.querySelector("#current-price");

const checkBtn = document.querySelector("#check-btn");

const outputDiv = document.querySelector("#output-div");


checkBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(qtyOfStocks.value);
    var curr = Number(currentPrice.value);

    // if(initialPrice.value === "" || qtyOfStocks.value === "" || currentPrice.value === ""){
    //     showOutput("Please enter all the fields");
    // }

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, qty, current) {
    if (initial === 0 || qty === 0 || current === 0) {
        showOutput("Please enter all the fields");
    } else if (initial > current) {
        var loss = ((initial - current) * qty).toFixed(2);
        var lossPercentage = ((loss / initial) * 100).toFixed(2);
        showOutput(`Your loss is ${loss} and the loss percentage is ${lossPercentage}%`);
        document.body.style.backgroundColor= "pink";
    } else if (current > initial) {
        var profit = ((current - initial) * qty).toFixed(2);
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        showOutput(`Your profit is ${profit} and the profit percentage is ${profitPercentage}%`);
        document.body.style.backgroundColor= "green";
    } else {
        showOutput("No Pain No Gain and, No Gain, So No Pain");
        document.body.style.backgroundColor = "yellow";
    }
}

function showOutput(message) {
    outputDiv.innerText = message;
}