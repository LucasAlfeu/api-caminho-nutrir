import { Knex } from 'knex'
import path from 'path'

// export const development: Knex.Config = { 
//   client: 'sqlite3',
//   useNullAsDefault: true,
//   connection: {
//     filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
//   },
//   migrations: {
//     directory: path.resolve(__dirname, '..', 'migrations')
//   },
//   seeds: {
//     directory: path.resolve(__dirname, '..', 'seeds')
//   },
//   pool: {
//     afterCreate: (connection: any, done: Function) => {
//       connection.run('PRAGMA foreign_keys = ON')
//       done();
//     }
//   }
// }

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
  }
}