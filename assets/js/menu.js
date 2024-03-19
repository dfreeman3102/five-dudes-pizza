var addToOrder = document.querySelector(".addOrder");
 var containerAPI = document.querySelector("#pepperoni-desc");
var totalcal = 0;
var totalCalcium = 0;
 var ingred = ["Pepperoni","mozzarella" ," marinara sauce"];

function getPizza() { 

for ( var i = 0; i < ingred.length; i++){

var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=d0c44e23&app_key=c02589e218b92f37f70c91171fde6952&nutrition-type=logging&ingr='+ ingred[i]
fetch(requestUrl)
.then(function(response){
   
return response.json();
})
.then(function(data){
    console.log( data);
   var calories = data.calories;
  var  calcium = data.totalNutrients.CA.quantity;

     totalcal = totalcal + calories
     totalCalcium = totalCalcium + calcium;


     console.log("calories " + calories);
     console.log("total cal: "  + totalcal);
     containerAPI.textContent = " Total cal: " + totalcal + " Total calcium: " + totalCalcium +"mg";
    
})
}

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

