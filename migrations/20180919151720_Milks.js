exports.up = function(knex, Promise) {
  return knex.schema.createTable('Milks', table => {
    table.increments('id').primary;
    table.boolean('Cow');
    table.boolean('Soy');
    table.boolean('Almond');
    table.boolean('Coconut');
    table.boolean('Oat');
    table.boolean('Rice');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Milks');
};
