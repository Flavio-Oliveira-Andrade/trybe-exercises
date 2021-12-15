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

### Boas Praticas em Arquitetura de Software

Indiferente de qual padrão arquitetural você vai usar, existem algumas boas práticas que você deve sempre manter em mente, independente do padrão a ser seguido.
Pense antes de escrever código!
A primeira coisa é você entender qual é o problema que será resolvido e, a partir daí, começar a pensar em uma solução em nível de arquitetura.
Imagine o seguinte cenário:
"Quero criar uma aplicação que mostra todas as fotos que as pessoas tiraram com base na localização. As versões mobile native e web serão parecidas, mas apenas a mobile poderá tirar fotos." - Cliente, Seu
Beleza! Pensando que vamos ter múltiplos clientes com funcionalidades semelhantes, faz sentido termos uma API, certo?
Pensando mais a fundo na arquitetura da API, é de se imaginar que vamos ter que subir as fotos em algum serviço de hospedagem (em vez de armazená-las nós mesmos), e vamos salvar no banco apenas a URL gerada após o upload . Nesse caso, faz bastante sentido termos uma camada de serviço que vai orquestrar essa parte de hospedagem.
Claro que, na prática, não é tão simples assim. 😬 Mas isso é só um exemplo de como você deve pensar em qual arquitetura faz mais sentido para o problema que está tentando resolver para, só depois, começarmos a codificar!
Pense em Componentes
Isso é bem parecido com o que nós fazemos com React! Você se lembra do princípio por trás dos componentes?
A intenção é que nossas aplicações sejam construídas com pequenos pedacinhos de código sem dependências entre si. A mesma coisa se aplica numa API também!
Dentro das suas camadas, mantenha cada controller, cada model e cada serviço pequeno e o mais desacoplado possível das outras partes. Faça com que eles se comuniquem somente através de interfaces muito bem definidas. Não deixe que um componente acesse diretamente o que está dentro de outro. Isso vai facilitar muito na hora de dar manutenção, reutilizar e testar seu código.
Mantenha suas pastas organizadas
Existem algumas maneiras de organizar as pastas em um projeto, mas vamos citar duas: por domínio/correlação e por papel técnico .
Por domínio/correlação , nós mantemos todos os arquivos que têm relação com um Author , por exemplo, na mesma pasta, independente da responsabilidade de cada arquivo:
Copiar
└── author
│   ├── authorController.js
│   ├── authorService.js
│   └── authorModel.js
└── book
│   └── bookController.js
│   └── bookService.js
│   └── bookModel.js
Por papel técnico é como temos exemplificado até agora (não que seja necessariamente melhor). Todos os controllers em uma pasta, todos os services em outra e por aí vai:
Copiar
└── controllers
│   ├── authorController.js
│   └── bookController.js
└── services
│   ├── authorService.js
│   └── bookService.js
└── models
│   ├── authorModel.js
│   └── bookModel.js
Muitas vezes, você vai utilizar um framework em que essa decisão já foi tomada. Nesse caso, siga com o padrão.
Mantenha o Express o mais longe possível .
O mais longe possível quer dizer que devemos criar fronteiras bem definidas entre o Express e o "resto da sua aplicação".
Isso significa manter os objetos req e res dentro do escopo do controller e nunca passá-los inteiros para as partes do app que cuidam da lógica de negócio.
Tomando essa precaução simples, você vai evitar ficar criando mocks para esses objetos quando for escrever testes unitários, por exemplo.
Se o seu modelo precisa apenas dos campos user e password para fazer o login de alguém, para que passar para ele o objeto req e mandar todos os headers que vieram na requisição?
Observe este exemplo:
Copiar
const userController = async (req, res) => {
  try {
    // ruim 😧
    await UserService.create(req);

    // bom! 😊
    const { email, password } = req.body;
    await UserService.create(email, password);

    res.send({ message: 'Tudo certo!' });
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};
Usando essas fronteiras como exemplo, nada além da camada de controle deveria saber que o Express existe .
Mantenha sua configuração separada (e segura)
Nos exemplos de aula, vimos que as informações sensíveis, como credenciais de acesso ao banco de dados, estavam todas expostas no nosso código. 😱
Só fizemos isso para fins didáticos. Uma ótima prática é usar variáveis de ambiente para controlar coisas relacionadas à configuração geral da sua aplicação (em qual banco se conectar, para qual URL apontar etc.). Variáveis de ambiente são variáveis que podem ser definidas no sistema operacional e, portanto, podem ser diferentes para cada ambiente (computador). Por exemplo, no seu computador local, a URL do banco é uma, mas, no servidor da aplicação, a URL do banco é outra. Para fazer isso funcionar, você pode utilizar uma variável de ambiente chamada DB_URL e utilizar valores diferentes para ela no servidor e na sua máquina local.
OK, e como eu acesso essa variável no código?
O ambiente Node tem uma variável global que se chama process ; dentro dela temos um objeto env que armazena os valores de todas as variáveis de ambiente definidas no sistema operacional.
Podemos setar variáveis de ambiente pelo terminal:
Copiar
DB_URL="mongodb://localhost:27017" node index.js
Copiar
// index.js

console.log(process.env.DB_URL) // mongodb://localhost:27017
No entanto, uma forma melhor e mais fácil, quando temos muitas variáveis, é criar um arquivo .env na raiz do projeto e usar a biblioteca dotenv , que basicamente pega o conteúdo desse arquivo e o deixa acessível via process.env .
Copiar
npm install dotenv
Copiar
# .env
PORT=3000
DB_URL=mongodb://localhost:27017
DB_NAME=model_example
Copiar
// index.js

require('dotenv').config();
// ...

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// Server listening on port 3000
Copiar
// models/connection.js
const mongoClient = require('mongodb').MongoClient;

const connection = () => {
  return mongoClient
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(process.env.DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;
Por último, não se esqueça de colocar o .env no .gitignore , pois não vamos querer versionar esse arquivo.
Dessa forma, as configurações da sua aplicação podem mudar de acordo com o ambiente, ou até mesmo com o tempo ficam separadas do código, que é o mesmo em qualquer ambiente. Além disso, você não estará mais adicionando dados sensíveis ao seu repositório, visto que o arquivo .env contém esses valores e não será versionado.
