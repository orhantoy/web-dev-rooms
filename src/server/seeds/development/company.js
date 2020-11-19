exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('company').insert([
        { id: 1, name: 'Elastic', menton: 'Orhantoy' },
        { id: 2, name: 'Zendesk', menton: 'Alicia Gonzalez' },
      ]);
    });
};
