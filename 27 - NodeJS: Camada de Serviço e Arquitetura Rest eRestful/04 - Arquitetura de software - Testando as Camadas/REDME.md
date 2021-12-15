### O que vamos aprender
Hoje voce ira aprender como testar cada camada do Padão MSC assim como APIs REST, aproveitamos tambem para treinar esses conceitos que na aulas anteriores.

Além disso, você vera as diferenças entre  os testes unitarios de integração e como escreve-los.

### depedencias
test jest

jest ;
supertest
express

## Voce será capaz de :

- Testar individualmente cada camada do modelo MSC;
- Testar API's RESTs;
- Saber as diferenças e quando aplicar testes unitários e de integração;
- Desenvolver API's e arquiteturas orientadas a testes;

## Por que isso é importante

Vimos anteriormente sobre alguns benefícios da automação de testes, entre eles podemos citar a escrita de códigos de manutenção mais simples e menos propensos a falhas, a identificação e correção rápida de bugs e até mesmo uma maior agilidade no processo de desenvolvimento e para transformar requisitos em códigos.
Nas últimas aulas aprendemos sobre padrões famosos de mercado: o MSC e o REST .
Dessa forma, unir esses conhecimentos agregará muito em seu desenvolvimento como pessoa desenvolvedora, te proporcionando conhecimentos extremamente requisitados na área, além de melhorar seu desempenho e qualidade no desenvolvimento de softwares.

## Desenvolvimento guiado a testes

Agora que vamos começar a desenvolver API's e sistemas robustos, seguindo padrões amplamente difundidos, precisamos ter a preocupação em garantir que todas as partes do nosso código estão realizando seu papel de maneira correta.
Dessa forma, iremos seguir o modelo conhecido como TDD que vimos em aulas anteriores.
O TDD, conforme vimos anteriormente, é um processo de desenvolvimento de software que visa o feedback rápido e a garantia do funcionamento da aplicação de acordo com o que foi definido.
Relembrando o processo, podemos pensar que ele funciona como pequenos ciclos onde:
Partimos da escrita de testes a partir dos requisitos;
Em seguida, implementamos a funcionalidade;
E, por último, fazemos os ajustes necessários para que testes e implementação estejam alinhados.
Concluindo o ciclo, iniciamos um novo para uma nova funcionalidade.
Podemos ver esse ciclo representado na figura abaixo

## Tipos de Testes
temos hoje uma diversidade de tipos de testes que variam em escopo e interação, o que muda a medida da evolução das tecnologias e com o surgimento de novas necessidades.
Durante essa aula, focaremos nos dois tipos de testes mais comuns: testes unitários / de unidade e testes de integração

### Testes Unitários (Unit Tests)

Conforme definido por Martin Fowler , importante nome na arquitetura de software, testes unitários são de baixo nível, com foco em pequenas partes do software e tendem a ser mais rapidamente executados quando comparados com outros testes, pois testam partes isoladas.
O conceito de unidade porém, pode variar de projeto, linguagem, time ou arquitetura. Linguagens orientadas a objetos tendem a ter classes como uma unidade, já linguagens procedurais ou funcionais consideram normalmente funções como sendo uma unidade.
Dessa forma, esse conceito é algo muito relativo e depende muito do contexto e do objetivo em questão. O que podemos ter nítido é que uma unidade é uma parte que pode ter seu comportamento isolado de suas dependências.
Lembrando da aula anterior sobre MSC e sobre o padrão em sí, podemos dizer que cada função da camada de Model , por exemplo, é uma unidade. Dessa forma, conseguimos isolar essa função e testar seu comportamento de maneira unitária.
Vamos colocar a mão na massa e aplicar os conceitos que vimos até aqui. Dessa forma criaremos testes unitários para cada camada da arquitetura MSC, entendendo os objetivos de cada um desses testes e os pontos de atenção que deveremos ter.

## Requisitos

Para o exemplo dessa aula desenvolveremos uma API utilizando os padrões REST e MSC. Essa API deverá permitir a realização de inserção e consulta de filmes no banco de dados.
De maneira detalhada temos os seguintes requisitos:
A API deverá permitir a inserção de filmes no banco de dados:
Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID ;
A API deverá permitir a consulta de todos os filmes:
A consulta deve retornar uma matriz com todos os detalhes dos filmes;
A API deverá permitir a consulta de um filme específico através do seu ID :
A consulta deve retornar todos os dados cadastrados para aquele ID .
Antes de começarmos, vamos estruturar uma API de exemplo utilizando o modelo MSC com boas práticas, nesse caso, dividindo as entidades por seus papéis técnicos , como visto em 27.2 - Arquitetura de Software - Camada de Controller e Service :


