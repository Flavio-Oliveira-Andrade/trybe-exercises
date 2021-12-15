/*
Model com MySQL

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


const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = {
  getAll,
};


const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = {
  getAll,
};


const express = require('express');

// const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

/* ... */

app.get('/books', async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

/* ... */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});





/* ... */

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

/* ... */

// module.exports = {
  // getAll,
    getByAuthorId,
// };



// 5
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});


const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

// module.exports = {
// getAll,
// getByAuthorId,
    getById,
// };




app.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' })

  res.status(200).json(book);
});






const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
[title, authorId],
);

module.exports = {
  /* ... */
  isValid,
  create,
};



app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '});
  });


  /* ...
  Model com MongoDB

  db.books.insertMany([
    { title: 'A Game of Thrones', author_id: 1 },
    { title: 'A Clash of Kings', author_id: 1 },
    { title: 'A Storm of Swords', author_id: 1 },
    { title: 'The Lord of The Rings - The Fellowship of the Ring', author_id: 2 },
    { title: 'The Lord of The Rings - The Two Towers', author_id: 2 },
    { title: 'The Lord of The Rings - The Return of The King', author_id: 2 },
    { title: 'Foundation', author_id: 3 },
]);

  */


// ...

const getAll = () => connection()
    .then((db) => db.collection('books').find({}).toArray());

// ...


// ...

const getByAuthorId = (authorId) => connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());

// ...


// const connection = require('./connection');
const { ObjectId } = require('mongodb');
// ...

const findById = async (id) => {
const book = await connection()
  .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!book) return null;

  return book;
}

// module.exports = {
  // getAll,
  // getByAuthorId,
  //  findById,
// };


  // const connection = require('./connection');
  // const { ObjectId } = require('mongodb');
  //const Author = require('./Author');

  // ...

  const isValid = async (title, authorId) => {
    if (!title || typeof title !== 'string') return false;
    // Aqui a única alteração é que `authorId` deve ser uma string de 24 caracteres, e não mais um número
    if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

    return true;
  }

// module.exports = {
  // getAll,
  // getByAuthorId,
  // findById,
  //  isValid,
// };

// ...

const create = (title, authorId) => connection()
  .then((db) => db.collection('books').insertOne({ title, authorId }));

// module.exports = {
// getAll,
// getByAuthorId,
// findById,
// isValid,
//    create,
// };


