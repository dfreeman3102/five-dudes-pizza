var addToOrder = document.querySelector(".addOrder");

function getPizza() { 

var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=d0c44e23&app_key=c02589e218b92f37f70c91171fde6952&nutrition-type=cooking&ingr=pizza'
fetch(requestUrl)
.then(function(response){
   
return response.json();
})
.then(function(data){
    console.log( data);
    
    });

}


function getFood() {
var requestUrl2 = 'https://foodish-api.com/api/images/pizza/';

fetch(requestUrl2)
.then(function(reponse){
return response.json();

})
.then(function(data2){
console.log( data2);

})
}



getPizza();