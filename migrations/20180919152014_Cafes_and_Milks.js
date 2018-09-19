exports.up = function(knex, Promise) {
  return knex.schema.createTable('Cafes_and_Milks', table => {
    table.integer('Cafe_id');
    table.integer('Milk_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Cafes_and_Milks');
};
