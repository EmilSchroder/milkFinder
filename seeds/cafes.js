
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Cafes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cafes').insert([
        {id: 1, latitude:-41.2936 ,longitude:174.7764 ,cafe: 'Milk Crate', cow: true, soy: true, almond: true, coconut:false, rice:false},
        {id: 2, latitude:-41.2943,longitude:174.7841,cafe: 'Deluxe Espresso Bar', cow: true, soy: true, almond: true, coconut:true, rice:false},
        {id: 3, latitude:-41.3248 ,longitude:174.8214 ,cafe: 'Gipsy Kitchen', cow: true, soy: true, almond: true, coconut:false, rice:true},
        {id: 4, latitude:-41.2922 ,longitude:174.7747 ,cafe: 'Starta', cow: true, soy: true, almond: false, coconut:false, rice:false},
        {id: 5, latitude:-41.2930 ,longitude:174.7771,cafe: 'Leeds Street Bakery', cow: true, soy: true, almond: true, coconut:false, rice:false},
        {id: 6, latitude:-41.2911,longitude:174.7739 ,cafe: 'Goldmine by Lamason', cow: true, soy: true, almond: true, coconut:true, rice:true},
        {id: 7, latitude:-41.2943,longitude:174.7854 ,cafe: 'Tomboy', cow: true, soy: true, almond: true, coconut:true, rice:false}
      ]);
    });
};
