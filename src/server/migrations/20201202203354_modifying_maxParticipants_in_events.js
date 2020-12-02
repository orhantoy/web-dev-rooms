exports.up = function (knex) {
  return knex.schema.table('events', function (t) {
    t.renameColumn('maxParticipants', 'max_Participants');
  });
};

exports.down = function (knex) {
  return knex.schema.table('events', function (t) {
    t.renameColumn('maxParticipants', 'max_Participants');
  });
};
