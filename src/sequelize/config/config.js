/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config();

export const development = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DATABASE_DIALECT || 'mysql',
  },
};
