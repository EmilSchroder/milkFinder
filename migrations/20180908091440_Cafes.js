exports.up = function(knex, Promise) {
  return knex.schema.createTable('Cafes', table => {
    table.increments('id').primary;
    table.string('cafe_name');
    table.numeric('latitude');
    table.numeric('longitude');
    table.string('website');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Cafes')
}
