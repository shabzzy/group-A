function calculateProfit() {
    var quantity = parseFloat(document.getElementById("cropQuantity").value);
    var price = parseFloat(document.getElementById("cropPrice").value);
    var totalCost = parseFloat(document.getElementById("totalCost").value) || 0;

    if (isNaN(quantity) || isNaN(price) || isNaN(totalCost)) {
        alert("Please enter valid numbers for quantity, price, and total cost.");
        return;
    }

    var totalRevenue = quantity * price;
    var profit = totalRevenue - totalCost;

    document.getElementById("result").innerHTML = "Profit: $" + profit.toFixed(2);
}
