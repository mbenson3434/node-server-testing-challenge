
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('smurfs').del()
    .then(function () {
      // Inserts seed entries
      return knex('smurfs').insert([
        { name: 'Smurfette'},
        { name: 'Papa Smurf'},
        { name: 'Brainy Smurf'}
      ]);
    });
};
