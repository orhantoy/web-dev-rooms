exports.up = function (knex) {
  return knex.schema.createTable('events_mentors', (table) => {
    table.increments();
    table
      .Integer('event_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('events')
      .notNullable();
    table
      .Integer('mentor_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('events_users')
      .notNullable();
    table.boolean('status').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('events_mentors');
};
