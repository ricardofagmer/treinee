module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'treinee',
      user: 'root',
      password: 'lida@09',
      port: '3306',
      charset: 'utf8'
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
