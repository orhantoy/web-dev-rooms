exports.up = function(knex) {
  // Create company table
  return knex.schema.createTable('organizations', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.datetime('created_at');
    table.datetime('updated_at');
    table.datetime('deleted_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('organizations');
};
