### o Que Vamos Aprender ?
Na aula de hoje  vamos aprender  e entender mais detalhes sobre Express,
entender de fato o que sao middlewares, como organizar nossas rotas separando
em diferentes arquivos e tambem como lidar com erros no Express.

### Você será capaz de:
Aprender sobre o conceito de middlewares e encadeamento de middlewares usando a função next .
Passar valores entre middlewares.
Como organizar as rotas usando Router .
Tratar erros com middleware de erros.

## Middlewares
A primeira coisa que você precisa saber sobre middlewares é que, no Express qualquer função passada para uma rota é um middleware , seja de forma direta ou indireta. Como assim?
Para o Express, um middleware é uma função que realiza o tratamento de uma request e que pode encerrar essa request, ou chamar o próximo middleware.
Bom, para te contar um segredo : estamos usando middlewares desde o começo desse conteúdo, mas com outro nome! Até agora, nos referimos aos middlewares como callback ao falar sobre roteamento e definição de endpoints. Acontece que todos os callbacks que mostramos nessas rotas são middlewares.
Na prática, essas funções recebem três parâmetros: req , res e next , exatamente como as funções callback que usamos até agora para registrar rotas. Middlewares podem retornar qualquer coisa , incluindo Promises. O fato é que o Express ignora o retorno dos middlewares, visto que o importante é se aquele middleware chamou ou não um método que encerra a request, ou a função next .
Por exemplo, vamos considerar que temos o seguinte cenário onde na nossa API de CRUD de receitas precisamos validar se o nome não foi enviado vazio ao cadastrar uma nova receita.

