var addToOrder = document.querySelector(".addOrder");
var order = [];

addToOrder.addEventListener("click", addOrder())

// function addOrder()

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
const apiKey = "41342be6e3224906b0a5512ceb92ef9e"
// "0bd84def3a95469c8cc5ddc3c2736a4e"

const marinaraUrl = `https://api.spoonacular.com/food/ingredients/search?query=marinara&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const mozzarellaUrl = `https://api.spoonacular.com/food/ingredients/search?query=mozzarella&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const pepperoniUrl = `https://api.spoonacular.com/food/ingredients/search?query=pepperoni&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const mushroomUrl = `https://api.spoonacular.com/food/ingredients/search?query=mushroom&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const bellPepperUrl = `https://api.spoonacular.com/food/ingredients/search?query="bell pepper"&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const onionUrl = `https://api.spoonacular.com/food/ingredients/search?query=onion&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`
const oliveUrl = `https://api.spoonacular.com/food/ingredients/search?query="black olives"&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`

// const ingredientId = data.results[0].id


function getIngredient() {
  const ingredientUrl = `https://api.spoonacular.com/food/ingredients/search?query=pepperoni&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`

  fetch(ingredientUrl)
    .then(function (results) {
      return results.json();

    })
    .then(function (data) {
      const ingredientId = data.results[0].id
      // console.log(ingredientId);
      // getNutrition()

      function getNutrition() {
        const nutritionUrl = `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`
        // `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`
        fetch(nutritionUrl)
          .then(function (results) {
            return results.json();
          })
          .then(function (data) {
            // console.log(data);
            // const nutritionInfo = 

          })
      }
      getNutrition()
    })

}

// getIngredient()

const vegNutritionEl = document.getElementById("veggie-nutrition")
const caloriesArr = []

function veggieNutrition() {
  fetch(marinaraUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {

      const ingredientId = data.results[0].id

      // console.log(data.results[0].id);
      const nutritionUrl = `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`
      fetch(nutritionUrl)
        .then(function (results) {
          return results.json();
        })

        .then(function (data) {

          const marinaraCalories = data.nutrition.nutrients[10].amount
        })
    })
  fetch(mozzarellaUrl)
    .then(function (results) {
      return results.json();

    })
    .then(function (data) {
      console.log(data)
      const ingredientId = data.results[0].id

      // console.log(data.results[0].id);
      const mozzNutritionUrl = `https://api.spoonacular.com/food/ingredients/1001026/information?amount=1&apiKey=${apiKey}`
      fetch(mozzNutritionUrl)
        .then(function (results) {
          return results.json();
        })
      

        .then(function (data) {

          const mozzCalories = data.nutrition.nutrients[10].amount
          console.log(mozzCalories)
        })
    })
}
veggieNutrition()