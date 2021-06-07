
exports.up = function(knex) {
  return knex.schema.createTable('person', function(table) {
    table.increments();
    table.string('email').unique().notNullable();
    table.string('name').notNullable();
    table.string('nickname').unique().notNullable();
    table.string('password').notNullable();
    table.binary('photo');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('person');
};
