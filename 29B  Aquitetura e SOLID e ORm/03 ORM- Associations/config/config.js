require('dotenv').config()

module.exports = {
  "development" : {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": 'associations',
    "host": process.env.DB_HOST,
    "dialect": 'mysql',
  },
  "test" : {
    "username": "root",
    "password": "123456789",
    "database": "orm_assoc_test_dbt",
    "host": "127.0.0.1",
    "dialect": "mysql",
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    "logging": false
  },
  "production" :{
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
