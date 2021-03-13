const connection = {
  host: process.env.DATABASE_HOST,
  database: 'ShortLinkDB',
  user: 'ThisIsShortLinkUser',
  password: 'ThisIsPassword123',
};

const client = 'mysql2';

export default {
  development: {
    client,
    connection,
    pool: {
      min: 0,
      max: 20,
    },
    migration: {
      tableName: 'knex_migrations',
    },
  },
  staging: {
    client,
    connection,
    pool: {
      min: 0,
      max: 20,
    },
    migration: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client,
    connection,
    pool: {
      min: 0,
      max: 20,
    },
    migration: {
      tableName: 'knex_migrations',
    },
  },
};
