const searchFood = () => {
    const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  if (searchText == '') {
    alert('You need to type a food')
  }
  else {
    // load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
  }
  
  // clear data
  searchField.value = '';
}

// show results on ui
const displayMeals = (meals) => {
  const resultCard = document.getElementById('search-result'); //bring card
  // To clear previous reults
  resultCard.textContent = '';
  console.log(meals);
  if (meals == null) {
    const div = document.createElement('div');
    div.classList.add('result');
    div.innerHTML = `<h1>No results found</h1>`;
    resultCard.appendChild(div);
  }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}"class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions}</p>
        </div>
      </div>`;
    
        resultCard.appendChild(div);
    })


}
// fetch meal detail
const loadMealDetail = async mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  
  const res = await fetch(url);
  const data = await res.json();
  displayMealDetail(data.meals[0]);

    // fetch(url)
    //     .then(res => res.json())
    // .then(data=>displayMealDetail(data.meals[0]))
     // cuz mealobj er bhtiore array er 0 index e ache
}
// display meal detail
const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
      </div>
    </div>
  </div>
 
    `;
    mealDetails.appendChild(div);
}