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
  mealsContainer.innerHTML = '';
  meals.forEach(meal => {
    console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-primary">Pick</button>
        <button type="button" class="btn btn-primary">Delate</button></div>
      </div>
    </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

const searchFood = () =>{
  const mealsField = document.getElementById('meals-field');
  const searchMeal = mealsField.value;
  loadMeals(searchMeal);
  mealsField.value = '';
}

loadMeals(" ");
