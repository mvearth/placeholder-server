
exports.up = function(knex) {
  return knex.schema.createTable('follow', function(table) {
    table.string('email_follower').unique().notNullable();
    table.string('email_following').unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('follow');
};
