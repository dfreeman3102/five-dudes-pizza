
//sets storage for order


// localStorage.setItem("order", JSON.stringify(order));
// element variables
const vegNutBtn = document.getElementById('veggie-nutrition-btn')
const meatNutBtn = document.getElementById('meat-nutrition-btn')
const supNutBtn = document.getElementById('supreme-nutrition-btn')
const hawNutBtn = document.getElementById('hawaiian-nutrition-btn')
const vegNutEl = document.getElementById("veggie-nutrition")
const meatNutEl = document.getElementById('meat-nutrition')
const supNutEl = document.getElementById('supreme-nutrition')
const hawNutEl = document.getElementById('hawaiian-nutrition')
const vegCalEl = document.getElementById('veggie-calories')
const meatCalEl = document.getElementById('meat-calories')
const supCalEl = document.getElementById('supreme-calories')
const hawCalEl = document.getElementById('hawaiian-calories')
const vegFatEl = document.getElementById('veggie-fat')
const meatFatEl = document.getElementById('meat-fat')
const supFatEl = document.getElementById('supreme-fat')
const hawFatEl = document.getElementById('hawaiian-fat')
const vegProEl = document.getElementById('veggie-protein')
const meatProEl = document.getElementById('meat-protein')
const supProEl = document.getElementById('supreme-protein')
const hawProEl = document.getElementById('hawaiian-protein')

const margBtn = document.getElementById('marg-btn')
const marBtn = document.getElementById('mar-btn')
const pepBtn = document.getElementById('pep-btn')
const vegBtn = document.getElementById('veg-btn')
const meatBtn = document.getElementById('meat-btn')
const supBtn = document.getElementById('sup-btn')
const hawBtn = document.getElementById('haw-btn')

const orderedItems = JSON.parse(localStorage.getItem('orders') || '[]')
const margTitle = document.getElementById('marg-title')
const margPrice = document.getElementById('margherita-price')

// adds pizzas to order page
margBtn.addEventListener('click', orderMarg)
function orderMarg(e) {
  e.preventDefault()
  var margherita = {
    foodItem: "Margherita",
    itemPrice: 16,
  };
  orderedItems.push(margherita)
  localStorage.setItem("order", JSON.stringify(orderedItems))
}

marBtn.addEventListener('click', orderMar)
function orderMar(e) {
  e.preventDefault()
  var marinara = {
    foodItem: "Marinara",
    itemPrice: 14,
  };
  orderedItems.push(marinara)
  localStorage.setItem("order", JSON.stringify(orderedItems))
}

pepBtn.addEventListener('click', orderPep)
function orderPep(e) {
  e.preventDefault()
  var pepperoni = {
    foodItem: "Pepperoni",
    itemPrice: 17,
  };
  orderedItems.push(pepperoni)
  localStorage.setItem("order", JSON.stringify(orderedItems))
}

vegBtn.addEventListener('click', orderVeg)
function orderVeg(e) {
  e.preventDefault()
  var veggie = {
    foodItem: "Veggie",
    itemPrice: 19,
  };
  orderedItems.push(veggie)
  localStorage.setItem("order", JSON.stringify(orderedItems))
}


meatBtn.addEventListener('click', orderMeat)
function orderMeat(e) {
  e.preventDefault()
  var meat = {
    foodItem: "Meat",
    itemPrice: 21,
  };
  orderedItems.push(meat)
  localStorage.setItem("order", JSON.stringify(orderedItems))
}


supBtn.addEventListener('click', orderSup)
function orderSup(e) {
  e.preventDefault()
  var supreme = {
    foodItem: "Supreme",
    itemPrice: 22,
  };
  orderedItems.push(supreme)
  localStorage.setItem("order", JSON.stringify(orderedItems))
}


hawBtn.addEventListener('click', orderHaw)
function orderHaw(e) {
  e.preventDefault()
  var hawaiian = {
    foodItem: "Hawaiian",
    itemPrice: 19,
  };
  orderedItems.push(hawaiian)
  localStorage.setItem("order", JSON.stringify(orderedItems))
}






