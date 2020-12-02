exports.up = function (knex) {
  return knex.schema.table('events', function (t) {
    t.renameColumn('max_Participants', 'maxParticipants');
  });
};

exports.down = function (knex) {
  return knex.schema.table('events', function (t) {
    t.renameColumn('max_Participants', 'maxParticipants');
  });
};
