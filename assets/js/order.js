var buttonEl = document.createElement("button");
var orderArray = [];
var storedOrder = localStorage.getItem('order');
const orderedItems2 = JSON.parse(localStorage.getItem('order') || '[]' )
let orderList = document.getElementById('order-list')
// var listEl = document.getElementById("order List");

// if(storedOrder){
//     orderArray = JSON.parse(storedOrder);
// } else {
//     console.log("No order Found")
// }

// console.log("Saved Order", orderArray)
// function addToOrder(newItems) {
//     console.log(order);
//     newItems.forEach(function (newItem) {// Check each item in newItems for duplicates
//         if (!orderArray.includes(newItem)) {
//             orderArray.push(newItem);
//         }
//     });
//     displayOrder();
// }

// // function displayOrder() {
// //     // listEl.innerHTML = '';
// //     orderArray.forEach(function (item) {
// //         var buttonEl = document.createElement("button");
// //         buttonEl.textContent = item; //makes a button for each item within the order array
// //         listEl.appendChild(buttonEl); //appends it to make it appear
// //     });
// // }

// listEl.addEventListener("click", function (event) {
//     console.log(event);
//     if (event.target.tagName === "BUTTON") { // Check if the clicked element is a button
//         var orderItem = event.target.textContent; // Get the text content of the clicked button
//         var itemIndex = orderArray.indexOf(orderItem); // Find the index of the item in the orderArray
//         if (itemIndex !== -1) { // If the item is found
//             orderArray.splice(itemIndex, 1); // Remove the item from the orderArray
//             localStorage.setItem("order", JSON.stringify(orderArray)); // Update localStorage
//             displayOrder(); // Update the displayed order
//         }
//     }
// });

// addToOrder(order);

function displayOrder (){
for (var i=0; i< orderedItems2.length; i++){
let li = document.createElement('li')
li.textContent = orderedItems2[i].foodItem+" $"+orderedItems2[i].itemPrice
orderList.appendChild(li)
}
}
displayOrder()