/*
{
    "firstName": "Calebe",
    "lastName": "Junior",
    "email": "calebe.junior@gmail.com",
    "password": "d496d5ea2442"
   }

   {
    "error": true,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
   }

   {
    "id": "1837983326d5cd7ad6da5707a2bd11c5",
    "firstName": "Calebe",
    "lastName": "Junior",
    "email": "calebe.junior@gmail.com"
   }

   mkdir users-manager
   cd users-manager
   npm init -y

Agora, podemos instalar as dependências:
Copiar

   npm i express mongodb express-rescue body-parser joi



   Depois, criamos o arquivo de conexão com o banco de dados,
   lembrando de utilizar o padrão singleton para armazenar e reutilizar a conexão
*/

    // users-manager/models/connection.js

    // Importamos o driver do MongoDB.
    const { MongoClient } = require('mongodb');

    // Armazenamos as configurações de conexão em uma constante para
    // facilitar a leitura do código.
    const OPTIONS = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // A string de conexão com o banco também é armazenada em uma constante
    const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

    // Criamos uma variável para realizar "cache" da conexão
    let db = null;

    // Método que cria uma nova conexão ou retorna a existente
    const connection = () =>
    // Usamos um ternário para verificar se já temos uma conexão
    // e decidir o que retornar
    (db
      // Se tivermos, a colocamos dentro de uma Promise já resolvida, utilizando `Promise.resolve`
      ? Promise.resolve(db)
      // Caso ainda não tenhamos, criamos uma nova conexão
      : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
      // Uma vez com a conexão aberta, a armazenamos na variável `db`
      db = conn.db('model_example');
      // Definimos `db` como o resultado da Promise, que é retornada por `connection()`
      return db;
    }));

    module.exports = connection;

       // users-manager/models/User.js

   // Começamos importando a conexão com o banco
   const connection = require('./connection');

   // Função que remove dos documentos da collection 'users', os campos indesejados
   function formatUser(document) {
        const {
            // Extraímos as propriedades `_id` e `password`
            _id,
            password,
            // Utilizamos o operador _rest_ (`...`) para guardar o resto (😉) das propriedades
            // numa constante chamada `user`.
            ...user
        } = document;

        // Criamos um novo objeto contento os campos já formatados
        const formattedResult = {
            // O campo `id` recebe o valor de `_id`
            id: _id,
            // Utilizamos o operador _spread_ (`...`) para adicionar o resto das propriedades que tínhamos
            // gravado em `user`
            ...user,
        };

        // Retornamos o objeto com os campos formatados
        return formattedResult;
   }

    // Criamos um método para verificar se os dados do usuário são válidos
    function isValid({ firstName, lastName, email, password }) {
        // Regex que valida strings de 6 ou mais caracteres alfanuméricos
        const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
        // Criamos um array para poder verificar com facilidade cada campo
        const fields = [firstName, lastName, email, password];

        // Se algum dos itens do array for `unfined`, `null`, ou uma string vazia, retornamos `false`
        if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
            return false;
        }

        // Por último, só precisamos garantir que `password` passa no regex.
        // Caso passe, retornaremos `true`. Caso constrário, retornaremos `false`
        return PASSWORD_REGEX.test(password);
    }

    // Função responsável por criar o usuário no banco de dados
    function create({ firstName, lastName, email, password }) {
        // Utilizamos o `insertOne` para inserir o usuário na collection `users`
        return connection().then((db) => db
            .collection('users')
            .insertOne({ firstName, lastName, email, password }))
        // Depois de criar o usuário, obtermos o ID gerado pelo banco e retornamos num objeto juntamente
        // com os demais dados do usuário recém-criado
            .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
    }

    module.exports = {
        isValid,
        create,
    };


        // users-manager/index.js

    // Importamos as libs que vamos usar
    const express = require('express');
    const bodyParser = require('body-parser');

    // Criamos a aplicação do express
    const app = express();

    // Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON
    app.use(bodyParser.json());

    /*
    - Nossos midlewares de cada rota vêm aqui

    */

    // Definimos a porta
    const PORT = 3000;

    // Iniciamos o servidor
    app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });


    // 6
        // users-manager/middlewares/createUser.js

        const Joi = require('joi');
        const rescue = require('express-rescue');
        const UserModel = require('../models/User');

        // Primeiro definimos qual o schema da nossa requisição
        const createUserSchema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        }).messages({
          /*
            'any.required': 'O campo {
    {: id="label" }} é obrigatório',
            'string.min': 'O campo {
    {: id="label" }} deve ter, pelo menos, {
    {: id="limit" }} caracteres',
            'string.email': 'Informe um email válido no campo {
    {: id="label" }}',
        });
        */


         Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
        module.exports = [
          (req, res, next) => {
            // Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema
            const { error } = createUserSchema.validate(req.body);

            // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
            if (error) return next(error);

                // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
                next();

            },
            rescue(async (req, res, next) => {
            // Extraimos os dados da requisição
            const { firstName, lastName, email, password } = req.body;

            // Varificamos se os dados são válidos
            if (!UserModel.isValid({ firstName, lastName, email, password })) {
                // Caso os dados não sejam válidos, nós criamos um novo erro
                const err = new Error('Invalid data');
                // Atribuímos o status `400 Bad Request` ao erro
                err.status = 400;
                // Iniciamos o fluxo e de erro e encerramos a execução do middleware.
                return next(err);
            }

            // Caso os dados sejam válidos, pedimos pro model criar o usuário
            const newUser = await UserModel.create({ firstName, lastName, email, password });

            // Com o usuário criado, devolvemos o status 201 Created, a mensagem informando sucesso na operação
            res.status(201).json(newUser);
            }),
        ];


            // users-manager/middlewares/index.js
    module.exports.createUser = require('./createUser');

        // users-manager/index.js

        const express = require('express');
        const bodyParser = require('body-parser');
        const middlewares = require('./middlewares');

        // Criamos a aplicação do express
        const app = express();

        // Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON
        app.use(bodyParser.json());

        // Dizemos para o express que toda requisição enviada para `POST /user` deve ser tratada pelo middleware `createUser`
        app.post('/user', middlewares.createUser);

        // Definimos a porta
        const PORT = 3000;




     users-manager/middlewares/error.js
    module.exports = (err, req, res, _next) => {
      // Caso o erro possua uma propriedade `status`, devolvemos esse status, juntamente com a mensagem do erro
      if (err.status) {
          return res.status(err.stauts).json({ message: err.message });
      }

      // Caso o erro seja um erro do joi
      if (err.isJoi) {
          // Devolvemos o status 400 Bad Request com a mensagem de erro que o Joi gerou.
          return res.status(400).json({ message: err.details[0].message });
      }

      // Caso o erro não seja de nenhum dos dois tipos acima, ele é um erro desconhecido

      // Imprimimos o erro no console para que possamos debugá-lo
      console.error(err);
      // Retornamos o status 500 Internal Server Error, e uma mensagem avisando que houve um erro.
      res.status(500).json({ message: 'Erro interno do servidor' });
  };




     users-manager/models/User.js



    function findAll() {
      return connection()
          // Utilizamos o `find` para buscar todos os documentos da collection `users`.
          // O `toArray` aqui é importante pois ele busca **todos** os registros, e transforma o resultado
          // em um array, como o próprio nome diz 😄
          .then((db) => db.collection('users').find().toArray())
          .then((results) => results.map(formatUser));
  }

  module.exports = {
      isValid,
      create,
      findAll,
  };



  /*

      // users-manager/models/User.js

    /* ... */

    function findAll() {
      return connection()
          // Utilizamos o `find` para buscar todos os documentos da collection `users`.
          // O `toArray` aqui é importante pois ele busca **todos** os registros, e transforma o resultado
          // em um array, como o próprio nome diz 😄
          .then((db) => db.collection('users').find().toArray())
          .then((results) => results.map(formatUser));
  }

  module.exports = {
      isValid,
      create,
      findAll,
  };


  Crie o endpoint GET /user
O endpoint sempre deve retornar um array;
Quando não houver nenhum usuário cadastrado, retorne um array vazio;
Deve sempre retornar o status 200 OK .
Resolução
Começamos criando uma função findAll no model User e exportando essa função:
Copiar
    // users-manager/models/User.js

    /* ... */

    function findAll() {
        return connection()
            // Utilizamos o `find` para buscar todos os documentos da collection `users`.
            // O `toArray` aqui é importante pois ele busca **todos** os registros, e transforma o resultado
            // em um array, como o próprio nome diz 😄
            .then((db) => db.collection('users').find().toArray())
            .then((results) => results.map(formatUser));
    }

    module.exports = {
        isValid,
        create,
        findAll,
    };
Agora, precisamos criar o middleware que vai tratar as requests para GET /user :
Copiar
    // users-manager/middlewares/getAllUsers.js

    const rescue = require('express-rescue');
    const UserModel = require('../models/User');

    // Pedimos para o model buscar todos os usuários
    module.exports = rescue(async (_req, res) => {
        const allUsers = await UserModel.findAll()
        res.status(200).json(allUsers);
    });

    // Como o `find` sempre retorna um Array, não precisamos nos preocupar:
    // caso nenhum resultado seja encontrado, o próprio MongoDB retornará um array vazio
    res.status(200).json(users);
Copiar
Não podemos esquecer de adicionar o novo middleware ao `index.js` da pasta `middlewares`:
Copiar
    // users-manager/middlewares/index.js
    module.exports.createUser = require('./createUser');
    module.exports.getAllUsers = require('./getAllUsers');
    module.exports.error = require('./error');
Por fim, adicione o novo middleware ao app do express
Copiar
    // users-manager/index.js
    /* ... */
    app.use(bodyParser.json());

    app.post('/user', middlewares.createUser);
    app.get('/user', middlewares.getAllUsers);

    app.use(middlewares.error);

    /* ... */
Exercício 3
Crie o endpoint GET /user/:id
O endpoint deve retornar o usuário cujo id seja igual ao parâmetro id informado na URL. O status deve ser 200 OK .
Caso um usuário com o id informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status 404 Not Found .
Copiar
    {
        "error": true,
        "message": "Usuário não encontrado"
    }
Resolução
Começamos novamente pelo model, criando o método findById :
Copiar
    // users-manager/models/User.js

    // Vamos utilizar o ObjectId para validar e converter o id recebido como parâmetro mais pra frente.
    const { ObjectId } = require('mongodb');

    /* ... */

    async function findById(id) {
        // Verificamos que o id que recebemos é válido
        if (!ObjectId.isValid(id)) {
            // Caso não seja um id válido, retornamos `null`
            return null;
        }

        // Buscamos o usuário no banco
        const user = await connection()
            // É importante lembrar de converter o parâmetro `id` para um `ObjectId` do MongoDB
            // utilizando `new ObjectId(id)`.
            .then((db) => db.collection('users').findOne(new ObjectId(id)));

        // Se nenhum usuário for encontrado, retornamos `null`
        if (!user) return null;

        // Caso encontremos um usuário retornamos seus dados formatados
        return formatUser(user);
    }

    module.exports = {
        isValid,
        create,
        findAll,
        findById,
    };
Depois, precisamos criar nosso middleware. Crie o arquivo users-manager/middlewares/findUserById.js :
Copiar
    // users-manager/middlewares/findUserById.js

    const rescue = require('express-rescue');
    const User = require('../models/User');

    module.exports = rescue(async (req, res) => {
        // Extraímos o ID do dos parâmetros da rota
        const { id } = req.params;

        // Pedimos para o model buscar o usuário
        const user = await User.findById(id);

        // Caso nenhum usuário seja encontrado
        if (!user) {
            // Retornamos o status 404 Not Found e uma mensagem de erro
            return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
        }

        // Caso o usuário exista, retornamos o status 200 OK e o usuário
        return res.status(200).json(user);
    });
Copiar
E adicione-o ao index.js dos middlewares:
Copiar
    // users-manager/middlewares/index.js

    module.exports.createUser = require('./createUser');
    module.exports.getAllUsers = require('./getAllUsers');
    module.exports.findUserById = require('./findUserById');
    module.exports.error = require('./error');
Por último, adicionamos o middleware à nossa aplicação
Copiar
    // users-manager/index.js

    /* ... */

    app.use(bodyParser.json());

    app.post('/user', middlewares.createUser);
    app.get('/user', middlewares.getAllUsers);
    app.get('/user/:id', middlewares.findUserById);

    app.use(middlewares.error);

    /* ... */
Exercício 4
Crie o endpoint PUT /user/:id
O endpoint deve receber, no corpo da request, os seguintes dados, em JSON:
Copiar
    {
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com",
        "password": "d496d5ea2442"
    }
Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
Copiar
    {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo id foi especificado na URL.
Depois de alterar os dados do usuário no banco, retorne os novos dados com o status 200 OK , no seguinte formato:
Copiar
    {
        "id": "1837983326d5cd7ad6da5707a2bd11c5",
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com"
    }
Caso o usuário em questão não exista, retorne o status 404 Not Found e os seguintes dados em JSON no corpo da resposta:
Copiar
    {
        "error": true,
        "message": "Usuário não encontrado"
    }
Resolução
Começando pelo model, vamos criar uma função que recebe o id do usuário a ser editado, os novos dados:
Copiar
    // users-manager/models/User.js

    /* ... */

    async function updateUser(id, { firstName, lastName, email, password }) {
        // Verificamos se o id é válido. Se não for, retornamos `null`
        if (!ObjectId.isValid(id)) return null;

        // Atualizamos o documento no banco utilizando os novos dados
        const updatedUser = await connection()
        .then((db) => {
            const userId = new ObjectId(id);
            const newData = { firstName, lastName, email, password };
            // Repare no uso da opção `returnOriginal: false`. Ela faz com que o documento retornado
            // já contenha os dados atualizados.
            return db.collection('users')
                .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false })
                // Obtemos apenas o valor de retorno do banco, que é o usuário atualizado
                .then((result) => result.value);
        });

        // Caso nenhum usuário seja encontrado, retornamos `null`
        if (!updatedUser) return null;

        // Por fim, retornamos o usuário com os campos já formatados
        return formatUser(updatedUser);
    }

    module.exports = {
        isValid,
        create,
        findAll,
        findById,
        updateUser,
    };
Antes de começar a criar o middleware, podemos melhorar um pouco a reutilização de código da nossa arquitetura. Note que, no middleware que cria usuários ( middlewares/createUser.js ), temos dois tipos de validação acontecendo: uma validação realizada pelo Joi, e outra realizada pelo model de usuário. No entanto, ambas validam o mesmo tipo de regra de negócio, e os mesmos campos. Isso quer dizer que podemos juntar as duas. Vamos começar então alterando o método isValid do model de usuários para que ele utilize o schema do Joi para validar os dados:
Copiar
    const Joi = require('joi');
    // Começamos importando a conexão com o banco
    const { ObjectId } = require('mongodb');
    const connection = require('./connection');

    const userSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }).messages({
        'any.required': 'O campo {
{: id="label" }} é obrigatório',
        'string.min': 'O campo {
{: id="label" }} deve ter, pelo menos, {
{: id="limit" }} caracteres',
        'string.email': 'Informe um email válido no campo {
{: id="label" }}',
    });

    // Criamos um método para verificar se os dados do usuário são válidos
    function isValid(userData) {
    return userSchema.validate(userData);
    }

    /* ... */
