var addToOrder = document.querySelector(".addOrder");

function getPizza() { 
var requestUrl = 'https://foodish-api.com/api/images/pizza/';

fetch(requestUrl)
.then(function(reponse){
return response.json();

})
.then(function(data){
console.log( data);

})


}

getPizza();