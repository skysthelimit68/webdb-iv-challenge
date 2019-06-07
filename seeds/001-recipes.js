
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Seafood Nabeyaki Udon', dish_id: 2 , instruction: 'No chicken, just seafood'},
        {name: 'Screaming Mapo Tofu', dish_id: 3, instruction: 'Add a ton of spices!'},
        {name: 'Dancing Lobster Roll', dish_id: 5, instruction: 'Get some fiesty lobster from Amagansett first, then we will discuss'}
      ]);
    });
};
