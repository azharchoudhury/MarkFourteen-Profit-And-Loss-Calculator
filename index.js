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
        outputDiv.style.color = "red";
        showOutput("Please enter all the fields");
    } else if (initial > current) {
        var loss = ((initial - current) * qty);
        var lossPercentage = (( (initial - loss)/ initial) * 100);
        showOutput(`You have incurred a loss of ₹${loss} and the loss percentage is ${lossPercentage.toFixed(2)}%`);
        outputDiv.style.backgroundColor= "#b91c1c";
        outputDiv.style.color= "white";
    } else if (current > initial) {
        var profit = ((current - initial) * qty);
        var profitPercentage = (( (current - initial) / initial) * 100);
        showOutput(`Your have earned a profit of ₹${profit} and the profit percentage is ${profitPercentage.toFixed(2)}%`);
        outputDiv.style.backgroundColor= "#65a30d";
        outputDiv.style.color= "white";
    } else {
        showOutput("No Pain No Gain and, No Gain, So No Pain");
        outputDiv.style.backgroundColor = "#fcd34d";
        outputDiv.style.color = "black";
    }
}

function showOutput(message) {
    outputDiv.innerText = message;
}
