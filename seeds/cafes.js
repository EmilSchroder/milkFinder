
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Cafes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cafes').insert([
        {id: 4001, latitude:-41.2936 ,longitude:174.7764 ,cafe_name: 'Milk Crate', website: 'www.milkcrate.co.nz'},
        {id: 4002, latitude:-41.2943,longitude:174.7841,cafe_name: 'Deluxe Espresso Bar', website: 'www.facebook.com/deluxecafewgtn'}
      ]);
    });
};
