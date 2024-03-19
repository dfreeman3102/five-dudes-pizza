var addToOrder = document.querySelector(".addOrder");
var order = [];

addToOrder.addEventListener("click", addOrder())

function addOrder(){
var pizza = element.

}

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
const apiKey = "0bd84def3a95469c8cc5ddc3c2736a4e"
const ingredient = []

function getIngredient() {
  const ingredientUrl = `https://api.spoonacular.com/food/ingredients/search?query=pepperoni&sort=calories&sortDirection=desc&apiKey=${apiKey}&includeNutrition=true`

  fetch(ingredientUrl)
    .then(function (results) {
      return results.json();

    })
    .then(function (data) {
      const ingredientId = data.results[0].id
      console.log(ingredientId);
      getNutrition()
      function getNutrition() {
        const nutritionUrl = `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`
        // `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`
        fetch(nutritionUrl)
          .then(function (results) {
            return results.json();
          })
          .then(function (data) {
            console.log(data);
            // const nutritionInfo = 
            
          })
      }
    })

}

getIngredient()

