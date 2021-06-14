
exports.up = function(knex) {
  return knex.schema.createTable('publisher', function(table) {
    table.increments();
    table.string('descritpion');
    table.enum('suggestion_type', ['BOOK', 'SONG','MOVIE_SERIE', 'OTHER']);
    table.string('title');
    table.string('author');
    table.string('email');
    table.string('album');
    table.string('artist');
    table.string('release_date');
    table.string('publisher');
    table.string('created_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('publisher');
};
