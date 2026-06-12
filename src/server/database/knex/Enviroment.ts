import { Knex } from 'knex'
import path from 'path'

export const development: Knex.Config = { 
  client: 'mysql2',
  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'seeds')
  },
  connection: {
    host: process.env.BD_HOST as string,
    user: process.env.BD_USER as string,
    password: process.env.BD_PASSWORD as string,
    database: process.env.BD_NAME as string,
    ssl: { rejectUnauthorized: false }
  },
}

export const test: Knex.Config = { 
  ...development,
  connection: ':memory:',
}

export const production: Knex.Config = {
  ...development,
  connection: {
    host: process.env.BD_HOST as string,
    user: process.env.BD_USER as string,
    password: process.env.BD_PASSWORD as string,
    database: process.env.BD_NAME as string,
    port: Number(process.env.BD_PORT ?? 3306),
    ssl: { rejectUnauthorized: false }
  }
}