Agora, precisamos alterar o middleware createUser.js para que ele utilize a nova lógica de validação:
Copiar
    // users-manager/middlewares/createUser.js

    /* Removemos a importação do Joi */
    const rescue = require('express-rescue');
    const UserModel = require('../models/User');

    // Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
    module.exports = [
        (req, res, next) => {
        // Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema
                const { error } = UserModel.isValid(req.body); /* Alteramos de `createUserSchema.validate` para `UserModel.isValid` */

                // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
                if (error) return next(error);

                // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
                next();

        },
        rescue(async (req, res) => {
        // Extraimos os dados da requisição
        const { firstName, lastName, email, password } = req.body;

        /* Removemos a chamada para UserModel.isValid, já que ela já aconteceu no middleware anterior */

        // Caso os dados sejam válidos, pedimos pro model criar o usuário
        const newUser = await UserModel.create({ firstName, lastName, email, password });

        // Com o usuário criado, devolvemos o status 201 Created, a mensagem informando sucesso na operação
        res.status(201).json(newUser);

        }),
    ];
Com nossa lógica de validação compartilhada, fica mais fácil criar o middleware que atualiza usuários:
Copiar
    // users-manager/middlewares/updateUser.js

    const rescue = require('express-rescue');
    const UserModel = require('../models/User');

    module.exports = [
        (req, res, next) => {
                // De forma semelhante ao middleware de criação de usuário, começamos validando os dados da request
                const { error } = UserModel.isValid(req.body);

                // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
                if (error) return next(error);

                // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
                next();
        },
        rescue(async (req, res) => {
                // Extraímos o id do usuário da rota
                const { id } = req.params;
                // Extraímos os dados da request
                const { firstName, lastName, email, password } = req.body;

                // Pedimos que o model altere e nos devolva o usuário alterado
                const updatedUser = await UserModel.updateUser(id, { firstName, lastName, email, password });

                // Caso nenhum usuário seja encontrado
                if (!updatedUser) {
                    // Retornamos o status 404 Not Found e uma mensagem de erro
                    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
                }

                // Caso dê tudo certo, retornamos o status 200 OK e os dados do usuário atualizado
                return res.status(200).json(updatedUser);

        }),
    ];
