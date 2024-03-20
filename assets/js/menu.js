var addToOrder = document.querySelector(".addOrder");
 var containerAPI = document.querySelector("#pepperoni-nutrition");
 var pep = document.querySelector("#pepperoni1");
var totalcal = 0;
var totalFat = 0;
var totalProtein = 0;
var ingred =  ["Pepperoni","mozzarella" ," marinara sauce"];
var ingred2 =  ["basil","mozzarella" ," marinara sauce", "olive oil"];
var ingred3 =  ["Marinara sauce", "sliced garlic", "olive oil"];


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
    var  Fat = data.totalNutrients.FAT.quantity;
    var Protein = data.totalNutrients.PROCNT.quantity;

     totalcal = totalcal + calories;
     totalFat = totalFat + Fat;
    totalProtein = totalProtein + Protein

     console.log("calories " + calories);
     console.log("total cal: "  + totalcal);
     containerAPI.textContent = " Total cal: " + totalcal + " Total Fat: " + totalFat +"g " +" Total Protien: " + totalProtein;
    
})
}

for ( var i = 0; i < ingred2.length; i++){

    var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=d0c44e23&app_key=c02589e218b92f37f70c91171fde6952&nutrition-type=logging&ingr='+ ingred[i]
    fetch(requestUrl)
    .then(function(response){
       
    return response.json();
    })
    .then(function(data){
        console.log( data);
         var calories = data.calories;
        var  Fat = data.totalNutrients.FAT.quantity;
        var Protein = data.totalNutrients.PROCNT.quantity;
    
         totalcal = totalcal + calories;
         totalFat = totalFat + Fat;
        totalProtein = totalProtein + Protein
    
         console.log("calories " + calories);
         console.log("total cal: "  + totalcal);
         containerAPI.textContent = " Total cal: " + totalcal + " Total Fat: " + totalFat +"g " +" Total Protien: " + totalProtein;
        
    })
    }







}

getPizza();



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





