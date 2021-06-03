import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable('follow', function (table) {
      table.string('email_follower').notNullable();
      table.string('email_following').notNullable();
      table.unique(['email_follower', 'email_following']);
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropSchemaIfExists('follow');
}

