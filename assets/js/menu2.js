// var addToOrder = document.querySelector(".addOrder");
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

const marinaraUrl = `https://api.spoonacular.com/food/ingredients/search?query=marinara&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const mozzarellaUrl = `https://api.spoonacular.com/food/ingredients/search?query=mozzarella&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const pepperoniUrl = `https://api.spoonacular.com/food/ingredients/search?query=pepperoni&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const mushroomUrl = `https://api.spoonacular.com/food/ingredients/search?query=mushroom&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const bellPepperUrl = `https://api.spoonacular.com/food/ingredients/search?query="bell pepper"&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const onionUrl = `https://api.spoonacular.com/food/ingredients/search?query=onion&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const oliveUrl = `https://api.spoonacular.com/food/ingredients/search?query="black olives"&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
let ingredient = []




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


function getNutrition() {
  const crustNutritionUrl = `https://api.spoonacular.com/food/ingredients/93770/information?amount=1&apiKey=${apiKey}`
  fetch(crustNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const crustCalories = data.nutrition.nutrients[10].amount
      console.log(crustCalories)
    })
  const marinaraNutritionUrl = `https://api.spoonacular.com/food/ingredients/10111549/information?amount=1&apiKey=${apiKey}`
  fetch(marinaraNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const marinaraCalories = data.nutrition.nutrients[10].amount
      console.log(marinaraCalories)
    })

  const mozzNutritionUrl = `https://api.spoonacular.com/food/ingredients/1001026/information?amount=1&apiKey=${apiKey}`
  fetch(mozzNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const mozzCalories = data.nutrition.nutrients[10].amount
      console.log(mozzCalories)
    })

  const mushroomNutritionUrl = `https://api.spoonacular.com/food/ingredients/11260/information?amount=1&apiKey=${apiKey}`
  fetch(mushroomNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const mushroomCalories = data.nutrition.nutrients[10].amount
      console.log(mushroomCalories)
    })

  const bellNutritionUrl = `https://api.spoonacular.com/food/ingredients/10211821/information?amount=1&apiKey=${apiKey}`
  fetch(bellNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const bellPepperCalories = data.nutrition.nutrients[10].amount
      console.log(bellPepperCalories)
    })
  const onionNutritionUrl = `https://api.spoonacular.com/food/ingredients/11282/information?amount=1&apiKey=${apiKey}`
  fetch(onionNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const onionCalories = data.nutrition.nutrients[10].amount
      console.log(onionCalories)
    })
  const olivesNutritionUrl = `https://api.spoonacular.com/food/ingredients/1059195/information?amount=1&apiKey=${apiKey}`
  fetch(olivesNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const olivesCalories = data.nutrition.nutrients[10].amount
      console.log(olivesCalories)
    })
  const pepperoniNutritionUrl = `https://api.spoonacular.com/food/ingredients/7057/information?amount=1&apiKey=${apiKey}`
  fetch(pepperoniNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const pepperoniCalories = data.nutrition.nutrients[10].amount
      console.log(pepperoniCalories)
    })
   const sausageNutritionUrl = `https://api.spoonacular.com/food/ingredients/7036/information?amount=1&apiKey=${apiKey}`
  fetch(sausageNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const sausageCalories = data.nutrition.nutrients[10].amount
      console.log(sausageCalories)
    })
  const baconNutritionUrl = `https://api.spoonacular.com/food/ingredients/10123/information?amount=1&apiKey=${apiKey}`
  fetch(baconNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const baconCalories = data.nutrition.nutrients[10].amount
      console.log(baconCalories)
    })
  const hamNutritionUrl = `https://api.spoonacular.com/food/ingredients/10151/information?amount=1&apiKey=${apiKey}`
  fetch(hamNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const hamCalories = data.nutrition.nutrients[10].amount
      console.log(hamCalories)
    })
  const pineappleNutritionUrl = `https://api.spoonacular.com/food/ingredients/10151/information?amount=1&apiKey=${apiKey}`
  fetch(pineappleNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const pineappleCalories = data.nutrition.nutrients[10].amount
      console.log(pineappleCalories)
    })
  const oliveOilNutritionUrl = `https://api.spoonacular.com/food/ingredients/10151/information?amount=1&apiKey=${apiKey}`
  fetch(oliveOilNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      const oliveOilCalories = data.nutrition.nutrients[10].amount
      console.log(oliveOilCalories)
    })

}



getNutrition()