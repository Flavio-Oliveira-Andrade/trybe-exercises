const express = require('express')
/*
Gabarito dos exercícios
A seguir temos uma possível solução para os exercícios:
Antes de começar
Inicie os exercícios criando uma aplicação Node.js, com os comandos já aprendidos.
Criar o novo pacote e instalar o express
Copiar
mkdir exercises-26-4
cd exercises-26-4
npm init -y
npm i express body-parser express-rescue
Criar o arquivo index.js e adicionar o middleware de erros e o body-parser
*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

/* Crie suas rotas aqui */

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
/*
Exercício 1
Crie uma rota GET /ping
Sua rota deve retornar o seguinte JSON: { message: 'pong' }
Resolução
Copiar
 ... */

app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

/* ...
Exercício 2
Crie uma rota POST /hello
Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
Resolução
Copiar
*/


app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
})

/* ...
Exercício 3
Crie uma rota POST /greetings
Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
Resolução
Copiar
*/
/* ... */

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

/* ...
Exercício 4
Crie uma rota PUT /users/:name/:age .
Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
Resolução

*/
/* ... */

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

/* ..
Exercício 5
Crie uma API de dados das personagens de Simpsons
Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
*/

[
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]

/*
Utilize o modulo fs do Node para ler/escrever arquivos.
Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
Caso dê tudo certo, a resposta deve voltar com status 200 OK .
Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .
Resolução
Antes de começar, criamos duas funções para nos ajudar a ler e escrever do arquivo simpsons.json. Utilizaremos essas funções mais pra frente, então fique de olho.

*/
const fs = require('fs/promises');

function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };
/*
Crie um endpoint GET /simpsons
O endpoint deve retornar um array com todos os Simpsons.
*/
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

/* ... */

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}))

/* ...
Crie um endpoint GET /simpsons/:id
O endpoint deve retornar o personagem com o id informado na URL da requisição.
Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

*/


app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

/* ...
Crie um endpoint POST /simpsons .
Este endpoint deve cadastrar novas personagens.
O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
Copiar
*/

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);

/*
Bônus
Exercício 1
Adicione autenticação a todos os endpoints.
O token deve ser enviado através do header Authorization .
O token deve ter exatamente 16 caracteres.
Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .
Resolução
authMiddleware.js

*/
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
}
index.js
Copiar
const express = require('express');
const authMiddleware = require('./authMiddleware');
const app = express();

app.use(express.json());
app.use(authMiddleware);


app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
/*
Exercício 2
Crie uma rota POST /signup
A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK e o JSON { token: '<token-aleatorio>' } .
Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do node, dessa forma:
Copiar
... */

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;

const crypto = require('crypto');


app.post('/signup', (req, res) => {
  const { email, passowrd, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

