const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);
/*
- `getDishes()`: should return a list of all dishes in the database.
- `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
- `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.
*/


module.exports = {
    getDishes,
    addDish,
    getDish, //by id
}

function getDishes() {
    return db('dishes')
}

function getDish(id) {
    return db
    .select('dishes.id', 'dishes.name', 'recipes.name as recipe')
    .from('recipes')
    .leftJoin('dishes', 'recipes.dish_id', 'dishes.id')
    .where('dishes.id', id)
}

function addDish(dish) {
    return db('dishes')
    .insert(dish, 'id')
}



