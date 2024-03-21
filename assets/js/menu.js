var addToOrder = document.querySelector(".addOrder");
 var containerAPI = document.querySelector("#pepperoni-nutrition");
 var containerAPI2 = document.querySelector("#margherita-nutrition");
 var containerAPI3 = document.querySelector("#marinara-nutrition");
 var pep = document.querySelector("#pepperoni1");
var totalcal = 0;
var totalFat = 0;
var totalProtein = 0;
var ingred =  ["Pepperoni","mozzarella" ," marinara sauce"];
var ingred2 =  ["basil","mozzarella" ," marinara sauce", "olive oil"];
var ingred3 =  ["Marinara sauce", "sliced garlic", "olive oil"];


function getPizza() { 

for ( var i = 0; i < ingred.length; i++){

var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=0c38d0e3&app_key=8241c4d9f09fe6602cc3d627c6bfca33&nutrition-type=logging&ingr='+ ingred[i]
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
     containerAPI.textContent = " Total cal: " + totalcal + " Total Fat: " + totalFat +"g " +" Total Protien: " + totalProtein + "g";
    
})
}

for ( var i = 0; i < ingred2.length; i++){

    var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=0c38d0e3&app_key=8241c4d9f09fe6602cc3d627c6bfca33&nutrition-type=logging&ingr='+ ingred2[i]
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
         containerAPI2.textContent = " Total cal: " + totalcal + " Total Fat: " + totalFat +"g " +" Total Protien: " + totalProtein + "g";
        
    })
    }
    for ( var i = 0; i < ingred3.length; i++){

        var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=0c38d0e3&app_key=8241c4d9f09fe6602cc3d627c6bfca33&nutrition-type=logging&ingr='+ ingred3[i]
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
             containerAPI3.textContent = " Total cal: " + totalcal + " Total Fat: " + totalFat +"g " +" Total Protien: " + totalProtein + "g";
            
        })
        }

 




}

getPizza();



function getFood() {
var requestUrl2 = 'https://foodish-api.com/api/images/pizza/';

fetch(requestUrl2)
.then(function(response){
return response.json();

})
.then(function(data2){

console.log( data2);

})
}





/*Function to make hamburger menu show on nav bar*/
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