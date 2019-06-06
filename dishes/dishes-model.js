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
    getDish,
}

function getDishes() {
    return db('dishes')
}