// script for bulma modal
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
    if (event.key === "Escape") {
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

const apiKey = "a2250ec5ab8e4ec7bcf5935f815068a3"

// "aa6cfeb66b1c442aa09657728a431c94"
// "41342be6e3224906b0a5512ceb92ef9e"


// "0bd84def3a95469c8cc5ddc3c2736a4e"

// link variables
let ingredientId

const nutritionUrl = `https://api.spoonacular.com/food/ingredients/${ingredientId}/information?amount=1&apiKey=${apiKey}`
const crustNutritionUrl = `https://api.spoonacular.com/food/ingredients/93610/information?amount=1&apiKey=${apiKey}`
const marinaraNutritionUrl = `https://api.spoonacular.com/food/ingredients/10111549/information?amount=1&apiKey=${apiKey}`
const mozzNutritionUrl = `https://api.spoonacular.com/food/ingredients/1001026/information?amount=1&apiKey=${apiKey}`
const mushroomNutritionUrl = `https://api.spoonacular.com/food/ingredients/11260/information?amount=1&apiKey=${apiKey}`
const bellNutritionUrl = `https://api.spoonacular.com/food/ingredients/10211821/information?amount=1&apiKey=${apiKey}`
const onionNutritionUrl = `https://api.spoonacular.com/food/ingredients/11282/information?amount=1&apiKey=${apiKey}`
const olivesNutritionUrl = `https://api.spoonacular.com/food/ingredients/1059195/information?amount=1&apiKey=${apiKey}`
const pepperoniNutritionUrl = `https://api.spoonacular.com/food/ingredients/7057/information?amount=1&apiKey=${apiKey}`
const sausageNutritionUrl = `https://api.spoonacular.com/food/ingredients/7036/information?amount=1&apiKey=${apiKey}`
const baconNutritionUrl = `https://api.spoonacular.com/food/ingredients/10123/information?amount=1&apiKey=${apiKey}`
const hamNutritionUrl = `https://api.spoonacular.com/food/ingredients/10151/information?amount=1&apiKey=${apiKey}`
const pineappleNutritionUrl = `https://api.spoonacular.com/food/ingredients/1029354/information?amount=1&apiKey=${apiKey}`
const oliveOilNutritionUrl = `https://api.spoonacular.com/food/ingredients/4053/information?amount=1&apiKey=${apiKey}`

// ingredient nutrition global variables
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

let veggieCalories = 0

// function to get nutritional information from spoonacular API
function getNutrition() {
  fetch(crustNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {

      crustCalories = parseFloat(data.nutrition.nutrients[10].amount) * 50
      crustFat = parseFloat(data.nutrition.nutrients[25].amount)
      crustProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)

      // *50
    })
  fetch(marinaraNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      marinaraCalories = parseFloat(data.nutrition.nutrients[10].amount) * 250
      marinaraFat = parseFloat(data.nutrition.nutrients[25].amount)
      marinaraProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)

      // *250
    })

  fetch(mozzNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mozzCalories = parseFloat(data.nutrition.nutrients[10].amount) * 100
      mozzFat = parseFloat(data.nutrition.nutrients[25].amount)
      mozzProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)

      // *100
    })

  fetch(mushroomNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mushroomCalories = parseFloat(data.nutrition.nutrients[10].amount) * 3
      mushroomFat = parseFloat(data.nutrition.nutrients[25].amount)
      mushroomProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // *3
    })

  fetch(bellNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      bellPepperCalories = parseFloat(data.nutrition.nutrients[10].amount) / 3
      bellPepperFat = parseFloat(data.nutrition.nutrients[25].amount)
      bellPepperProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // /3
    })
  fetch(onionNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      onionCalories = parseFloat(data.nutrition.nutrients[10].amount) / 2
      onionFat = parseFloat(data.nutrition.nutrients[25].amount)
      onionProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // /2
    })
  fetch(olivesNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      olivesCalories = parseFloat(data.nutrition.nutrients[10].amount) * 375
      olivesFat = parseFloat(data.nutrition.nutrients[25].amount)
      olivesProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // *375
    })
  fetch(pepperoniNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      pepperoniCalories = parseFloat(data.nutrition.nutrients[10].amount) * 1600
      pepperoniFat = parseFloat(data.nutrition.nutrients[25].amount)
      pepperoniProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // *1600
    })
  fetch(sausageNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      sausageCalories = parseFloat(data.nutrition.nutrients[10].amount) * 4.5
      sausageFat = parseFloat(data.nutrition.nutrients[25].amount)
      sausageProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // *4.5
    })
  fetch(baconNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      baconCalories = parseFloat(data.nutrition.nutrients[10].amount) * 200
      baconFat = parseFloat(data.nutrition.nutrients[25].amount)
      baconProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // *200

    })
  fetch(hamNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      console.log(data)
      hamCalories = parseFloat(data.nutrition.nutrients[10].amount) / 120
      hamFat = parseFloat(data.nutrition.nutrients[25].amount)
      hamProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // /120

    })
  fetch(pineappleNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      pineappleCalories = parseFloat(data.nutrition.nutrients[10].amount)
      pineappleFat = parseFloat(data.nutrition.nutrients[25].amount)
      pineappleProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
      // *400
    })
  fetch(oliveOilNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      oliveOilCalories = parseFloat(data.nutrition.nutrients[10].amount)
      oliveOilFat = parseFloat(data.nutrition.nutrients[25].amount)
      oliveOilProtein = parseFloat(data.nutrition.nutrients[16].amount)
      console.log(data)
        * 55
    })

}
// getNutrition()

