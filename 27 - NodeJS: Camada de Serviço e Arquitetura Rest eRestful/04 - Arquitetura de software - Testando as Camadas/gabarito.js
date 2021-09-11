const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoConnection = require('../../models/connection');
const MovieModel = require('../../models/movieModel');

describe('Busca apenas um filme no BD através do ID', () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;

  const ID_EXAMPLE = '604cb554311d68f491ba5781';
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient
     .connect(URLMock, {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     .then((conn) => conn.db('model_example'));


    sinon.stub(mongoConnection, 'getConnection')
      .resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('quando não existe um filme para o ID informado', () => {
    it('retorna "null"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme para o ID informado', () => {
    before(async () => {
      const moviesCollection = await connectionMock.db('model_example').collection('movies');
      await moviesCollection.insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    it('retorna um objeto', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.a('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});


// const { ObjectId } = require('mongodb');
// const mongoConnection = require('./connection');

// const getAll = async () => {
//   const moviesCollection = await mongoConnection.getConnection()
//     .then((db) => db.collection('movies'));

//   const movies = await moviesCollection
//     .find()
//     .toArray();

//   return movies.map(({ _id, ...movieData }) => ({
//     id: _id,
//     ...movieData,
//   }));
// };

const findById = async (id) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movie = await moviesCollection
    .findOne({ _id: ObjectId(id) })

  if (!movie) return null;

  const {
    title,
    directedBy,
    releaseYear
  } = movie

  return {
    id,
    title,
    directedBy,
    releaseYear
  }
};

// const create = async ({ title, directedBy, releaseYear }) => {
//   const moviesCollection = await mongoConnection.getConnection()
//     .then((db) => db.collection('movies'));

//   const { insertedId: id } = await moviesCollection
//     .insertOne({ title, directedBy, releaseYear });

//   return {
//     id,
//   };
// };

// module.exports = {
//   create,
//   getAll,
//   findById,
// };

const sinon = require('sinon');
const { expect } = require('chai');
const MovieModel = require('../../models/movieModel');
const MovieService = require('../../services/movieService');

describe('Busca um filme através do ID', () => {
  describe('quando não é encontrado um filme para o ID', () => {
    before(() => {
      sinon.stub(MovieModel, 'findById')
        .resolves(null);
    });

    after(() => {
      MovieModel.findById.restore();
    });

    it('retorna "null"', async () => {
      const response = await MovieService.findById();

      expect(response).to.be.null;
    });
  });

  describe('quando é encontrado o filme para o ID', () => {
    before(() => {
      sinon.stub(MovieModel, 'findById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    });

    after(() => {
      MovieModel.findById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MovieService.findById();

      expect(response).to.be.an('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieService.findById();

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});

// const MovieModel = require('../models/movieModel');

// const getNewMovie = (movieData) => {
//   const { id, title, directedBy, releaseYear } = movieData;

//   return { id, title, directedBy, releaseYear };
// };

// const isValid = (title, directedBy, releaseYear) => {
//   if (!title || typeof title !== 'string') return false;
//   if (!releaseYear || typeof releaseYear !== 'number') return false;
//   if (!directedBy || typeof directedBy !== 'string') return false;

//   return true;
// };

// const getAll = async () => {
//   const moviesData = await MovieModel
//     .getAll();

//   return moviesData.map(getNewMovie);
// };

const findById = async (id) => {
  const movieData = await MovieModel
    .findById(id);

  if (!movieData) return null;

  return getNewMovie(movieData);
};

// const create = async ({ title, directedBy, releaseYear }) => {
//   const isMovieValid = isValid(title, directedBy, releaseYear);

//   if (!isMovieValid) return false;

//   const { id } = await MovieModel
//     .create({ title, directedBy, releaseYear });

//   return {
//     id,
//   };
// };

// module.exports = {
//   create,
//   getAll,
//   findById,
// };

const sinon = require('sinon');
const { expect } = require('chai');
const MovieService = require('../../services/movieService');
const MovieController = require('../../controllers/movieController');

describe('Ao chamar o controller de findById', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781'
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'findById')
        .resolves(null);
    })

    after(() => {
      MovieService.findById.restore();
    })

    it('é chamado o método "status" passando 404', async () => {
      await MovieController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "send" passando a mensagem "Filme não encontrado."', async () => {
      await MovieController.findById(request, response);

      expect(response.send.calledWith('Filme não encontrado.')).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781'
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'findById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    })

    after(() => {
      MovieService.findById.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MovieController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MovieController.findById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});


// const MovieService = require('../services/movieService');

// const getAll = async (_req, res) => {
//   const movies = await MovieService
//     .getAll();

//   res.status(200).json(movies);
// };

const findById = async (req, res) => {
  const { id } = req.params;

  const movie = await MovieService
    .findById(id);

  if (!movie) {
    return res.status(404)
      .send('Filme não encontrado.');
  }

  res.status(200)
    .json(movie);
};

// const create = async (req, res) => {
//   const { title, directedBy, releaseYear } = req.body;

//   const movie = await MovieService
//     .create({ title, directedBy, releaseYear });

//   if (!movie) {
//     return res.status(400)
//       .send('Dados inválidos');
//   }

//   res.status(201)
//     .send('Filme criado com sucesso!');
// };

// module.exports = {
//   getAll,
//   findById,
//   create,
// };

// const express = require('express');
// const bodyParser = require('body-parser');

// const MovieController = require('./controllers/movieController');

// const app = express();

// app.use(bodyParser.json());

// app.get('/movies', MovieController.getAll);

app.get('/movies/:id', MovieController.findById);

// app.post('/movies', MovieController.create);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Ouvindo a porta ${PORT}`);
// });