// ...
app.post('/recipes',
function (req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1

  next(); // 2
},
function (req, res) { // 3
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
// ...

# Essa requisição vai retornar { message: 'Invalid data!'}
http POST :3001/recipes price:=40
# Experimente chamar essa request com o código correto, e depois comentando o next. A requisição não vai retornar uma resposta.
http POST :3001/recipes name=Macarronada price:=40

Uma das vantagens do Express suportar diversos middlewares é que podemos reaproveitar alguns deles para serem utilizados em diversas rotas. No nosso caso essa função que valida se o nome foi enviado poderia ser também aproveitada para a rota PUT /recipes/:id . Para isso vamos tirar a definição dessa função de dentro da rota POST /recipes e aplicá-la para ser usada nas duas rotas.

// ...
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...

Pronto. Agora o middleware que valida se o nome foi enviado foi isolado para uma função e conseguimos aplicá-la nas rotas para cadastrar e editar uma receita.
Para ficar nítido, todo middleware, pode receber o next como um terceiro parâmetro, mas geralmente no caso do último middleware de uma rota, que processa a resposta da requisição caso todos os middlewares anteriores não tenham encerrado o fluxo, não temos necessidade de usar o objeto next por isso podemos simplesmente receber apenas os objetos req e res .

Criando middlewares globais com app.use

Outra forma de utilizar middlewares é quando precisamos reaproveitar um middleware para todas as rotas da nossa aplicação (ou uma boa parte destas). Vamos criar uma forma de autenticar se um determinado usuário pode ter acesso a nossa API de receitas. Para isso, será necessário enviar as informações de nome de usuário e senha pelo Header da requisição (⚠️ Este é um exemplo didático, na prática vamos utilizar abordagens mais seguras de fazer esse tipo de autenticação, por exemplo utilizando JWT).
Vamos começar definindo nosso middleware em um arquivo separado: auth-middleware.js .

/* auth-middleware.js */
const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

module.exports = authMiddleware;

No código acima temos um middleware que, ao receber uma requisição, verifica se ela possui no header as informações username e password . Se alguma das informações não foi enviada, esse middleware retorna uma mensagem dizendo que essas informações não podem ser vazias. Na sequência, é feita uma segunda verificação para checar se os valor de username e password são iguais aos valores pré-determinados no objeto validUser (Na prática, em uma aplicação de verdade, esse objeto validUser teria os valores vindo do banco de dados e não hard-coded ).
Caso nenhuma dessas opções seja verdadeira, uma resposta é enviada ao client dizendo que não foi possível realizar a autenticação. Ao enviarmos uma resposta para o client, impedimos que qualquer outro middleware seja executado depois desse. Caso esteja tudo certo com o header, o middleware chama a função next que, basicamente, diz ao Express "ok, terminei aqui, pode chamar o próximo que disse que queria saber de requisições pra essa rota".
Para utilizarmos esse middleware de autenticação, vamos alterar o arquivo index.js .

// const express = require('express');
// const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

// const app = express();
// app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

// const recipes = [
//  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
//  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
//  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
// ];
//
// function validateName(req, res, next) {
//  const { name } = req.body;
//  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});
//
//  next();
// };

// app.get('/recipes', function (req, res) {
//  res.status(200).json(recipes);
// });
//
// app.get('/recipes/pesquisar', function (req, res) {
//  const { name, maxPrice } = req.query;
//  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
//  res.status(200).json(filteredRecipes);
// });
//
// app.get('/recipes/:id', function (req, res) {
//  const { id } = req.params;
//  const recipe = recipes.find((r) => r.id === parseInt(id));
//  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
//
//  res.status(200).json(recipe);
// });
//
// app.post('/recipes', validateName, function (req, res) {
//  const { id, name, price } = req.body;
//  recipes.push({ id, name, price });
//  res.status(201).json({ message: 'Recipe created successfully!'});
// });
//
// app.put('/recipes/:id', validateName, function (req, res) {
//  const { id } = req.params;
//  const { name, price } = req.body;
//  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
//
//  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });
//
//  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
//
//  res.status(204).end();
// });
//
// app.delete('/recipes/:id', function (req, res) {
//  const { id } = req.params;
//  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
//
//  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });
//
//  recipes.splice(recipeIndex, 1);
//
//  res.status(204).end();
// });
//
// app.all('*', function (req, res) {
//  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });
//
// app.listen(3001);

Observe que adicionamos uma rota, antes do app.use . Aqui é importante destacar que o app.use só afeta as rotas que vem abaixo da sua definição. Ou seja, todas as rotas do nosso CRUD de receitas vão passar pelo middleware de autenticação, enquanto a rota /aberto não, por que foi definida antes da linha do app.use . Vamos testar: Tente fazer uma requisição para as rotas GET /aberto e GET /recipes .

http GET :3001/aberto # execute apenas essa linha
> HTTP/1.1 200 OK
> Connection: keep-alive
> Content-Length: 55
> Content-Type: text/html; charset=utf-8
> Date: Sun, 22 Aug 2021 21:12:24 GMT
> ETag: W/"37-ZXNKqzv8YdcuUTIY0Egz9o2J97U"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> Esta rota não passa pelo middleware de autenticação!
http GET :3001/recipes # execute apenas essa linha
> HTTP/1.1 401 Unauthorized
> Connection: keep-alive
> Content-Length: 60
> Content-Type: application/json; charset=utf-8
> Date: Sun, 22 Aug 2021 21:13:36 GMT
> ETag: W/"3c-p35mvWqky25aPCJVo0WioEMrIRQ"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> {
>     "message": "Nome de usuário e senha não podem ser vazios"
> }

Para poder fazer a requisição para os nossos endpoints que começam com /recipes , precisamos mandar os dados de autenticação no body da requisição. Abaixo estão alguns exemplos.

http GET :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn # listar receitas
http POST :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn nome=Churrasco id:=5 preco:=30 # cadastrar um novo receita
http POST :3001/recipes/2 username:MestreCuca password:MinhaSenhaSuperSeguraSqn nome=Lasanha preco:=45 # editar um receita

Para enviar parâmetros no header de uma requisição, utiliza-se o formato <chave>:<valor> enquanto no body da requisicão usa-se <chave>=<valor> ou <chave>:=<valor> como já vimos. No exemplo para request do tipo POST e PUT podemos ver como enviar informações no header e no body ao mesmo tempo.
Agora, entedemos como usar o app.use para criar middlewares genéricos, geralmente utilizados para operações de autenticação ou algum tipo de tratamento prévio dos dados recebidos na requisição. Agora que entendemos isso, vamos aprender como é possível enviar informações entre um middleware e outro.


### passando vaoleres entre  middlwares com objeto req

Middlewares também podem modificar o objeto req , e essas modificações serão recebidas pelos próximos middlewares, caso next seja chamado. Isso geralmente é utilizado para propagar informações de um middleware para o outro.
Por exemplo, vamos considerar que agora além de um único usuário válido para o nome de um restaurante temos vários usuários válidos, e ao cadastrar e editar queremos passar o objeto do usuário encontrado para os middlewares do CRUD terem acesso a esse usuário válido.

Vamos mudar na definição do nosso método de cadastrar uma receita para que ele tenha acesso ao objeto user que foi anexado ao objeto req para poder salvar o respectivo username desse usuário como um atributo do receita.

// ...
app.use(authMiddleware);

// ...

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});
// ...

