
exports.up = function(knex) {
  return knex.schema.createTable('image', function(table) {
    table.increments();
    table.string('id_publisher');
    table.binary('image');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('image');
};
