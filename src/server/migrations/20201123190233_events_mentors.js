exports.up = function(knex) {
  return knex.schema.createTable('events_mentors', (table) => {
    table.increments();
    table.integer('event_id').notNullable();
    table.integer('mentor_id').notNullable();
    table.boolean('status').notNullable();
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
  return knex.schema.dropTable('events_mentors');
};
