//========For letter search========
const getMeals = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`)
        .then((response) => response.json())
        .then((data) => {
            const mealItemDiv = document.getElementById('meal_item');
            const mealName = data.meals;
            mealName.forEach(element => {
                const mealDiv = document.createElement('div');
                mealDiv.className = 'mealList';
                const mealInfo = `
                   <img class="meal-image" src="${element.strMealThumb}">

                    <h2 id="meals-title">${ element.strMeal }</h2>
                    
                    <button onclick="displayMealsDetails('${ element.strMeal }')">Details...</button>
                `;
                mealDiv.innerHTML = mealInfo;
                mealItemDiv.appendChild(mealDiv);  
            },10);
        });
};


//========For Name search========
const displayMealsDetails = title =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
    .then(response => response.json())
    .then(data =>{
        const mealContainer = document.getElementById('meal_item');
        mealContainer.style.display="none";
        const catchValue = data.meals["0"];
        const value = Object.values(catchValue);
        
        const mealDetailsItem = document.getElementById('meal_details_item');
        mealDetailsItem.innerHTML = `
        <img class="meal-details-image" src="${catchValue.strMealThumb}">
        <h2 class="meal-details-title">${ catchValue.strMeal }</h2>
        `;
        for (let i = 9; i < 17; i++) {
            const details = value[i];
            if (value[i] !== " " ) {
                const detailsMeal = value[i];
                const li = document.createElement('li');
                li.innerText = detailsMeal;
                mealDetailsItem.appendChild(li);
        
            }
        }
        
    } );
}
const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const inputMeal = document.getElementById('meal-name').value;
    getMeals(inputMeal);
    // displayMealsDetails(inputMeal);
});



