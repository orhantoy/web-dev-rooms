// seed file for events students
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('eventsStudents')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('eventsStudents').insert([
        {
          id: 1,
          eventId: '2',
          studentId: '3',
          createdAt: '2020-05-10 00:00:00',
          updatedAt: '2020-05-10 00:00:00',
          deletedAt: '2020-05-10 00:00:00',
        },
        {
          id: 2,
          eventId: '6',
          studentId: '4',
          createdAt: '2020-05-10 00:00:00',
          updatedAt: '2020-05-10 00:00:00',
          deletedAt: '2020-05-10 00:00:00',
        },
      ]);
    });
};
