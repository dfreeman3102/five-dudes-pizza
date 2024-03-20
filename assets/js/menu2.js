document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
      closeAllModals();
    }
  });
});
// var addToOrder = document.querySelector(".addOrder");\
// var order = [];

// addToOrder.addEventListener("click", addOrder())

// function addOrder(){

// }

// this was created to prevent commit issues

// var SpoonacularApi = require('spoonacular_api');

// var defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
// var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];

// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// apiKeyScheme.apiKeyPrefix['x-api-key'] = "Token"

// var api = new SpoonacularApi.DefaultApi()
// var analyzeRecipeRequest = new SpoonacularApi.AnalyzeRecipeRequest(); // {AnalyzeRecipeRequest} Example request body.
// var opts = {
//   'language': en, // {String} The input language, either \"en\" or \"de\".
//   'includeNutrition': false, // {Boolean} Whether nutrition data should be added to correctly parsed ingredients.
//   'includeTaste': false // {Boolean} Whether taste data should be added to correctly parsed ingredients.
// };
// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// api.analyzeRecipe(analyzeRecipeRequest, opts, callback);

// const apiKey = 

// "aa6cfeb66b1c442aa09657728a431c94"
  // "0bd84def3a95469c8cc5ddc3c2736a4e"
// "41342be6e3224906b0a5512ceb92ef9e"

// const marinaraUrl = `https://api.spoonacular.com/food/ingredients/search?query=marinara&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// const mozzarellaUrl = `https://api.spoonacular.com/food/ingredients/search?query=mozzarella&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// const pepperoniUrl = `https://api.spoonacular.com/food/ingredients/search?query=pepperoni&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// const mushroomUrl = `https://api.spoonacular.com/food/ingredients/search?query=mushroom&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// const bellPepperUrl = `https://api.spoonacular.com/food/ingredients/search?query="bell pepper"&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// const onionUrl = `https://api.spoonacular.com/food/ingredients/search?query=onion&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// const oliveUrl = `https://api.spoonacular.com/food/ingredients/search?query="black olives"&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// let ingredient = []




// const ingredientId = data.results[0].id


// const ingredientUrl = `https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
// function getIngredient() {
//   var ingredient = "bell pepper"
//   fetch(ingredientUrl)
//     .then(function (results) {
//       return results.json();

//     })
//     .then(function (data) {
//       const ingredientId = data.results[0].id
//       // console.log(ingredientId);
//       // getNutrition()

//       function getNutrition() {
//         const nutritionUrl = `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`
//         fetch(nutritionUrl)

//           .then(function (results) {
//             return results.json();
//           })
//           .then(function (data) {
//             // console.log(data);
//             // const nutritionInfo = 

//           })
//       }
//       getNutrition()
//     })
// }

// getIngredient()

const vegNutritionEl = document.getElementById("veggie-nutrition")
const caloriesArr = []
var ingredientId = ""
const nutritionUrl = `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`

let crustCalories
let crustFat
let crustProtein
let marinaraCalories
let marinaraFat
let marinaraProtein
let mozzCalories
let mozzFat
let mozzProtein
let mushroomCalories
let mushroomFat
let mushroomProtein
let bellPepperCalories
let bellPepperFat
let bellPepperProtein
let onionCalories
let onionFat
let onionProtein
let olivesCalories
let olivesFat
let olivesProtein
let pepperoniCalories
let pepperoniFat
let pepperoniProtein
let sausageCalories
let sausageFat
let sausageProtein
let baconCalories
let baconFat
let baconProtein
let hamCalories
let hamFat
let hamProtein
let pineappleCalories
let pineappleFat
let pineappleProtein
let oliveOilCalories
let oliveOilFat
let oliveOilProtein




