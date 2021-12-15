/*
Camada Model
responsavel por armazenar deletar atualizar

Conectar Nossa API com o MySQL
Conectar Nossa API com MongoDB
*/

// userModel.js

const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}


// cli.js

const readline = require('readline-sync');
const userModel = require('./userModel');

async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);

    if (!user) {
        return console.log('Usuário não encontrado');
    }

    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}

start();

// getUserMiddleware.js

const userModel = require('./userModel');

function getUserMiddleware (req, res, next) {
    const { username } = req.body;

    const user = await useModel.getUser(username);

    if (!user) {
        return res.status(404).json({ message: 'user não encontrado' });
    }

    return res.status(200).json(user);
}


/* criando banco de dados MySQl
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE authors
(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)

VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
    ('J.','R. R.','Tolkien','1892-01-03','britânico'),
    ('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
    ('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
    ('Júlio',NULL,'Verne','1905-03-24','francês');



    CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(90) NOT NULL,
    author_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
    ('A Game of Thrones', 1),
    ('A Clash of Kings', 1),
    ('A Storm of Swords', 1),
    ('The Lord of The Rings - The Fellowship of the Ring', 2),
    ('The Lord of The Rings - The Two Towers', 2),
    ('The Lord of The Rings - The Return of The King', 2),
    ('Foundation', 3);
*/

// index.js

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});

// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senha123',
    database: 'model_example' });

module.exports = connection;


// models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
};
};

// Converte o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name});

// Busca todos os autores do banco.

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
    getAll,
};


// index.js

// const express = require('express');

const Author = require('./models/Author');

// const app = express();

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });



// models/Authors.js
// const connection = require('./connection');

// Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;
//
// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');
//
// return {
//  id,
//  firstName,
//  middleName,
//  lastName,
//  name: fullName,
// };
// };

// Serializa o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//  id: authorData.id,
//  firstName: authorData.first_name,
//  middleName: authorData.middle_name,
//  lastName: authorData.last_name,
// });

// Busca todos os autores do banco.

// const getAll = async () => {
//  const [authors] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  );
//  return authors.map(serialize).map(getNewAuthor);
// };

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/

const findById = async (id) => {
    // Repare que substituímos o id por `?` na query.
    // Depois, ao executá-la, informamos um array com o id para o método `execute`.
    // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
    const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
    const [ authorData ] = await connection.execute(query, [id]);

    if (authorData.length === 0) return null;

    // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
    const { firstName, middleName, lastName } = serialize(authorData[0]);

    return getNewAuthor({
        id,
        firstName,
        middleName,
        lastName});
    };

    // module.exports = {
    // getAll,
    // findById,
    // };

    // index.js

// const express = require('express');

// const Author = require('./models/Author');

// const app = express();

// app.get('/authors', async (_req, res) => {
// const authors = await Author.getAll();
//
// res.status(200).json(authors);
// });

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;

    const author = await Author.findById(id);

    if (!author) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(author);
  });

  // const PORT = process.env.PORT || 3000;

  // app.listen(PORT, () => {
  //  console.log(`Ouvindo a porta ${PORT}`);
  // });


  // models/Authors.js

// const connection = require('./connection');

// Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;

// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');

// return {
//  id,
//  firstName,
//  middleName,
//  lastName,
//  name: fullName,
// };
// };

// Serializa o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//  id: authorData.id,
//  firstName: authorData.first_name,
//  middleName: authorData.middle_name,
//  lastName: authorData.last_name,
// });

// Busca todos os autores do banco.

// const getAll = async () => {
//  const [authors] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  );
//  return authors.map(serialize).map(getNewAuthor);
// };

//
// Busca um autor específico, a partir do seu ID
// @param {String} id ID do autor a ser recuperado
//
// const findById = async (id) => {
// const [
//  authorData,
//  ] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?',
//      [id],
//  );

// if (authorData.length === 0) return null;

// const { firstName, middleName, lastName } = authorData.map(serialize)[0];

// return getNewAuthor({ id, firstName, middleName, lastName });
// };

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
);

// module.exports = {
// getAll,
// findById,
// isValid,
// create,
// };


// const express = require('express');
const bodyParser = require('body-parser');

// const Author = require('./models/Author');

// const app = express();

app.use(bodyParser.json());

// app.get('/authors', async (\_req, res) => {
//  const authors = await Author.getAll();
//
//  res.status(200).json(author);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;

//   const author = await Author.findById(id);

//   if (!author) return res.status(404).json({ message: 'Not found' });

//   res.status(200).json(author);
// });

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });

