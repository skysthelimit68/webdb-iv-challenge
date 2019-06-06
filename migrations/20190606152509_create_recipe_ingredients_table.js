
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', tbl => {
        tbl
        .increments();
       
        tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

        tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

        tbl
        .string('quantity', 128)
        .notNullable();
    } )
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');

};