└── controllers
│   └── movieController.js
└── models
│   └── connection.js
│   └── movieModel.js
└── services
│   └── movieService.js
└── tests
│   ├── controllers
│   │   └── movieController.test.js
│   ├── services
│   │   └── movieService.test.js
│   └── models
│       └── movieModel.test.js
└── index.js

Perceba que criamos um arquivo de teste para a entidade movie para cada camada do MSC. Dessa forma, conseguiremos testar unitariamente cada uma.
Para que os arquivos de testes não fiquem muito grandes testando tudo, podemos usar uma arquitetura de testes para testar cada funcionalidade em um arquivo diferente, durante o conteúdo, aula ao vivo e exercício iremos trabalhar usando a estrutura abaixo:


└── controllers
│   └── movieController.js
└── models
│   └── connection.js
│   └── movieModel.js
└── services
│   └── movieService.js
└── tests
│   ├── controllers
│   │   └── movieControllerCreate.test.js
│   │   └── movieControllerGetAll.test.js
│   │   └── movieControllerGetById.test.js
│   └── models
│   │   └── movieModelCreate.test.js
│   │   └── movieModelGetAll.test.js
│   │   └── movieModelGetById.test.js
│   ├── services
│   │   └── movieServiceCreate.test.js
│   │   └── movieServiceGetAll.test.js
│   │   └── movieServiceGetById.test.js
└── index.js


Na raiz do projeto vamos iniciar o npm :

##  npm init -y

E então, instalar as dependências para nossa API. Iremos utilizar o express , body-parser e o mongodb :

##  npm install express body-parser mongodb

Vamos instalar também as nossa dependências de desenvolvimento, por enquanto sabemos que iremos utilizar a stack de testes vista anteriormente com mocha , chai e sinon :

##  $ npm install -D mocha chai sinon

Por último, vamos adicionar o script de teste no package.json .

Habitualmente, podemos executar todos os testes contidos numa pasta utilizando o comando mocha <suaPastaDeTestes> --recursive , assim como podemos também definir um padrão de arquivos de teste, como mocha .<suaPastaDeTestes>/**/*.test.js , que executará todos os arquivos com final test.js dentro da sua pasta de testes.

Para esse dia, vamos utilizar um pequeno artifício com o intúito de facilitar a execução de testes específicos. Nesse caso, utilizaremos o comando mocha ./tests/**/*$NAME*.test.js :

...
  "scripts": {
    "test": "mocha ./tests/**/*$NAME*.test.js --exit"
  },
...
O --exit força o encerramento do processo do mocha ao final dos testes
Dessa forma, podemos executar o comando npm test para validar todos os nossos testes, ou, utilizar uma variável de ambiente NAME para definir um arquivo específico: NAME=nomeDoArquivo npm test .

Tudo pronto, vamos aos códigos!

### Model e testes

Começaremos testando a camada de model , pensando de maneira sequencial, essa camada fica em uma das pontas da arquitetura e, por isso, iniciaremos por ela. Entretanto, é importante termos em mente que por se tratar de testes unitários, estaremos testando uma unidade específica do código isolado, sendo assim, poderíamos iniciar por qualquer parte.
Seguindo o TDD, o primeiro passo é escrevermos os casos de testes. Para isso, precisamos nos perguntar o que iremos testar, ou seja, qual a responsabilidade que queremos garantir que está sendo realizada.
Relembrando o papel do model , ele é responsável pela estrutura dos dados e seu armazenamento, por exemplo, responsável pela comunicação com o banco de dados e pelo mapeamento das entidades.
Sendo assim, iremos testar se essa comunicação com o BD e suas operações de escrita e leitura estão sendo realizadas da maneira correta.

### Requisitos em testes (Model)

