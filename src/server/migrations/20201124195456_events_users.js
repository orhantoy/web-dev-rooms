exports.up = function(knex) {
  return knex.schema.createTable('events_users', (table) => {
    table.increments();
    table.string('usersId').notNullable();
    table.string('status').notNullable();
    table.string('comment').notNullable();
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
  return knex.schema.dropTable('events_users');
};