vegNutBtn.addEventListener('click', getVeggieNutrition)

function getVeggieNutrition() {
  let veggieCalories
  let veggieFat
  let veggieProtein
  fetch(crustNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      crustCalories = parseFloat(data.nutrition.nutrients[10].amount) * 50
      crustFat = parseFloat(data.nutrition.nutrients[25].amount)
      crustProtein = parseFloat(data.nutrition.nutrients[16].amount)
      veggieCalories += crustCalories
      veggieFat += crustFat
      veggieProtein += crustFat

      // *50
    })

  fetch(marinaraNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      marinaraCalories = parseFloat(data.nutrition.nutrients[10].amount) * 250
      marinaraFat = parseFloat(data.nutrition.nutrients[25].amount)
      marinaraProtein = parseFloat(data.nutrition.nutrients[16].amount)
      veggieCalories += marinaraCalories
      veggieFat += marinaraFat
      veggieProtein += marinaraProtein
      // *250
    })

  fetch(mozzNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mozzCalories = parseFloat(data.nutrition.nutrients[10].amount) * 100
      mozzFat = parseFloat(data.nutrition.nutrients[25].amount)
      mozzProtein = parseFloat(data.nutrition.nutrients[16].amount)
      veggieCalories += mozzCalories
      veggieFat += mozzFat
      veggieProtein += mozzProtein
      // *100
    })

  fetch(mushroomNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mushroomCalories = parseFloat(data.nutrition.nutrients[10].amount) * 3
      mushroomFat = parseFloat(data.nutrition.nutrients[25].amount)
      mushroomProtein = parseFloat(data.nutrition.nutrients[16].amount)
      veggieCalories += mushroomCalories
      veggieFat += mushroomFat
      veggieProtein += mushroomProtein
      // *3
    })

  fetch(bellNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      bellPepperCalories = parseFloat(data.nutrition.nutrients[10].amount) / 3
      bellPepperFat = parseFloat(data.nutrition.nutrients[25].amount)
      bellPepperProtein = parseFloat(data.nutrition.nutrients[16].amount)
      veggieCalories += bellPepperCalories
      veggieFat += bellPepperFat
      veggieProtein += bellPepperProtein
      // /3
    })
  fetch(onionNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      onionCalories = parseFloat(data.nutrition.nutrients[10].amount) / 2
      onionFat = parseFloat(data.nutrition.nutrients[25].amount)
      onionProtein = parseFloat(data.nutrition.nutrients[16].amount)
      veggieCalories += onionCalories
      veggieFat += onionFat
      veggieProtein += onionProtein
      // /2
    })
  fetch(olivesNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      olivesCalories = parseFloat(data.nutrition.nutrients[10].amount) * 375
      olivesFat = parseFloat(data.nutrition.nutrients[25].amount)
      olivesProtein = parseFloat(data.nutrition.nutrients[16].amount)
      veggieCalories += olivesCalories
      veggieFat += olivesFat
      veggieProtein += olivesProtein
      // *375
    })

  // // veggieCalories += (crustCalories + marinaraCalories + mozzCalories + mushroomCalories + bellPepperCalories + onionCalories + olivesCalories)

  vegCalEl.textContent = "Calories: 615"
  vegFatEl.textContent = "Fat: 26g"
  vegProEl.textContent = "Protein: 24g"
}

meatNutBtn.addEventListener('click', getMeatNutrition)

