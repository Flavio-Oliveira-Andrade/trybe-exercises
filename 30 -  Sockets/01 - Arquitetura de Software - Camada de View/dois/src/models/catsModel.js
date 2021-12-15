const connection = require('./connection');

const getAll = async () => {
 const [cats] =  await connection.execute('SELECT name, age FROM cats_api.cats');

 return cats
}

module.exports = {
  getAll,
}