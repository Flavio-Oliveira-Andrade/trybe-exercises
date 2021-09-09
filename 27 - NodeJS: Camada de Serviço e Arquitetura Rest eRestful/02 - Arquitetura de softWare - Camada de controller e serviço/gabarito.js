// models/Book.js

const { ObjectId } = require('mongodb');
const connection = require('./connection');

const renameId = ({ _id, ...document }) => ({ id: _id, ...document });

const getAll = () => connection()
    .then((db) => db.collection('books').find({}).toArray())
    .then((results) => results.map(renameId));

const getByAuthorId = (authorId) => connection()
    .then((db) => db.collection('books').find({ authorId }).toArray())
    .then((result) => (result ? renameId(result) : result));

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!book) return null;

  return book;
};

const create = (title, authorId) => connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }))
    .then((result) => ({ id: result.insertedId, title, authorId }));

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
};

// services/Book.js

const Author = require('../models/Author');
const Book = require('../models/Book');

const getAll = async () => Book.getAll();

const findById = async (id) => {
  const book = await Book.findById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  }

  return book;
};

const create = async (title, authorId) => {
  const author = await Author.findById(authorId);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }

  return Book.create(title, authorId);
};

module.exports = {
  getAll,
  findById,
  create,
};


// middlewares/error.js

module.exports = (err, req, res, _next) => {

  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  const statusByErrorCode = {
    notFound: 404,
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
};

// controllers/Book.js

const Joi = require('joi');
const rescue = require('express-rescue');
const Book = require('../services/Book');

const getAll = rescue(async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (book.error) return next(book.error);

  res.status(200).json(book);
});

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    authorId: Joi.string().not().empty().required(),
  })
    .validate(req.body);

  if (error) return next(error);

  const { title, authorId } = req.body;

  const newBook = await Book.create(title, authorId);

  if (newBook.error) return next(newBook.error);

  res.status(201).json(newBook);
});

module.exports = {
  getAll,
  findById,
  create,
};

// index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const Book = require('./controllers/Book');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/books', Book.getAll);
app.get('/books/:id', Book.findById);
app.post('/books', Book.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});



// Crie o service de CEP em services/Cep.js

// services/Cep.js

const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna uma erro
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }

  // Buscamos o CEP através do Model
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso não econtre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  // Por fim, retornamos o CEP correto
  return cep;
};

module.exports = {
  findAddressByCep,
};

// Crie o controller de CEP em controllers/Cep.js

// controllers/Cep.js

const rescue = require('express-rescue');
const service = require('../services/Cep');

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await service.findAddressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

module.exports = {
  findAddressByCep,
};

// Agora, vamos criar o middleware de erro. Crie o arquivo middlewares/error.js

// middlewares/error.js

module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  // Verificamos se esse é um erro de domínio
  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
    };

    // Usamos o código do erro para determinar qual o status code adequado
    const status = statusByErrorCode[err.code] || 500;

    // Enviamos o status code e o erro como resposta
    res.status(status).json(err);
  }

  // Caso não seja um erro de domínio, enviamos uma resposta de erro desconhecido.
  console.error(err);
  res.status(500).json({ error: { code: 'internal', message: 'Internal server error' } });
};

// Adicione o body-parser e o middleware de erro ao index.js :

// index.js

// Carregamos as variáveis de ambiente
// require('dotenv').config();
// const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');

// // Criamos a aplicação do express
// const app = express();
app.use(bodyParser.json());

// // Registramos o endpoint `GET /ping`
// app.get('/ping', (req, res) => {
//   res.status(200).json({ message: 'pong!' });
// });

app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);

// // Lemos a porta da variável de ambiente, ou usamos 3000
// const PORT = process.env.PORT || 3000;

// // Iniciamos a aplicação ouvindo na porta informada na variável de ambiente.
// app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });

//Exercício 3
//Crie o endpoint POST /cep
//O endpoint deve receber a seguinte estrutura no corpo da requisição:

/*
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
Todos os campos são obrigatórios
O CEP deve ser composto por 9 dígitos com traço.
Dica : Utilize o seguinte regex para validar o CEP: \d{5}-\d{3}
Se o CEP já existir, retorne o status 409 Conflict com o segiunte JSON:

{
  "error": { "code": "alreadyExists", "message": "CEP já existente" }
}
Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status 201 Created com os dados do novo CEP no seguinte formato:

{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
Resolução
Crie a função create no model de cep:
*/

// models/Cep.js

// const connection = require('./connection');

// const CEP_REGEX = /\d{5}-\d{3}/;

// const formatCep = (cep) => {
//   if (CEP_REGEX.test(cep)) return cep;

//   return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
// };

// const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
//   cep: formatCep(cep),
//   logradouro,
//   bairro,
//   localidade,
//   uf,
// });

// const findAddressByCep = async (cepToSearch) => {
//   // Removemos todos os traços, pois armazenamos o CEP
//   // puro no banco
//   const treatedCep = cepToSearch.replace('-', '');

//   const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep WHERE cep = ?';

//   const result = await connection.execute(query, [treatedCep])
//     .then(([results]) => (results.length ? results[0] : null));

//   if (!result) return null;

//   return getNewCep(result);
// };

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  // Removemos o traço do CEP para armazená-lo de forma limpa
  const cep = rawCep.replace(/-/ig, '');

  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  // Executamos a query
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  // Depois de inserir, retornamos os dados, como sinal de que foram guardados no banco
  return { cep, logradouro, bairro, localidade, uf };
};

