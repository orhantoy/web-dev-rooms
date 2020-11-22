exports.up = function(knex) {
  // Create company table
  return knex.schema.createTable('company', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('mentor').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('company');
};
