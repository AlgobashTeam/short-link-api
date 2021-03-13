import knex from 'knex';
import knexFile from '../knexfile';

const K = knex(knexFile.development);

export default K;
