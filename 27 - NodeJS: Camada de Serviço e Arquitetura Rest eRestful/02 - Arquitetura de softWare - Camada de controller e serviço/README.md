API REST RESTful endpoints


Middlewer = validações de token = recepção do restaurante
Controller = recebe as req e res  = Garçon
Model =  quam faz a ligação com o banco de dados = chef da cozinha, quem sabe as receitas delega funções
Service = logica de negocio

### O que vamos aprender ?
Hoje voce continuara  a aprender a melhor a organizacao de responsabilidades nas suas aplicações nodeJs e
Express, utilizando  umn dos padoes arquiteturais mais FAmoso do mercado . MSC !

Alem disso, voce vera uma aplicação em que  o modelo acessa um banco de dados mongoDB
e entendera em detalhes o que é a arquitetura de  cliente-servidor

### Voce sera capaz de :

- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código.

### por que isso é importante?
Ontem iniciamos o desenvolvimento de sua visão arquitetural. Para ampliar esse conhecimento é preciso que você conheça e entenda outras camadas de uma aplicação. Desse modo você terá mais insumos para decidir como organizar seu código, facilitando a manutenção e a adição de novas funcionalidades;

### AS camadas de  Controller e Service.

Hoje, você vai aprender duas camadas novas, que podem ser (e geralmente são) utilizadas de forma complementar à camada de Model.
Vamos falar sobre as camadas de Controllers e de Services .
Essas duas camadas são, respectivamente, responsáveis por (1) receber e tratar os dados da requisição e (2) aplicar as regras de negócio da aplicação antes que qualquer comunicação com o banco seja realizada. Dessa forma, o Model precisa fazer menos coisas, o que quer dizer que temos uma arquitetura que delimita mais as responsabilidades de cada camada, de forma que, caso precisemos alterar uma parte do código, a quantidade de lugares em que precisaremos mexer é menor, visto que camada tem sua responsabilidade bem delimitada.
Para entender melhor como estão organizadas as camadas dessa arquitetura, observe o diagrama abaixo:

### A camada dos Controllers

Na verdade, desde o primeiro dia que estudou Express, você já vem usando o principal componente de sua camada de controllers: Os middlewares .
Isso porque a camada dos controllers é a primeira camada numa API. É nela onde os dados da requisição serão recebidos e tratados, pra depois serem passados para as próximas camadas.
O controller recebe as requisições e então consulta o service , enviando na resposta aquilo que o service retornar, que pode ser uma mensagem de erro, em caso de falha, ou as informações pedidas, em caso de sucesso.
Ao se comunicar com o service , o controller deve passar apenas as informações necessárias, sendo assim não é uma boa prática passar toda a request para o service , as informações devem ser extraídas e então apenas o que for necessário para determinada ação deve ser transferido.
Uma ótima analogia para o controller é que ele seria como um garçom em um restaurante. O garçom não sabe como preparar os pratos e nem como recepcionar as pessoas na porta. Ele apenas anota o pedido, sabe para que parte do restaurante levar o pedido e para qual mesa entregá-lo depois de pronto. Quando você monta seu software em uma camada só, é como se o garçom fizesse todas as funções dentro do seu restaurante (recepcionar, anotar os pedidos, preparar os pratos etc). É pedir pra dar confusão, não é?

### A camada dos Services

Até agora, temos dito que regras de negócio ficam no modelo. E isso é verdade em outros padrões arquiteturais.
Mas é comum que, à medida que projetos vão crescendo, os modelos vão ficando cada vez maiores e mais complexos, pois vão acumulando cada vez mais regras de negócio.
Por isso, é comum vermos uma nova camada sendo adicionada em projetos que exigem uma lógica de negócio um pouco mais complexa e, principalmente, em APIs.
Essa camada é a Camada dos Services . Ela fica situada entre as camadas de controller e model e é responsável pela nossa lógica de negócio. O modelo, então, passa a ser responsável somente pelo acesso a dados.
Você pode ver isso de outra forma: para evitar que o modelo fique grande demais, ele é quebrado em duas outras camadas, cada uma com parte da responsabilidade.
Pense nessa camada como o chef da cozinha do nosso restaurante. Ele é quem sabe as receitas e delega as funções para os funcionários depois de receber o pedido do garçom.

## Uma boa camada de serviço:

- Deve centralizar acesso a dados e funções externas. Exemplo: chamar um evento que dispara uma mensagem no Slack;
- Deve abstrair lógica de negócio complexa do seu modelo;
- Não deve ter nenhum tipo de informação sobre o acesso a camada de dados. Exemplo: não ter nenhuma query SQL;
- Não deve receber nada relacionado ao HTTP, seja o request ou o response . O controller deve mandar apenas o necessário para o service .


Para colocar em prática os conceitos de controller e service vamos adicionar essas camadas à aplicação de autores que você viu ontem no conteúdo.
Crie os arquivos abaixo numa pasta chamada hello-msc

// hello-msc/package.json

{
  "name": "hello-msc",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "Tryber",
  "license": "GPL-3.0",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "express-rescue": "^1.1.31",
    "joi": "^17.4.0",
    "mongodb": "^3.6.4",
    "nodemon": "^2.0.7"
  }
}

// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});


// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});