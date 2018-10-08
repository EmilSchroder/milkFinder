
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Cafes_and_Milks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cafes_and_Milks').insert([
        {id: 8001, cafe_id: '4001', milk_id: '2001'},
        {id: 8002, cafe_id: '4001', milk_id: '2002'},
        {id: 8003, cafe_id: '4001', milk_id: '2003'},
        {id: 8004, cafe_id: '4002', milk_id: '2001'},
        {id: 8005, cafe_id: '4002', milk_id: '2002'},
        {id: 8006, cafe_id: '4002', milk_id: '2003'},
        {id: 8007, cafe_id: '4002', milk_id: '2004'}
      ]);
    });
};
