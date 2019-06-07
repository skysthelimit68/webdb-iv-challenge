const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);
/*
- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
- `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.
*/


module.exports = {
    getRecipes,
    addRecipe,
    addIngredient,
    getRecipe
}

function getRecipes() {
    return db
    .select('recipes.id', 'recipes.name', 'dishes.name as dish')
    .from('recipes')
    .leftJoin('dishes', 'recipes.dish_id', 'dishes.id')
}

//add recipe including instruction
function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe, 'id')
}

//add ingredient to recipe one at a time
//require recipe id, ingredient id, quantity and unit id
function addIngredient(ingredient) {
    return db('recipe_ingredients')
    .insert(ingredient, 'id')
    .then( res => {
        return getRecipe(ingredient.recipe_id)
    })
}

function getRecipe(id) {
    return db
    .select('recipes.name as recipe', 'ingredients.name as ingredient', 'recipe_ingredients.quantity', 'units.name as unit')
    .from('recipe_ingredients')
    .leftJoin('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
    .leftJoin('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .leftJoin('units', 'units.id', 'recipe_ingredients.unit_id')
    .where({'recipes.id' : id})
}