Vamos relembrar nosso primeiro requisito:
A API deverá permitir a inserção de filmes no banco de dados :
Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID ;
Como estamos falando a princípio de um banco de dados com essas informações. Podemos descrever o requisito pensando primeiramente o Model com as seguintes asserções/ afirmações:
Insere um novo filme no DB
quando é inserido com sucesso
retorna um objeto
tal objeto possui um "id" do novo filme inserido!
Agora vamos reescrever essas mesmas asserções na estrutura de testes:
tests/models/movieModelCreate.test.js

const { expect } = require('chai');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
const MoviesModel = {
  create: () => {}
};

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
});

Agora, como só temos esse teste a princípio, vamos executa-lo com npm test ou, específicamente, com NAME=movieModel npm test , e a saída no terminal será semelhante a essa:

O segundo passo é de fato implementarmos nossa camada de model de acordo com os testes escritos.
Vamos começar criando o arquivo de conexão com o banco de dados, utilizaremos o MongoDB:
models/connection.js

const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let schema = null;

async function getConnection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getConnection };

E então, iniciaremos nosso model de movies importando tal conexão e então criando o método para criação de filmes:
models/movieModel.js

const mongoConnection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};

### Refactor e Test Doubles
Agora vamos para o último passo do TDD, revisitaremos os testes escritos para realizar os ajustes necessários de acordo com a nossa implementação!
Vamos começar editando nosso teste para utilizar nossa implementação:
tests/models/movieModelCreate.test.js


Antes de executar os testes novamente, vamos parar a instância do MongoDB para que nosso teste não faça uma operação de IO em disco. Para isso execute o seguinte comando:

# se estiver usando Linux é esse comando
 sudo service mongod stop
# se estiver usando MacOs é esse comando
 brew services stop mongodb-community
# Lembre-se de reiniciar usando esse comando no linux
 sudo service mongod start
# ou esse se estiver usando MacOs é esse comando
 brew services start mongodb-community

// const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');

// describe('Insere um novo filme no BD', () => {
//   const payloadMovie = {
//   title: 'Example Movie',
//   directedBy: 'Jane Dow',
//   releaseYear: 1999,
// };

//   describe('quando é inserido com sucesso', () => {
//     it('retorna um objeto', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.be.a('object');
//       });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.have.a.property('id');
//     });
//   });
// });

Perceba que o nosso teste ainda não está funcionando. Isso aconteceu porque no caso onde o print foi tirado, não havia um serviço do Mongo rodando na máquina e a implementação não conseguiu se conectar causando o erro. Caso você tenha esteja com MongoDB rodando em sua máquina, o teste deverá passar com sucesso, porém, não é o objetivo agora.
Vimos anteriormente que para criarmos testes precisamos isolar o SUT (System Under Test), ou seja, garantirmos que estamos testando somente um trecho de código que tem uma função específica sem adicionarmos comportamentos ou variáveis externas a esse contexto.
Esse conceito requer, por exemplo, que isolemos qualquer operação de IO. Lembra quando isolamos as chamadas do fs ou do readline fazendo stub de seus métodos?!
Partimos da premissa que o módulo ou driver que estamos utilizando para fazer a comunicação com o banco de dados já está devidamente testado e funciona conforme esperado.
Dessa forma, nosso objetivo é testar o que está "depois" disso, ou seja, se as regras e comportamentos codificados antes de chegar até o banco de dados ou depois de recuperá-las do BD estão funcionando conforme esperado.
Dito isso, você já deve estar imaginando o que será necessário fazer para conseguirmos testar essa camada. Se você pensou em fazer stub para os drivers dos bancos que estamos utilizando, acertou!
Vamos ver um exemplo de como podemos utilizar o já conhecido sinon nessa tarefa.
Para isso, ao invés de subirmos um BD (Mongo), iremos fazer um stub da conexão, fazendo-a retornar um mock da conexão, ou seja, ela irá retornar um objeto com as mesmas características da conexão real, porém, serão funções falsas criadas por nós:
tests/models/movieModelCreate.test.js
Copiar
const sinon = require('sinon');
// const { expect } = require('chai');

/* Vamos importar o módulo responsável para abrir a conexão nos nossos models para poder fazer o seu `double`.*/
const mongoConnection = require('../../models/connection');
// const MoviesModel = require('../../models/movieModel');

// describe('Insere um novo filme no BD', () => {
     /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
     let connectionMock;