function getNutrition() {
  const crustNutritionUrl = `https://api.spoonacular.com/food/ingredients/93610/information?amount=1&apiKey=${apiKey}`
  fetch(crustNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      
      crustCalories = parseFloat(data.nutrition.nutrients[10].amount)*50
      crustFat = data.nutrition.nutrients[25].amount
      crustProtein = data.nutrition.nutrients[16].amount
      console.log(crustCalories)
      // *50
    })
  const marinaraNutritionUrl = `https://api.spoonacular.com/food/ingredients/10111549/information?amount=1&apiKey=${apiKey}`
  fetch(marinaraNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      marinaraCalories = parseFloat(data.nutrition.nutrients[10].amount)*250
      marinaraFat = parseFloat(data.nutrition.nutrients[25].amount)
      marinaraProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(marinaraCalories)
      // *250
    })

  const mozzNutritionUrl = `https://api.spoonacular.com/food/ingredients/1001026/information?amount=1&apiKey=${apiKey}`
  fetch(mozzNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mozzCalories = parseFloat(data.nutrition.nutrients[10].amount)*100
      mozzFat = parseFloat(data.nutrition.nutrients[25].amount)
      mozzProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(mozzCalories)
// *100
    })

  const mushroomNutritionUrl = `https://api.spoonacular.com/food/ingredients/11260/information?amount=1&apiKey=${apiKey}`
  fetch(mushroomNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mushroomCalories = parseFloat(data.nutrition.nutrients[10].amount)*3
      mushroomFat = parseFloat(data.nutrition.nutrients[25].amount)
      mushroomProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(mushroomCalories)
      // *3
    })

  const bellNutritionUrl = `https://api.spoonacular.com/food/ingredients/10211821/information?amount=1&apiKey=${apiKey}`
  fetch(bellNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      bellPepperCalories = parseFloat(data.nutrition.nutrients[10].amount)/3
      bellPepperFat = parseFloat(data.nutrition.nutrients[25].amount)
      bellPepperProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(bellPepperCalories)
      // /3
    })
  const onionNutritionUrl = `https://api.spoonacular.com/food/ingredients/11282/information?amount=1&apiKey=${apiKey}`
  fetch(onionNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      onionCalories = parseFloat(data.nutrition.nutrients[10].amount)/2
      onionFat = parseFloat(data.nutrition.nutrients[25].amount)
      onionProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(onionCalories)
      // /2
    })
  const olivesNutritionUrl = `https://api.spoonacular.com/food/ingredients/1059195/information?amount=1&apiKey=${apiKey}`
  fetch(olivesNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      olivesCalories = parseFloat(data.nutrition.nutrients[10].amount)*375
      olivesFat = parseFloat(data.nutrition.nutrients[25].amount)
      olivesProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(olivesCalories)
      // *375
    })
  const pepperoniNutritionUrl = `https://api.spoonacular.com/food/ingredients/7057/information?amount=1&apiKey=${apiKey}`
  fetch(pepperoniNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      pepperoniCalories = parseFloat(data.nutrition.nutrients[10].amount)*1600
      pepperoniFat = parseFloat(data.nutrition.nutrients[25].amount)
      pepperoniProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(pepperoniCalories)
      // *1600
    })
   const sausageNutritionUrl = `https://api.spoonacular.com/food/ingredients/7036/information?amount=1&apiKey=${apiKey}`
  fetch(sausageNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      sausageCalories = parseFloat(data.nutrition.nutrients[10].amount)*4.5
      sausageFat = parseFloat(data.nutrition.nutrients[25].amount)
      sausageProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(sausageCalories)
      // *4.5
    })
  const baconNutritionUrl = `https://api.spoonacular.com/food/ingredients/10123/information?amount=1&apiKey=${apiKey}`
  fetch(baconNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      baconCalories = parseFloat(data.nutrition.nutrients[10].amount)*200
      baconFat = parseFloat(data.nutrition.nutrients[25].amount)
      baconProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(baconCalories)
      // *200

    })
  const hamNutritionUrl = `https://api.spoonacular.com/food/ingredients/10151/information?amount=1&apiKey=${apiKey}`
  fetch(hamNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      console.log(data)
      hamCalories = parseFloat(data.nutrition.nutrients[10].amount)/120
      hamFat = parseFloat(data.nutrition.nutrients[25].amount)
      hamProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(hamCalories)
      // /120

    })
  const pineappleNutritionUrl = `https://api.spoonacular.com/food/ingredients/1029354/information?amount=1&apiKey=${apiKey}`
  fetch(pineappleNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      pineappleCalories = parseFloat(data.nutrition.nutrients[10].amount)
      pineappleFat = parseFloat(data.nutrition.nutrients[25].amount)
      pineappleProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(pineappleCalories)
      // *400
    })
  const oliveOilNutritionUrl = `https://api.spoonacular.com/food/ingredients/4053/information?amount=1&apiKey=${apiKey}`
  fetch(oliveOilNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      oliveOilCalories = parseFloat(data.nutrition.nutrients[10].amount)
      oliveOilFat = parseFloat(data.nutrition.nutrients[25].amount)
      oliveOilProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(oliveOilCalories)
      *55
    })

getVeggieNutrition(crustCalories, marinaraCalories, mozzCalories, mushroomCalories, bellPepperCalories, onionCalories, olivesCalories)
 console.log(crustCalories)
}
getNutrition()



function getVeggieNutrition (crustCalories, marinaraCalories, mozzCalories, mushroomCalories, bellPepperCalories, onionCalories, olivesCalories) {
 let veggieCalories = 0
  veggieCalories += (crustCalories+marinaraCalories+mozzCalories+mushroomCalories+bellPepperCalories+onionCalories+olivesCalories)||0
  console.log(veggieCalories)

 }

 function getMeatNutrition () {


 }