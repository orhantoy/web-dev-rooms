exports.up = function(knex) {
  return knex.schema.createTable('eventsStudents', (table) => {
    table.increments();
    table.string('eventId').notNullable();
    table.string('studentId').notNullable();
    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .datetime('updatedAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.datetime('deletedAt');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('eventsStudents');
};