//   const payloadMovie = {
//      title: 'Example Movie',
//      directedBy: 'Jane Dow',
//      releaseYear: 1999,
//   };

      /* Esta é uma forma provisória para mockar a função insertOne
      Desta forma ela não vai chamar o banco de verdade para fazer esse teste */
      before(() => {
        const ID_EXAMPLE = '604cb554311d68f491ba5781';
        const insertOne = async () => ({ insertedId: ID_EXAMPLE });
        const collection = async () => ({ insertOne });
        const db = async (databaseName) => ({ collection });
        const getConnectionMock = async () => ({ db });

        connectionMock = getConnectionMock()
          .then((conn) => conn.db('model_example'));

        sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
      });

      /* Restauraremos a função `getConnection` original após os testes. */
      after(() => {
        mongoConnection.getConnection.restore();
      });

//   describe('quando é inserido com sucesso', () => {
//      it('retorna um objeto', async () => {
//        const response = await MoviesModel.create(payloadMovie);

//        expect(response).to.be.a('object');
//      });
//      it('tal objeto possui o "id" do novo filme inserido', async () => {
//        const response = await MoviesModel.create(payloadMovie);

//        expect(response).to.have.a.property('id');
//      });
//    });
// });
Execute os testes com NAME=movieModel npm test para ver que eles vão passar.

Testes do model passando
Porém, essa abordagem não é muito confiável, pois ao montar esse dublê para a função insertOne estamos mascarando o comportamento real do nosso modelo. Faça um teste, fazendo a seguinte modificação no model.
tests/models/movieModelCreate.test.js
Copiar
const create = async ({ title, directedBy, releaseYear }) => {
  /* Removemos o trecho que fazia  inserção no banco para ter uma prova
  que nosso teste não está testando de fato a inserção de um objeto no banco! */

  return {
    id: '1',
  };
};
Você vai perceber que o teste continua passando, ou seja não temos uma garantia que nosso model realmente está salvando dados no banco de dados. Para fazer isso vamos precisar mudar um pouco a abordagem para usar um banco dublê. Ou seja um banco, que realmente faz operações, mas em memória. Entederemos melhor isso na próxima seção.

### Requesitos de testes com BD em memoria

erceba o quão trabalhoso foi criar nosso stub, precisamos conhecer exatamente a nossa implementação para saber qual método do driver estamos utilizando e qual deveriam ser suas respostas.
Além disso, a resposta de alguns métodos que utilizamos possuem um tipo próprio com suas especificações, por exemplo, ao executar um find no mongo, nos é retornado um cursor . Esse cursor possui métodos próprios como sort , limit e toArray . E, se utilizarmos eles em nossa implementação, teremos que nos preocupar em retornar um objeto com esses mesmos métodos em nossos stubs para que nosso teste funcione.
Para nos ajudar com essa tarefa existe uma outra estratégia que é bastante difundida em diversas linguagens para isolar o IO de banco de dados: utilizar um banco de dados em memória.
A ideia é subirmos uma versão em memória do Banco de Dados que queremos, dessa forma, ele não persistirá nenhuma informação em disco (sem realizar IO) e ao final de cada teste podemos limpá-lo. Como essa versão do banco está em memória, ao finalizar os testes, as informações também serão apagadas.
Existem diversas ferramentas que criam esse tipo de objeto para nós, dessa forma, teremos um objeto que se comporta exatamente como o nosso banco de dados real, porém, sem realizar nenhuma operação de IO em disco e após os testes todos os cenários serão limpos.
Para colocar em prática esse conceito começaremos utilizando uma versão em memória do mongodb , para isso, utilizaremos o pacote para NodeJS mongodb-memory-server .
Para instalá-lo é simples, basta utilizarmos o gerenciador de pacotes da nossa preferência, como o npm :
Copiar
npm install -D mongodb-memory-server@6
Como só utilizaremos esse pacote em tempo de desenvolvimento para os testes, é importante adicionarmos a flag -D ou --save-dev . O @6 é a versão que usamos para construir o conteúdo.
Iremos então iniciar um server do banco em memória e fazer um stub da conexão conectando nesse server:
tests/models/movieModelCreate.test.js
Copiar
// const sinon = require('sinon');
// const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

// const mongoConnection = require('../../models/connection');
// const MoviesModel = require('../../models/movieModel');

