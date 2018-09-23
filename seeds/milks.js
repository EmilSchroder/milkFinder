
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Milks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Milks').insert([
        {id: 2001, milk_type: 'Cow'},
        {id: 2002, milk_type: 'Soy'},
        {id: 2003, milk_type: 'Almond'},
        {id: 2004, milk_type: 'Coconut'},
        {id: 2005, milk_type: 'Rice'},
        {id: 2006, milk_type: 'Oat'}
      ]);
    });
};
