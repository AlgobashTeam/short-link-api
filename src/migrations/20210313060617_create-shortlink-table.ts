import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('shortlink', (table) => {
    table.increments('id').primary();
    table.string('url').notNullable();
    table.string('label');
    table.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('shortlink');
}