Copiar
Adicionamos o novo middleware ao index de middlewares:
Copiar
    // users-manager/middlewares/index.js
    module.exports.createUser = require('./createUser');
    module.exports.getAllUsers = require('./getAllUsers');
    module.exports.findUserById = require('./findUserById');
    module.exports.updateUser = require('./updateUser');
    module.exports.error = require('./error');
Por fim, adicione o middleware à aplicação do express:
Copiar
    // users-manager/index.js

    /* ... */

    app.use(bodyParser.json());

    app.post('/user', middlewares.createUser);
    app.get('/user', middlewares.getAllUsers);
    app.get('/user/:id', middlewares.findUserById);
    app.put('/user/:id', middlewares.updateUser);

    app.use(middlewares.error);

    /* ... */
Bônus
Refatore a camada de model da aplicação criada nos exercícios anteriores para acessar o MySQL ao invés do MongoDB .
Utilize o script SQL abaixo para criar o banco e a tabela que você precisará utilizar para realizar essa refatoração.
Copiar
CREATE DATABASE IF NOT EXISTS users_crud;

USE users_crud;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
Resolução
Como o próprio enunciado já diz, só precisamos mexer na camada de models, visto que ela está completamente isolada do restante da aplicação.
Começamos alterando a conexão com o banco. Para isso, precisamos instalar o mysql2 :
Copiar
   npm i mysql2
