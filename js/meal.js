const searchFood = () => {
    const SearchField = document.getElementById('search-field');
    const SearchFieldText = SearchField.value;
    // clear Search
    SearchField.value = '';
    if (SearchFieldText == '') {
        const error = document.getElementById('error');
        error.innerHTML = `
        <p>Please Write Any Item</p>`

    }
    else {
        error.textContent = '';
        // load data
        const ul = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchFieldText}`
        fetch(ul)
            .then(res => res.json())
            .then(data => searchResult(data.meals))
        // console.log(ul)
    }

}
const searchResult = (meals) => {
    console.log(meals)
    const ResultDisplay = document.getElementById('search-display')
    ResultDisplay.textContent = '';
    if (meals == null) {
        const error = document.getElementById('error');
        error.innerHTML = `
        <p>This food not here</p>`
    }
    else {
        meals.forEach(meal => {
            // console.log(meal.strMeal)
            const div = document.createElement('div')
            div.classList.add('col');
            div.innerHTML = `
            <div onClick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>`
            ResultDisplay.appendChild(div);
            // console.log(meal.idMeal)
        });
    }


}
const loadMealDetails = mealId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals[0]))
}
const displayMeal = (meal) => {
    // console.log(meal);
    const displayMealDetails = document.getElementById('meal-details');
    displayMealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Watch video</a>
            </div>
    
    `;
    displayMealDetails.appendChild(div);

}