const exists = false;
exports.up = function(knex) {
  if(exists) {
    return knex.schema.createTable('image_publisher', function(table) {
      table.increments();
      table.string('id_publisher');
      table.binary('image');
    });
  }
};

exports.down = function(knex) {
  return knex.schema.dropTable('image');
};