Depois, altere o arquivo users-manager/models/connection.js :
Copiar
    // users-manager/models/connection.js

    // Importamos o driver do banco
    const mysql = require('mysql2/promise');

    // Criamos uma "pool" de conexões
    const connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'users_crud',
    });

    // Retornamos o pool criado para que possa ser utilizado pelo model.
    module.exports = connection;
E, agora, podemos alterar nosso model. Vamos começar de cima pra baixo, uma função de cada vez. Começamos por formatUser :
Copiar
    // users-manager/models/User.js

    /* ... */

    // Agora, ao invés de recebermos um documento do MongoDB, recebemos as colunas do MySQL.
    // Note que não realizamos destructure da senha, pois não precisaremos dela
    // Note, também, que renomeamos os campos fist_name e last_name para firstName e lastName, respectivamente
    function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
        // A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
        // e sem o campo passowrd
        return {
            id,
            firstName,
            lastName,
            email,
        };
    }

    /* ... */
Seguindo em frente, temos create :
Copiar
    // users-manager/models/User.js

    /* ... */

    // Função responsável por criar o usuário no banco de dados
    function create({ firstName, lastName, email, password }) {
        const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
        // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
        return connection.execute(query, [firstName, lastName, email, password])
        // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
        .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
    }

    /* ... */
