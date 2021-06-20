
exports.up = function(knex) {
  return knex.schema.createTable('follow', function(table) {
    table.string('email_follower').unique().notNullable();
    table.string('email_following').unique().notNullable();

    table.foreign('email_follower').references('email').inTable('person');
    table.foreign('email_following').references('email').inTable('person');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('follow');
};
