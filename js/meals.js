// load Meals
const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
// display Meals
const displayMeals = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 120)}</p>
        <div class="d-flex justify-content-between">
        <button onclick='pickMeals(${
          meal.idMeal
        })' type="button" class="btn btn-primary">Pick</button>
        <button onclick='pickMeals(${
          meal.idMeal
        })' type="button" class="btn btn-primary">Delate</button></div>
      </div>
    </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};
// Select Meal 
const searchFood = () => {
  const mealsField = document.getElementById("meals-field");
  const searchMeal = mealsField.value;
  loadMeals(searchMeal);
  mealsField.value = "";
};

const pickMeals = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => selectedMeal(data.meals[0]));
};
const selectedMeal = (meal) => {
  const selectMealContainer = document.getElementById("selected-meal");
  selectMealContainer.innerHTML = "";
  const selectDiv = document.createElement("div");
  selectDiv.classList.add("row");
  selectDiv.classList.add("gap-0");
  selectDiv.innerHTML = `
  <div class="col-md-4">
    <img src="${meal.strMealThumb}" class="img-fluid rounded-start">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    </div>
  </div>
  `;
  selectMealContainer.appendChild(selectDiv);
};

loadMeals(" ");
