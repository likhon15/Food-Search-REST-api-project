function loadMeal(search) {
 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  .then(res => res.json())
  .then(data => displayMeal(data.meals))
}

function displayMeal(data) {
 console.log(data);
 const inter = document.getElementById('container');
 inter.innerHTML = ``;
 data.forEach(d => {
  console.log(d);
  const divMeal = document.createElement('div');
  inter.classList.add('col');
  divMeal.innerHTML = `
    <div class="card">
    <img src=${d.strMealThumb} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${d.strMeal}}</h5>
      <p class="card-text">${d.strInstructions.slice(0,200)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    inter.appendChild(divMeal);
 });
}


function searchMeal() {
   const field = document.getElementById('search-container');
   const newVal = field.value;
   loadMeal(newVal);
}