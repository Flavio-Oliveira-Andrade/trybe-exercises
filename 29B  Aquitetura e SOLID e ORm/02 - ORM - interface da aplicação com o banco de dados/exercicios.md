Instruções para realização dos exercícios
Neste exercício vamos criar uma API simples, onde será possível criar um livro ou listar todos os livros da base de dados. Vamos utilizar MySQL como banco de dados e Sequelize como nosso ORM.
Detalhes do projeto
Crie uma nova pasta e inicie um projeto com Express:
Copiar
$ npm init -y

$ npm install express body-parser
Crie o arquivo index.js ;
Instale o pacote sequelize e o mysql2 :
Copiar
$ npm install sequelize mysql2
Instale o pacote sequelize-cli como uma dependência de desenvolvimento:
Copiar
$ npm install --save-dev sequelize-cli
Use o Sequelize-CLI para iniciar a configuração do ORM:
Copiar
$ npx sequelize-cli init
Esse comando irá gerar as pastas models , seeder , config e migration dentro do seu projeto.
Agora, aproveitando a CLI, vamos criar nossa primeira migration para books usando:
Copiar
$ npx sequelize migration:generate --name create-books
Dentro do up , crie uma tabela Books com os atributos: id (nossa chave primária), title (string e não pode ser nulo), author (string e não pode ser nulo), pageQuantity (integer e pode ser nulo) e createdAt (date e não pode ser nulo).
Dentro do down , remova a tabela Books .
Crie seu banco de dados e coloque todas as configurações dentro do arquivo config/config.js .
Agora você pode rodar as migrations (seu banco precisa estar configurado certinho para isso funcionar):
Copiar
$ npx sequelize db:migrate
Crie um arquivo Book.js dentro da pasta models e crie seu modelo lá dentro, respeitando os atributos que definimos nas migrations.
Dica - Preste atenção em como o arquivo models/index.js é definido, ele vai te ajudar a importar seus modelos mais facilmente.

Agora é sua vez!
Exercício : Crie os controllers do seu projeto com as seguintes rotas:
GET /books - lista todos os livros;
GET /book/:id - pega o livro com o id especificado;
POST /book - cria um novo livro;
POST /book/:id - sobrescreve o livro com ID selecionado;
DELETE /book/:id - deleta um livro;
Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.
Dica : Para testar suas requisições você pode utilizar o Postman ou o Insomnia .

Bônus
Crie um seeder usando o Sequelize-CLI , populando a sua base com pelo menos um livro;
Crie um endpoint para buscar o livro por author (pode adaptar algum que já exista);
Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;
Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado.
Escreva testes para os models criados;
Escreva testes para os controllers do seu projeto isolando a camada de models .



Bônus
Crie um seeder usando o Sequelize-CLI , populando a sua base com pelo menos um livro;
Crie um endpoint para buscar o livro por author (pode adaptar algum que já exista);
Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;
Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado.
Escreva testes para os models criados;
Escreva testes para os controllers do seu projeto isolando a camada de models .

Gabarito dos exercícios
A seguir encontra-se uma sugestão de solução para o exercício proposto.
Solução
index.js
Copiar
const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./controllers/booksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', booksController.getAll);
app.get('/book/:id', booksController.getById);
app.post('/book', booksController.createNew);
app.post('/book/:id', booksController.updateById);
app.delete('/book/:id', booksController.deleteById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
controllers/booksController.js
Copiar
const { Book } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createNew = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    res.status(201);
    res.json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateById = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    res.status(200);
    res.json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();

    res.status(200);
    res.json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  deleteById,
  getAll,
  getById,
  updateById,
  createNew,
};
migrations/nome_da_migration.js
Copiar
'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Books');
  },
};
models/Book.js
Copiar
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return Book;
};