Observe que tivemos acesso ao objeto req.user que veio do nosso middleware authMiddleware . Dessa forma aproveitando o encadeamento entre middlewares conseguimos passar informações entre middleware sempre que for necessário. O objeto req praticamente aceita qualquer atributo que você quiser definir, só é preciso
## tomar cuidado para não sobrescrever nenhum dos atributos padrão (req.body, req.headers, req.params, req.query, etc).

## Pacotes que são middlewares
Existem alguns pacotes que nos fornecem ferramentas necessárias para o desenvolvimento de nossas aplicações. Um exemplo disso é o módulo body-parser, que utilizamos ontem. Ele é um middleware que lê o corpo da request, cria nela uma propriedade body e coloca o conteúdo do corpo lá. Para utilizá-lo e ter acesso às informações do corpo da request, só precisamos instalá-lo com npm i body-parser e registrá-lo na nossa aplicação:
A função json() utilizada na linha app.use(bodyParser.json()); diz ao body-parser que queremos um middleware que processe corpos de requisições escritos em JSON. Se executarmos nossa API script acima e fizermos uma requisição do tipo POST conseguimos ter acesso aos valores enviados no body da requisição. Porém se tirarmos o uso deste middleware, você irá perceber que as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.
ℹ️ Faça o teste ℹ️ : Copie o script abaixo, cole-o em um arquivo chamado server.js e execute-o com o comando node server.js . Em seguida, abra o Postman ou o Insomnia e realize a request POST localhost:3000/hello , passando o JSON { "name": "<seu nome aqui">" } .


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.name}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });

Experimente comentar a linha 5 do script, executar novamente o arquivo e realizar uma nova request para o endpoint POST /hello e perceba que, sem o body-parser , req.body é undefined.
Outro middleware bem comum de utilizarmos nas nossas aplicações back-end é o cors , que permite que nossa API receba requisições de outras aplicações, como por exemplo, uma aplicação front-end que consuma nossa API. O uso básico desse módulo é instalá-lo usando npm i cors e adicionando as seguintes linha no nosso código.


const cors = require('cors');

app.use(cors());

Agora, qualquer requisição que você fizer de outra aplicação vai responder, pois temos o middleware cors . Caso não o tivéssemos, o navegador bloquearia as requests do nosso front-end para nossa API. O cors tem um conjunto de configurações que permitem criar regras específicas, de quem e como as requisições podem ser feitas. Por enquanto, não precisamos nos preocupar com isso já que estamos desenvolvendo aplicações apenas em ambiente de desenvolvimento. Porém é importante ter cuidado com essa configuração ao subir uma aplicação para ambiente de produção.
Para aprofundar-se em middlewares, assista a este vídeo.

## Router middlewares
Você deve estar pensando: "Nossa! Mas, com tudo isso, meu arquivo principal vai ficar gigante!" 😱
Calma! O Express tem uma solução bem interessante para organizar nossas rotas e middlewares: o Router .
O Router é um middleware que "agrupa" várias rotas em um mesmo lugar, como se fosse uma versão mini do app do Express. Ele é depois "plugado" no "app principal".
Vamos utilizar o Router para organizar o código que desenvolvemos no conteúdo de ontem.

/* recipesRouter.js */
const express = require('express');
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

router.get('/', function (req, res) {
  res.status(200).json(recipes);
});

