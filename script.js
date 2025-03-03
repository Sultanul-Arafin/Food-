let ingredients = []; // Store ingredients as objects
let totalCost = 0; // Variable to hold total cost

function addIngredient() {
    let ingredient = document.getElementById("ingredient").value;
    let quantity = parseFloat(document.getElementById("quantity").value);
    let price = parseFloat(document.getElementById("price").value);

    if (ingredient && quantity && price) {
        // Add the new ingredient and its calculated cost
        let cost = quantity * price;
        ingredients.push({ingredient, quantity, price, cost});

        // Update the total cost dynamically
        totalCost += cost;

        // Display the updated total cost
        document.getElementById("total-cost").innerText = totalCost.toFixed(2);

        // Clear the input fields for next ingredient
        document.getElementById("ingredient").value = '';
        document.getElementById("quantity").value = '';
        document.getElementById("price").value = '';
    } else {
        alert("Please fill in all fields correctly!");
    }
}

function calculateCost() {
    if (ingredients.length > 0) {
        // Recalculate total cost just in case
        totalCost = ingredients.reduce((acc, ingredient) => acc + ingredient.cost, 0);
        alert("Total Food Cost: $" + totalCost.toFixed(2));
    } else {
        alert("Please add some ingredients first!");
    }
}

function scrollToCalculator() {
    document.getElementById("calculator").scrollIntoView({behavior: "smooth"});
}