// describe('Insere um novo filme no BD', () => {
//   /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
//   let connectionMock;
//   const payloadMovie = {
//     title: 'Example Movie',
//     directedBy: 'Jane Dow',
//     releaseYear: 1999,
//   };

    /* Aqui atualizamos o código para usar o banco montado pela lib `mongo-memory-server` */
    before(async () => {
      const DBServer = new MongoMemoryServer();
      const URLMock = await DBServer.getUri();

      connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then((conn) => conn.db('model_example'));


      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });

//   /* Restauraremos a função `getConnection` original após os testes. */
//   after(() => {
//     mongoConnection.getConnection.restore();
//   });

//   describe('quando é inserido com sucesso', () => {

//     it('retorna um objeto', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.be.a('object');
//     });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.have.a.property('id');
//     });

//   });

// });
Realizado esses ajustes teremos nossos testes rodando com sucesso:

Testes do model finalizados
Porém, no final da seção anterior fizemos uma alteração na função create do modelo. Ele não está fazendo nenhuma query para salvar dados no banco. Vamos lembrar como o código está atualmente.
Copiar
const create = async ({ title, directedBy, releaseYear }) => {
  /* Removemos o trecho que fazia  inserção no banco para ter uma prova
  que nosso teste não está testando de fato a inserção de um objeto no banco! */

  return {
    id: 1,
  };
};
Nosso teste está passando com esse código. Isso é sinal de qual algo está errado, pois nosso teste não está testando se estamos de fato salvando um dado no banco. Em vez disso ele só testa se a função retorna um objeto com um atributo id independente se está passando pelo banco ou não.
Para ter certeza que nosso model está inserindo algo no banco ao chamar a função create vamos adicionar mais uma verificação no nosso teste de movieModel .
Copiar
// const sinon = require('sinon');
// const { expect } = require('chai');
// const { MongoClient } = require('mongodb');
// const { MongoMemoryServer } = require('mongodb-memory-server');

// const mongoConnection = require('../../models/connection');
// const MoviesModel = require('../../models/movieModel');

// describe('Insere um novo filme no BD', () => {
//   /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
//   let connectionMock;
//   const payloadMovie = {
//     title: 'Example Movie',
//     directedBy: 'Jane Dow',
//     releaseYear: 1999,
//   };

//   /* Aqui atualizamos o código para usar o banco montado pela lib `mongo-memory-server` */
//   before(async () => {
//     const DBServer = new MongoMemoryServer();
//     const URLMock = await DBServer.getUri();//
//     connectionMock = await MongoClient
//       .connect(URLMock, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       })
//       .then((conn) => conn.db('model_example'));//
//
//     sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
//   });

//   after(() => {
//     mongoConnection.getConnection.restore();
//   });

//   describe('quando é inserido com sucesso', () => {

//     it('retorna um objeto', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.be.a('object');
//     });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.have.a.property('id');
//     });

    /* Aqui de fato estamos testando se o filme foi cadastrado após chamar a função `create`.
    Para isso fizemos uma consulta para o banco para checar se existe um filme com o título cadastrado */
    it('deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock.collection('movies').findOne({ title: payloadMovie.title });
      expect(movieCreated).to.be.not.null;
    });
//   });

// });
Nesse novo teste, estamos cadastrando o filme no banco e fazendo uma consulta ao banco usando o objeto com a conexão dublê . Assim podemos conferir se o filme foi de fato cadastrado. Rode o teste ainda com o código errado e você vai ver que o teste vai falhar.

Novo teste do model falhando
Agora vamos fazer o código do método create voltar a fazer a inserção no banco.
Copiar
const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
     .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
     .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};
Pronto, agora se você rodar novamente nossos testes, verá que eles estão passando de novo, e temos certeza que nosso model está inserindo dados no banco.

#### Novo teste do model passando

### Service de teste

Seguindo nossa sequência iremos testar a camada de services.
Relembrando o papel dessa camada, podemos definí-la como responsável pela lógica de negócio, sendo acessada pelo controller e acessando o model , ou seja, ficando situada entre as duas camadas.
Relembrando nossos requisitos vamos identificar quais comportamentos precisaremos garantir:
A API deverá permitir a inserção de filmes no banco de dados:
Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID ;
Com base no requisito podemos descrever um Service com as seguintes asserções / regras:
tests/services/movieServiceCreate.test.js
Copiar
const { expect } = require('chai');