router.get('/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

router.post('/', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;

Repare no uso de mais um parâmetro na chamada à função app.use . Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho. Repare que, ao registrar uma rota no router, não precisamos repetir a parte do caminho que já passamos para app.use . É por isso que a rota que definimos com router.get('/:id') na verdade se torna acessível através de /recipes/:id .
Routers suportam que qualquer tipo de middleware seja registrado. Ou seja, se tivermos vários endpoints com autenticação e vários endpoints abertos, podemos criar um router, e registrar nele nosso middleware de autenticação, bem como todas as rotas que precisam ser autenticadas, registrando as rotas abertas diretamente no app. Veja abaixo:

/* recipesRouter.js */
// const express = require('express');
// const router = express.Router();

const authMiddleware = require('./auth-middleware');
router.use(authMiddleware);

// ...

// module.exports = router;

## lidando com erros
ate agora, falamos de middleware commus, que recebem  `req , res , e nesxt()`
e tratam uma resquest casi tudo esteja correndo bem, Acontece que existe ainda um outro tipo de
middleware de erro para um middleware mommun e que a assinatura dele recebe quatro parametros ao
inves de 3 , ficando asssim `function (err, req, res, next) {} `

app.use(middleware1);
app.get('/', */ ... */);
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

É importante notar que:
Middlewares de erro sempre devem vir depois de rotas e outros middlewares ;
Middlewares de erro sempre devem receber quatro parâmetros .
O Express utiliza a quantidade de parâmetros que uma função recebe para determinar se ela é um middleware de erro ou um middleware comum. Ou seja, mesmo que você não vá utilizar os parâmetros req , res ou next , seu middleware de erro precisa recebê-los . Você pode adicionar um underline no começo do nome dos parâmetros que não vai usar. Isso é uma boa prática e sinaliza para quem está lendo o código que aquele parâmetro não é utilizado. Por exemplo: function (err, _req, res, _next) {} .
Também é possível encadear middlewares de erro, no mesmo esquema dos outros middlewares, simplesmente colocando-os na sequência em que devem ser executados.
Copiar
app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  /* passa o erro para o próximo middleware */
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.json({ error: err });
});
Repare que estamos fazendo next(err) na linha 4. Isso diz ao Express que ele não deve continuar executando nenhum middleware ou rota que não seja de erro. Ou seja, quando passamos qualquer parâmetro para o next , o Express entende que é um erro e deixa de executar middlewares comuns , passando a execução para o próximo middleware de erro registrado para aquela rota, router ou aplicação.
Esse detalhe é importante, pois se um erro acontece dentro de uma rota ou middleware e nós não o capturamos e o passamos para a função next , os middlewares de erro não serão chamados para tratar aquele erro. Isso quer dizer que nossa API ficará sem responder àquela requisição, ou até mesmo que o erro encerrará o processo do Node. Por isso, lembre-se: Sempre realize tratamento de erros nas suas rotas e middlewares, passando o erro para a função next , caso necessário.
Um exemplo onde o erro fica "flutuando" e não existe resposta do servidor é quando utilizamos um middleware async . Como o Express não faz .catch na Promise retornada pelo middleware, ele não sabe que ocorreu um erro, a não ser que nós capturamos esse erro e o passemos para a função next .
Vamos usar como exemplo um método que lê um arquivo baseado em um parâmetro de rota enviado na requisição. Vamos fazer isso em um arquivo separado diferente dos exemplos anteriores que fizemos até agora.
⚠️ Atenção ⚠️: Jamais devemos realizar a leitura de um arquivo do sistema de arquivos dessa forma. Concatenar parâmetros recebidos do usuário diretamente na chamada para qualquer método representa uma falha gigantesca de segurança. Vamos fazer isso aqui nesse momento para fins didáticos. Repetindo: não tente isso em casa em produção!
Copiar
/* errorHandlerExample.js */
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/:fileName', async (req, res, next) => {
    try {
        const file = await fs.readFile(`./${req.params.fileName}`);
        res.send(file.toString('utf-8'));
    } catch (e) {
        next(e);
    }
});

