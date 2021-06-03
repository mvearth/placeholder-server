import { Knex } from 'knex';

exports.up = function(knex: Knex) {
  knex.schema.createTable('person', function(table) {
    table.string('email').primary();
    table.string('name').notNullable();
    table.string('nickname').unique().notNullable();
    table.string('password').notNullable();
    table.binary('image');
  });
};

exports.down = function(knex: Knex) {
  knex.schema.dropSchemaIfExists('person');
};