const MoviesService = {
  create: () => {},
};

/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/
describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});
Rodando o teste específico com NAME=movieServiceCreate npm test , teremos um retorno semelhante a:

Testes do service
Agora vamos implementar a camada conforme os requisitos:
services/movieService.js
Copiar
const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};
Vamos então adaptar nosso teste para chamar nossa implementação:
tests/services/movieServiceCreate.test.js
Copiar
// const { expect } = require('chai');

const MoviesService = require('../../services/movieService');

// describe('Insere um novo filme no BD', () => {
//   describe('quando o payload informado não é válido', () => {
//     const payloadMovie = {};

//     it('retorna um boolean', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.be.a('boolean');
//     });

//     it('o boolean contém "false"', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.be.equal(false);
//     });

//   });

//   describe('quando é inserido com sucesso', () => {
//     const payloadMovie = {
//       title: 'Example Movie',
//       directedBy: 'Jane Dow',
//       releaseYear: 1999,
//     };

//     it('retorna um objeto', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.be.a('object');
//     });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.have.a.property('id');
//     });

//   });
// });
Podemos rodar o teste novamente e teremos o seguinte resultado:

Testes do Service pós implementação
Perceba que o primeiro teste rodou com sucesso, a validação é realizada totalmente na camada de service. Porém, o segundo teste, como depende da camada de Model para funcionar, conforme esperado, o teste não concluiu com sucesso.
Vamos então isolar nosso service, removendo a dependência dele do Model. Para isso, podemos fazer um stub :
tests/services/movieServiceCreate.test.js
Copiar
const sinon = require('sinon');
// const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
// const MoviesService = require('../../services/movieService');

// describe('Insere um novo filme no BD', () => {
//   describe('quando o payload informado não é válido', () => {
//     const payloadMovie = {};

//     it('retorna um boolean', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.be.a('boolean');
//     });

//     it('o boolean contém "false"', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.be.equal(false);
//     });

//   });

//   describe('quando é inserido com sucesso', () => {
//     const payloadMovie = {
//       title: 'Example Movie',
//       directedBy: 'Jane Dow',
//       releaseYear: 1999,
//     };

    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesModel.create.restore();
    });

//     it('retorna um objeto', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.be.a('object');
//     });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesService.create(payloadMovie);

//       expect(response).to.have.a.property('id');
//     });

//   });
// });
Agora vamos executar nosso teste novamente:

Testes do service finalizados


### Controllers e testes

E por último vamos escrever testes e implementar a camada de Controller .
Essa camada recebe as requisições dos clientes, preparando o input e o output da pessoa usuária de acordo com sua comunicação com a camada de Service .
Dessa forma, nos testes devemos contemplar qual a resposta para o cliente apropriado em cada cenário, qual o status e o body em cada resposta:
Ao chamar o método create do controller movieController esperamos:
Quando o payload informado não é válido:
Retornar o código de status 400 - Bad Request ;
Retornar a mensagem Dados inválidos .
Quando o payload informado é válido:
Retornar o código de status 201 - Created ;
Retornar a mensagem Filme criado com sucesso! .
Percebam que os testes do controller tem uma particularidade em sua implementação. Isso acontece porque diferente das outras camadas, o controller não possui funções simples que retornam um resultado qualquer, mas sim middlewares que funcionam a partir dos objetos req , res , next e error .
Dessa forma, para conseguirmos testar, precisaremos passar um input a partir do req e validar o output a partir do res , validando se os devidos métodos foram chamados e com os parâmetros esperados.
Para nos ajudar com essa tarefa iremos utilizar recursos do sinon , observe como ira ficar no teste do movieController
tests/controllers/movieControllerCreate.test.js
Copiar
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = {
  create: () => {}
};

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o json com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.json.calledWith({ message: 'Dados inválidos' })).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o json com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.json.calledWith({ message: 'Filme criado com sucesso!' })).to.be.equal(true);
    });

  });
});
Criamos stubs específicos para simular funções de resposta ( response ), dessa forma conseguimos utilizar o método calledWith fornecido pelo Sinon para testarmos se a função foi chamada com os parâmetros esperados.
Por exemplo, no trecho de código abaixo, validamos se o método res.status (ou response.status ) foi chamado passando o status code 400 . Lembre-se que é dessa forma que nossa API responde à requisição da pessoa usuária, utilizando API's REST com frameworks de middleware, como o express .
Copiar
expect(response.status.calledWith(400)).to.be.equal(true);
Ao rodar os testes com NAME=movieControllerCreate npm test , eles deverão quebrar. Por tanto, vamos à implementação da nossa camada. Podemos fazê-la da seguinte maneira:
controllers/movieController.js
Copiar
const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
  .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' });
  }

  /*
    Perceba que `middlewares`, ao invés de executar um `return` padrão,
    como outras funções, vão, na maior parte das vezes, devolver as
    funções passadas por parâmetro, através dos objetos `req, res, next`.

    No nosso caso, estamos utilizando os métodos `status()` e `send()`,
    de `res` (response) para escrever/devolver um valor para a
    requisição daquele `end-point`.
  */
  res
    .status(201)
    .json({ message: 'Filme criado com sucesso!' });
};