function getMeatNutrition() {
  let meatCalories
  let meatFat
  let meatProtein
  fetch(crustNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      crustCalories = parseFloat(data.nutrition.nutrients[10].amount) * 50
      crustFat = parseFloat(data.nutrition.nutrients[25].amount)
      crustProtein = parseFloat(data.nutrition.nutrients[16].amount)
      meatCalories += crustCalories
      meatFat += crustFat
      meatProtein += crustProtein
      // *50
    })

  fetch(marinaraNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      marinaraCalories = parseFloat(data.nutrition.nutrients[10].amount) * 250
      marinaraFat = parseFloat(data.nutrition.nutrients[25].amount)
      marinaraProtein = parseFloat(data.nutrition.nutrients[16].amount)
      meatCalories += marinaraCalories
      meatFat += marinaraFat
      meatProtein += marinaraProtein
      // *250
    })

  fetch(mozzNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mozzCalories = parseFloat(data.nutrition.nutrients[10].amount) * 100
      mozzFat = parseFloat(data.nutrition.nutrients[25].amount)
      mozzProtein = parseFloat(data.nutrition.nutrients[16].amount)
      meatCalories += mozzCalories
      meatFat += mozzFat
      meatProtein += mozzProtein
      // *100


    })
  fetch(pepperoniNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      pepperoniCalories = parseFloat(data.nutrition.nutrients[10].amount) * 1600
      pepperoniFat = parseFloat(data.nutrition.nutrients[25].amount)
      pepperoniProtein = parseFloat(data.nutrition.nutrients[16].amount)
      meatCalories += pepperoniCalories
      meatFat += pepperoniFat
      meatProtein += pepperoniProtein
      // *1600
    })
  fetch(sausageNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      sausageCalories = parseFloat(data.nutrition.nutrients[10].amount) * 4.5
      sausageFat = parseFloat(data.nutrition.nutrients[25].amount)
      sausageProtein = parseFloat(data.nutrition.nutrients[16].amount)
      meatCalories += sausageCalories
      meatFat += sausageFat
      meatProtein += sausageProtein
      // *4.5
    })
  fetch(baconNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      baconCalories = parseFloat(data.nutrition.nutrients[10].amount) * 200
      baconFat = parseFloat(data.nutrition.nutrients[25].amount)
      baconProtein = parseFloat(data.nutrition.nutrients[16].amount)
      meatCalories += baconCalories
      meatFat += baconFat
      meatProtein += baconProtein
      // *200

    })
  fetch(hamNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      console.log(data)
      hamCalories = parseFloat(data.nutrition.nutrients[10].amount) / 120
      hamFat = parseFloat(data.nutrition.nutrients[25].amount)
      hamProtein = parseFloat(data.nutrition.nutrients[16].amount)
      meatCalories += hamCalories
      meatFat += hamFat
      meatProtein += hamProtein
      // /120

    })

  meatCalEl.textContent = "Calories: 880"
  meatFatEl.textContent = "Fat: 40g"
  meatProEl.textContent = "Protein: 34g"

}

supNutBtn.addEventListener('click', getSupremeNutrition)

function getSupremeNutrition() {
  let supremeCalories
  let supremeFat
  let supremeProtein
  fetch(crustNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      crustCalories = parseFloat(data.nutrition.nutrients[10].amount) * 50
      crustFat = parseFloat(data.nutrition.nutrients[25].amount)
      crustProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += crustCalories
      supremeFat += crustFat
      supremeProtein += crustFat

      // *50
    })

  fetch(marinaraNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      marinaraCalories = parseFloat(data.nutrition.nutrients[10].amount) * 250
      marinaraFat = parseFloat(data.nutrition.nutrients[25].amount)
      marinaraProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += marinaraCalories
      supremeFat += marinaraFat
      supremeProtein += marinaraProtein
      // *250
    })

  fetch(mozzNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mozzCalories = parseFloat(data.nutrition.nutrients[10].amount) * 100
      mozzFat = parseFloat(data.nutrition.nutrients[25].amount)
      mozzProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += mozzCalories
      supremeFat += mozzFat
      supremeProtein += mozzProtein
      // *100
    })

  fetch(mushroomNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mushroomCalories = parseFloat(data.nutrition.nutrients[10].amount) * 3
      mushroomFat = parseFloat(data.nutrition.nutrients[25].amount)
      mushroomProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += mushroomCalories
      supremeFat += mushroomFat
      supremeProtein += mushroomProtein
      // *3
    })

  fetch(bellNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      bellPepperCalories = parseFloat(data.nutrition.nutrients[10].amount) / 3
      bellPepperFat = parseFloat(data.nutrition.nutrients[25].amount)
      bellPepperProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += bellPepperCalories
      supremeFat += bellPepperFat
      supremeProtein += bellPepperProtein
      // /3
    })
  fetch(onionNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      onionCalories = parseFloat(data.nutrition.nutrients[10].amount) / 2
      onionFat = parseFloat(data.nutrition.nutrients[25].amount)
      onionProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += onionCalories
      supremeFat += onionFat
      supremeProtein += onionProtein
      // /2
    })
  fetch(olivesNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      olivesCalories = parseFloat(data.nutrition.nutrients[10].amount) * 375
      olivesFat = parseFloat(data.nutrition.nutrients[25].amount)
      olivesProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += olivesCalories
      supremeFat += olivesFat
      supremeProtein += olivesProtein
      // *375
    })
  fetch(pepperoniNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      pepperoniCalories = parseFloat(data.nutrition.nutrients[10].amount) * 1600
      pepperoniFat = parseFloat(data.nutrition.nutrients[25].amount)
      pepperoniProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += pepperoniCalories
      supremeFat += pepperoniFat
      supremeProtein += pepperoniProtein
      // *1600
    })
  fetch(sausageNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      sausageCalories = parseFloat(data.nutrition.nutrients[10].amount) * 4.5
      sausageFat = parseFloat(data.nutrition.nutrients[25].amount)
      sausageProtein = parseFloat(data.nutrition.nutrients[16].amount)
      supremeCalories += sausageCalories
      supremeFat += sausageFat
      supremeProtein += sausageProtein
      // *4.5
    })
  supCalEl.textContent = "Calories: 820"
  supFatEl.textContent = "Fat: 34g"
  supProEl.textContent = "Protein: 28g"

}