app.use(function (err, req, res, next) {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);
Nesse caso, tivemos que colocar as duas linhas que executam a leitura do arquivo dentro de uma estrutura try/catch , caso seja disparada alguma exceção, como no exemplo quando o arquivo não existe,o código cai dentro do catch, que por sua vez redireciona para o middleware de erro.
Para testar, execute essa nova API com o comando node errorHandlerExample.js e faça uma requisição para a URL http://localhost:3002/abc . A requisição vai retornar uma resposta similar a essa:
Copiar
{
  "error": "Erro: ENOENT: no such file or directory, open './abc'"
}
Agora, se você criar o arquivo e jogar o conteúdo, por exemplo, usando o comando echo 'abc' > abc e fizer a requisição de novo, a requisição vai retornar uma resposta com o conteúdo do arquivo.
⚠️ Atenção : O parâmetro passado para função next, é sempre um indicador que ele vai redirecionar para o middleware de erro, e não para passar um objeto qualquer entre dois middelwares, para fazer isso, como já vimos no conteúdo de hoje, usamos o objeto req .
Esse mesmo tipo de erro pode acontecer ao fazer uma query para um banco de dados, e ter várias possíveis falhas, como por exemplo: o banco não está respondendo a nosso pedido de conexão, temos uma query escrita errada, as credenciais de acesso ao banco estão erradas. Entre outras.
Para que não seja necessário ter que criar estruturas try/catch sempre que formos utilizar códigos que eventualmente podem disparar excessões podemos usar um pacote chamado express-rescue .


## pacote express-rescue
O pacote express-rescue está disponível no npm e nos ajuda com a tarefa de garantir que os erros sempre sejam tratados. Para utilizá-lo, primeiro faça a instalação usando o comando npm i express-rescue
Para adicionarmos os express-rescue , basta passarmos o nosso middleware como parâmetro para a função rescue que importamos do módulo. Essa função vai gerar um novo middleware que vai fazer o tratameto de erros da middleware sem precisarmos escrever o try/catch . Vamos refatorar o exemplo da seção anterior para usar o express-rescue .
Copiar
/* errorHandlerExample.js */
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);
O que o novo middleware faz é simplesmente executar nosso middleware original dentro de um bloco de try ... catch . Caso ocorra qualquer erro no nosso middleware, esse erro é capturado pelo catch e passado para o next , dando início ao fluxo de erro do Express.
Faça os mesmos testes que fizemos no final da seção anterior e vai ver que o fluxo continua acontecendo da mesma forma, quando a excessão é disparada, a diferença é que nosso código ficou mais enxuto.
Através do uso correto de middlewares de erro, é possível centralizar o tratamento de erros da aplicação em partes específicas dela. Isso facilita a construção dos middlewares de rotas, pois você não precisa ficar tratando erros em todos esses middlewares. Se algo der errado em qualquer rota que estiver envelopada pelo express-rescue , esse erro vai ser tratado pelo middleware de erros mais próximo.
Por último, um padrão muito comum é ter um middleware de erro genérico, e outros middlewares que convertem erros para esse formato genérico. Por exemplo:
Copiar
/* errorMiddleware.js */

module.exports = (err, req, res, next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }

  return res.status(500).json({ message: err.message });
}
O middleware acima verifica se o erro possui um código e um status HTTP . Caso possua, o código e a mensagem são devolvidas na response. Caso contrário um erro genérico de servidor é utilizado.
Copiar
/* index.js */
const express = require('express');
const rescue = require('express-rescue');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get('/:fileName', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
  (err, req, res, next) => {
    if (err.code ==- 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

### app.use(errorMiddleware);
Nesse trecho de código, convertemos um erro de leitura de arquivo para um erro que nosso middleware de erros conhece e sabe formatar. Dessa forma, nos middlewares comuns, precisamos nos preocupar apenas com o caminho feliz ao passo que, nos middlewares de erro, nos preocupamos apenas com o fluxo de erros.
Repare, também, que estamos utilizando um Array para passar mais de um middleware para uma mesma rota. Poderíamos passar cada middleware como um parâmetro, mas um Array deixa mais explícita a intenção de, realmente, utilizarmos vários middlewares numa mesma rota.

### Conclusão
No conteúdo de hoje aprendemos o que são middlewares e diferente formas de associar um middleware com uma rota. Também entendemos como é possível passar valores entre middlewares e como organizar as rotas usando o recurso Router que permite quebrar uma aplicação express em partes menores, que ajuda bastante na organização do nosso código. Por fim, vimos como podemos tratar erros usando o middleware genérico de erro, e como escrever middlewares mais enxutos usando o express-rescue .
Todos esses conceitos vão ser essenciais para nossos próximos passos para desenvolver aplicações web, usando o NodeJS para construir APIs HTTP. Por isso é fundamental que você pratique bastante o desenvolvimento de APIs através dos exercícios e projeto desse bloco.

