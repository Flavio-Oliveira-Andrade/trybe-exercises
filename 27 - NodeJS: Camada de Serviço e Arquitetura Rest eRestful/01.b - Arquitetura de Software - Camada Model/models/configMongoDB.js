const mongoCliente = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://localhost27017';
const DB_NAME = 'dataFlights';

module.exports = () => mongoCliente.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
   .then((connection) => connection.db(DB_NAME))
   .catch((error) => {
    console.log('sem conexao')
    process.exit(1);
  });