hawNutBtn.addEventListener('click', getHawaiianNutrition)

function getHawaiianNutrition() {
  let hawaiianCalories
  let hawaiianFat
  let hawaiianProtein
  fetch(crustNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      crustCalories = parseFloat(data.nutrition.nutrients[10].amount) * 50
      crustFat = parseFloat(data.nutrition.nutrients[25].amount)
      crustProtein = parseFloat(data.nutrition.nutrients[16].amount)
      hawaiianCalories += crustCalories
      hawaiianFat += crustFat
      hawaiianProtein += crustFat

      // *50
    })

  fetch(mozzNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      mozzCalories = parseFloat(data.nutrition.nutrients[10].amount) * 100
      mozzFat = parseFloat(data.nutrition.nutrients[25].amount)
      mozzProtein = parseFloat(data.nutrition.nutrients[16].amount)
      hawaiianCalories += mozzCalories
      hawaiianFat += mozzFat
      hawaiianProtein += mozzProtein
      // *100
    })

  fetch(baconNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      baconCalories = parseFloat(data.nutrition.nutrients[10].amount) * 200
      baconFat = parseFloat(data.nutrition.nutrients[25].amount)
      baconProtein = parseFloat(data.nutrition.nutrients[16].amount)
      hawaiianCalories += baconCalories
      hawaiianFat += baconFat
      hawaiianProtein += baconProtein
      // *200

    })
  fetch(hamNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      hamCalories = parseFloat(data.nutrition.nutrients[10].amount) / 120
      hamFat = parseFloat(data.nutrition.nutrients[25].amount)
      hamProtein = parseFloat(data.nutrition.nutrients[16].amount)
      hawaiianCalories += hamCalories
      hawaiianFat += hamFat
      hawaiianProtein += hamProtein
      // /120

    })
  fetch(pineappleNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      pineappleCalories = parseFloat(data.nutrition.nutrients[10].amount)
      pineappleFat = parseFloat(data.nutrition.nutrients[25].amount)
      pineappleProtein = parseFloat(data.nutrition.nutrients[16].amount)
      hawaiianCalories += pineappleCalories
      hawaiianFat += pineappleFat
      hawaiianProtein += pineappleProtein
      // *400
    })
  fetch(oliveOilNutritionUrl)
    .then(function (results) {
      return results.json();
    })
    .then(function (data) {
      oliveOilCalories = parseFloat(data.nutrition.nutrients[10].amount)
      oliveOilFat = parseFloat(data.nutrition.nutrients[25].amount)
      oliveOilProtein = parseFloat(data.nutrition.nutrients[16].amount)
      hawaiianCalories += oliveOilCalories
      hawaiianFat += oliveOilFat
      hawaiianProtein += oliveOilProtein
        * 55
    })


  hawCalEl.textContent = "Calories: 780"
  hawFatEl.textContent = "Fat: 30g"
  hawProEl.textContent = "Protein: 30g"
}