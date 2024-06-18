import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'blogbeatadmin',
  password: 'Brooklyn762',
  database: 'blogbeatdb',
};

export default config;
