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

                    <h2>${ element.strMeal }</h2>
                    <p>${ element.strArea }</p>
                    <button onclick="displayMealsDetails('${ element.strMeal }')">Details</button>
                `;
                mealDiv.innerHTML = mealInfo;
                mealItemDiv.appendChild(mealDiv);  
            },10);
        });
};
const displayMealsDetails = title =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const mealContainer = document.getElementById('meal_item');
        mealContainer.style.display="none";
        const value = data.meals["0"];
        const value1 = Object.values(value);
        // console.log(value1[9])
        for (let i = 9; i < 17; i++) {
            const details = value[i];
            if (value1[i] !== " " ) {
                const detailsMeal = value1[i];
                const mealDetailsItem = document.getElementById('meal_details_item');
                const ul = document.createElement
            }
            
            // console.log(value1[i])
        }
        // console.log(value);
    } );//console.log(data.meals["0"])
}
const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const inputMeal = document.getElementById('meal-name').value;
    getMeals(inputMeal);
});



