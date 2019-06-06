const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);
/*
- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
- `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.
*/


module.exports = {
    getRecipes,
    addRecipe(recipe),
}

