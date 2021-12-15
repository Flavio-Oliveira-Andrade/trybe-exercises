// userModel.js

const db = require('./'); // Arquivo "ficticio" que representa a conexao com o banco de dados

async function getUser(){
  return db.findOne({ username })
  .then(result => result || null );
}

module.exports = getUser;