A próxima função é findAll :
Copiar
    // users-manager/models/User.js

    /* ... */

    function findAll() {
        // Mais uma vez, chamamos connection.execute para executar nossa query.
        return connection.execute('SELECT * from users;')
        // Passamos cada resultado pela função de formatação
        .then(([results]) => results.map(formatUser));
    }

    /* ... */
Segiundo em frente, para findById :
Copiar
    // users-manager/models/User.js

    /* ... */

    async function findById(id) {
        // Realizamos uma consulta buscando o usuário por ID
        const user = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
        // Caso nenhum resultado seja encontrado, transformamos `user` em `null`
            .then(([results]) => (results.length ? results[0] : null));

        // Caso nenhum usuário seja encontrado, retornameos null
        if (!user) {
            return null;
        }

        // Caso o usuário tenha sido entrado, retornamos seus dados formatados:
        return formatUser(user);
    }

    /* ... */
E, por último, updateUser :
Copiar
    // users-manager/models/User.js

    /* ... */

    async function updateUser(id, { firstName, lastName, email, password }) {
        // Primeiro, executamos a query de atualização
        const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;

        await connection.execute(query, [firstName, lastName, email, password, id]);

        // Por fim, buscamos o usuário, utilizando o método `findById` e o retornamos.
        // Não precisamos nos preocupar em formatar os dados, ou em verificar se o usuário de fato existe,
        // já que `findById` já faz isso pra nós.
        return findById(id);
    }

    /* ... */
Repare que, aqui, precisamos realizar duas consultas: uma para atualizar, e uma para buscar os dados no banco. Isso é necessário pois o MySQL não possui um método do tipo findOneAndUpdate .