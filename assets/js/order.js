var listEl = document.getElementById("orderList");
var buttonEl = document.createElement("button");
var orderArray = JSON.parse(localStorage.getItem("order")) || [];
var order = ["Pepperoni", "Cheese", "Supreme", "Meat Lover"];

function addToOrder(newItems) {
    console.log(order);
    newItems.forEach(function (newItem) {// Check each item in newItems for duplicates
        if (!orderArray.includes(newItem)) {
            orderArray.push(newItem);
        }
    });
    localStorage.setItem("order", JSON.stringify(orderArray));
    displayOrder();
}

function displayOrder() {
    listEl.innerHTML = '';
    orderArray.forEach(function (item) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = item; //makes a button for each item within the order array
        listEl.appendChild(buttonEl); //appends it to make it appear
    });
}

listEl.addEventListener("click", function (event) {
    console.log(event);
    if (event.target.tagName === "BUTTON") { // Check if the clicked element is a button
        var orderItem = event.target.textContent; // Get the text content of the clicked button
        var itemIndex = orderArray.indexOf(orderItem); // Find the index of the item in the orderArray
        if (itemIndex !== -1) { // If the item is found
            orderArray.splice(itemIndex, 1); // Remove the item from the orderArray
            localStorage.setItem("order", JSON.stringify(orderArray)); // Update localStorage
            displayOrder(); // Update the displayed order
        }
    }
});

addToOrder(order);

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
});