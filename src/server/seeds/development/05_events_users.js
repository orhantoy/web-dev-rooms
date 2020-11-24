exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events_users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('events_users').insert([
        {
          id: 1,
          usersId: ' 2',
          status: 'coming',
          comment: 'well coming ',
          createdAt: '2020-05-10 00:00:00',
          updatedAt: '2020-05-07 00:00:00',
          deletedAt: '2020-05-08 00:00:00',
        },
      ]);
    });
};
