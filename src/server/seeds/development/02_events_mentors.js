exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events_mentors')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('events_mentors').insert([
        {
          id: 1,
          event_id: 3,
          mentor_id: 2,
          status: true,
          created_at: '2020-05-10 00:00:00',
          updated_at: '2020-05-10 00:00:00',
        },
      ]);
    });
};
