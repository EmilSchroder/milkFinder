
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Cafes', table =>{
    table.increments('id').primary
    table.string('cafe')
    table.float('latitude')
    table.float('longitude')
    table.boolean('cow')
    table.boolean('soy')
    table.boolean('almond')
    table.boolean('coconut')
    table.boolean('rice')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Cafes')
};
