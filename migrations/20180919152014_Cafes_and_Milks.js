exports.up = function(knex, Promise) {
  return knex.schema.createTable('Cafes_and_Milks', table => {
    table.increments('id').primary
    table.integer('cafe_id');
    table.integer('milk_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Cafes_and_Milks');
};