// module.exports = {
//   findAddressByCep,
     create,
// };

//Agora, podemos utilizar essa função no Service:

// services/Cep.js

// const Cep = require('../models/Cep');

// const CEP_REGEX = /\d{5}-?\d{3}/;

// const findAddressByCep = async (searchedCep) => {
//  if (!CEP_REGEX.test(cep)) {
//    return {
//      error: {
//        code: 'invalidData',
//        message: 'CEP inválido',
//      }
//    }

//   const cep = await Cep.findAddressByCep(searchedCep);

//   if (!cep) {
//     return {
//       error: {
//         code: 'notFound',
//         message: 'CEP não encontrado',
//       },
//     };
//   }

//   return cep;
// };

/* const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrat
  const existingCep = await Cep.findAddressByCep(cep);

  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};
*/

// module.exports = {
//   findAddressByCep,
     create,
// };

// E agora, o controller:

// controllers/Cep.js

// const rescue = require('express-rescue');
// const service = require('../services/Cep');

//const Joi = require('joi');

// const findAddressByCep = rescue(async (req, res, next) => {
//   const { cep } = req.params;

//   const address = await service.findAddressByCep(cep);

//   if (address.error) {
//     return next(address.error);
//   }

//   return res.status(200).json(address);
// });

const create = rescue(async (req, res, next) => {
  // Armazenamos essa parte do schema do Joi para reutilizá-la
  const requiredNonEmptyString = Joi.string().not().empty().required();

  // Validamos o corpo da request
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  // Caso haja erro de validação, iniciamos o fluxo de erro
  if (error) return next(error);

  // Caso não haja erero de validação, pedimos para o service criar o cep
  const newCep = await service.create(req.body);

  // Caso o service nos retorne um erro
  if (newCep.error) {
    // Iniciamos o fluxo de erro
    return next(newCep.error);
  }

  // Caso contrário, retornamos o status `201 Created`, e o novo CEP, em formato JSON
  res.status(201).json(newCep);
});

// module.exports = {
//   findAddressByCep,
     create,
// };
Precisamos adicionar o código de erro alreadyExists , que estamos utilizando no service, ao middleware de erro:
Copiar
// middlewares/error.js

// module.exports = (err, req, res, _next) => {
//   if (err.isJoi) {
//     return res.status(400)
//       .json({ error: { message: err.details[0].message } });
//   }

//   // Verificamos se esse é um erro de domínio
//   if (err.code) {
//     const statusByErrorCode = {
//       notFound: 404,
         alreadyExists: 409,
//     };

//     // Usamos o código do erro para determinar qual o status code adequado
//     const status = statusByErrorCode[err.code] || 500;

//     // Enviamos o status code e o erro como resposta
//     return res.status(status).json(err);
//   }

//   // Caso não seja um erro de domínio, enviamos uma resposta de erro desconhecido.
//   console.error(err);
//   res.status(500).json({ error: { code: 'internal', message: 'Internal server error' } });
// };

// E, agora, é só criar o endpoint no index.js

// index.js

/* ... */

// app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.create);

// app.use(errorMiddleware);

/* ... */
Bônus
Exercício 1
Utilize uma API externa para buscar CEPs que não existem no banco de dados
Quando um CEP não existir no banco de dados, utilize a API https://viacep.com.br/ws/[numero-do-cep]/json/ para obter suas informações.
Caso o CEP não exista na API externa, você receberá o JSON { "erro": true } . Nesse caso, retorne status 404 Not Found com o seguinte JSON:
Copiar
{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
Caso o CEP exista na API externa, armaezene-o no banco e devolva seus dados no seguinte formato:
Copiar
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
Dica : Na arquitetura MSC, os models são responsáveis por toda a comunicação externa de uma aplicação, o que inclui APIs externas. Logo, você precisará de um model para acesar a API.
Resolução
Começamos instalando a biblioteca node-fetch , que vamos utilizar para fazer requisições. Execue o seguinte comando no terminal:
Copiar
npm i node-fetch
Agora, criamos o modelo que vai se comunicar com essa API. Crie o arquivo models/ViaCep.js :
Copiar
// models/ViaCep.js

const fetch = require('node-fetch');

const lookupCep = async (cepToLookup) => {
  const response = await fetch(`https://viacep.com.br/ws/${cepToLookup}/json/`);

  if (!response.ok) return null;

  const address = await response.json();

  if (address.erro) return null;

  return address;
};

module.exports = {
  lookupCep,
};
Depois, podemos alterar nosso service de Cep para que utilize esse novo modelo. Altere a função findAddressByCep no arquivo services/Cep.js :
Copiar
// service/Cep.js

/* ... */

const findAddressByCep = async (searchedCep) => {
  // Começamos buscando o CEP no banco de dados
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso encontremos, retornamos sem consultar a API
  if (cep) {
    return cep;
  }

  // Caso o CEP não exista no banco de dados, buscamos na API
  const cepFromApi = await ViaCep.lookupCep(searchedCep);

  // Caso o CEP não exista na API,
  // retornamos um erro dizendo que
  // o CEP não foi encontrado
  if (!cepFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  // Caso o CEP exista na API, pedimos ao model
  // que armazene-o no banco e retornamos
  // o resultado
  return Cep.create(cepFromApi);
};

/* ... */
Não tem passo 4! Como nossa aplicação está bem separada em camadas, não precisamos mexer na camada de controller ou em qualquer outra camada, pois o que precisávamos era alterar uma regra de negócio, e conseguimos! 😄🥳