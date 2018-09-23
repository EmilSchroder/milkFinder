exports.up = function(knex, Promise) {
  return knex.schema.createTable('Milks', table => {
    table.increments('id').primary;
    table.string('Milk_type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Milks');
};
