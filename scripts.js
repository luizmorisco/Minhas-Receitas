/*
    Lógica:

    [x] Pegar a informação do input, quando do botao for clicado
    [x] Ir até a API, e trazer as receitas    
    [] Colocar as receitas na tela
    [] Saber quando o user clicou na receita
    [] Buscar informações da receita individual na API
    [] Colocar a receita individual na tela

*/

// const input = document.querySelector('.search-input')
const form = document.querySelector('.search-form')
const recipeList = document.querySelector('.recipe-list')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputValue = event.target[0].value

    searchRecipes(inputValue)
})

async function searchRecipes(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json()
 
    showRecipes(data.meals)
}

function showRecipes(recipes){                                 // innerHTML: deixa colocar infomormações no meu <div>
    recipeList.innerHTML = recipes.map(item => `
        <div class="recipe-card">
            <img src="${item.strMealThumb}" alt="photo-recipe"> 
            <h3>${item.strMeal}</h3>
        </div>
        `
    )
}