module.exports = {
  create,
};
Feito isso, vamos para o passo de refatoração ( refactor ), ajustando os testes para receberem nossa implementação e também isolar nosso controller das demais camadas:
tests/controllers/movieControllerCreate.test.js
Copiar
// const sinon = require('sinon');
// const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

// describe('Ao chamar o controller de create', () => {
//   describe('quando o payload informado não é válido', () => {
//     const response = {};
//     const request = {};

//     before(() => {
//       request.body = {};

//       response.status = sinon.stub()
//         .returns(response);
//       response.json = sinon.stub()
//         .returns();

      /*
        Perceba que nosso stub também simula os comportamentos do `service`,
        dessa forma, conseguimos testar o comportamento do controller de
        maneira isolada.

        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `false`.
      */
      sinon.stub(MoviesService, 'create')
        .resolves(false);
//   });

    /* Restauraremos a função `create` original após os testes. */
    after(() => {
      MoviesService.create.restore();
    });

//     it('é chamado o status com o código 400', async () => {
//       await MoviesController.create(request, response);

//       expect(response.status.calledWith(400)).to.be.equal(true);
//     });

//     it('é chamado o json com a mensagem "Dados inválidos"', async () => {
//       await MoviesController.create(request, response);

//       expect(response.json.calledWith({ message: 'Dados inválidos' })).to.be.equal(true);
//     });

//   });

//   describe('quando é inserido com sucesso', () => {
//     const response = {};
//     const request = {};

//     before(() => {
//       request.body = {
//         title: 'Example Movie',
//         directedBy: 'Jane Dow',
//         releaseYear: 1999,
//       };

//       response.status = sinon.stub()
//         .returns(response);
//       response.json = sinon.stub()
//         .returns();

      /*
        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `true`.
      */
         sinon.stub(MoviesService, 'create')
           .resolves(true);
//     })

    /* Restauraremos a função `create` original após os testes. */
    after(() => {
      MoviesService.create.restore();
    });

//     it('é chamado o status com o código 201', async () => {
//       await MoviesController.create(request, response);

//       expect(response.status.calledWith(201)).to.be.equal(true);
//     });

//     it('é chamado o json com a mensagem "Filme criado com sucesso!"', async () => {
//       await MoviesController.create(request, response);

//       expect(response.json.calledWith({ message: 'Filme criado com sucesso!' })).to.be.equal(true);
//     });

//   });
// });
Ao rodar nossos testes com NAME=movieControllerCreate npm test teremos o seguinte resultado:

Testes do service finalizados

### rODANDO NOSSO CODIGO



Agora que temos todas as camadas devidamente testadas, sabemos que todos os comportamentos estão sendo cobertos pela camada responsável.
Para finalizarmos, basta criarmos nosso arquivo index.js com a implementação dos nossos endpoints REST, utilizando express e chamando nosso controller.
index.js

const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MovieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});



Só precisamos garantir agora que temos um serviço do MongoDB acessível, conforme configuramos na camada de model ( models/connection.js ) e nossa aplicação está pronta para rodar!
Lembre-se que em nossos testes, isolamos a conexão com o MongoDB usando um server em memória, por isso não foi necessário configurarmos um server MongoDB anteriormente. Para rodarmos nossa aplicação, precisamos subir o serviço do MongoDB padrão.
