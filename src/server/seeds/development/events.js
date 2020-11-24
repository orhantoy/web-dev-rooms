exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          venue: 'Copenhagen',
          description: 'Javascript studygroup',
          created_by: 3,
        },
      ]);
    });
};
