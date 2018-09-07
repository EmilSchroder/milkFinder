
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Cafes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cafes').insert([
        {id: 1, cafe: 'Milk Crate', cow: true, soy: true, almond: true, coconut:false, rice:false},
        {id: 2, cafe: 'Deluxe Espresso Bar', cow: true, soy: true, almond: true, coconut:true, rice:false},
        {id: 3, cafe: 'Gipsy Kitchen', cow: true, soy: true, almond: true, coconut:false, rice:true},
        {id: 4, cafe: 'Starta', cow: true, soy: true, almond: false, coconut:false, rice:false},
        {id: 5, cafe: 'Leeds Street Bakery', cow: true, soy: true, almond: true, coconut:false, rice:false},
        {id: 6, cafe: 'Goldmine by Lamason', cow: true, soy: true, almond: true, coconut:false, rice:false},
        {id: 7, cafe: 'Tomboy', cow: true, soy: true, almond: true, coconut:true, rice:false}
      ]);
    });
};
