exports.up = function(knex) {
  return knex.schema.createTable('events_students', (table) => {
    table.increments();
    table.string('event_id').notNullable();
    table.string('student_id').notNullable();
    table
      .datetime('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .datetime('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events_students');
};
