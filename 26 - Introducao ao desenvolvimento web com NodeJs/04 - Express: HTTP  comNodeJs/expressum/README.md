### O que vamos aprender?

Você vai relembrar alguns conceitos importantes sobre o que é o HTTP, além de entender o que é uma API e para que elas servem.
Você vai aprender como utilizar um dos mais famosos e importantes frameworks na construção de APIs com Node: o Express !
Você vai entender como ele funciona e como seu sistema de rotas e middlewares se encaixam para formar uma aplicação pronta para ir para a produção.

### Você será capaz de:

Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express
Escrever APIs utilizando Node e Express;
Entender a estrutura de uma aplicação Express e como organizar seu código;
Criar rotas e aplicar funções que processam requisições HTTP.

### Por que isso é importante?

O protocolo HTTP é a fundação da web moderna. Ele é a base da comunicação de boa parte do que acontece na web e, portanto, entender bem seu funcionamento é essencial para desenvolver boas aplicações web.
Inicialmente criado para transportar documentos e mensagens simples, o HTTP hoje é responsável pelo tráfego de todo tipo de informação na internet. Boa parte do que é enviado e recebido via HTTP são requisições e respostas a APIs HTTP . É sobre essas APIs que você aprenderá hoje.
APIs são pontos de comunicação entre dois sistemas diferentes, e APIs HTTP são as mais utilizadas para comunicação na web. Para ficar nítido, imagine que você precisa que seu Front-End consulte alguns dados do seu banco de dados. Não faz sentido colocar, por exemplo, o usuário e senha do banco no meio do seu JavaScript e criar uma conexão direta, faz? Se fizéssemos algo do tipo, estaríamos, dentre outras coisas, simplesmente expondo o acesso a todo nosso banco de dados a qualquer pessoa que executasse um "Inspecionar elemento" na página.
Mas então, como o Front-End se comunica com o banco de dados?

### Entra no palco, o Back-End .

As APIs HTTP, que são o que forma o Back-End da maioria das aplicações web, são as responsáveis por ler os dados no banco e entregá-los para o Front-End, ou por receber dados do Front-End e armazená-los no banco de dados.
Inclusive, você já consumiu APIs HTTP em projetos como o Star Wars e o Online store, e agora chegou a hora de aprender a criar suas próprias APIs para que suas aplicações Front-End (sejam elas web, mobile, desktop ou de qualquer outro tipo) possam se comunicar com seu banco de dados e tomar proveito de regras que seu sistema venha a ter.
Um ponto importante sobre as APIs HTTP é que tudo o que está nelas é reutilizável por qualquer cliente . Se você cria um endpoint para cadastrar pessoas usuárias, por exemplo, todo o Front-End da sua aplicação vai consumir esse mesmo endpoint , não importa em qual aplicação seja usada (web ou mobile).
## Utilizando APIs, fazemos ainda mais, com menos código!

### [] HTTPS 
Antes de falarmos mais sobre APIs HTTP, vamos relembrar os principais conceitos sobre esse protocolo e entender quais informações podemos enviar ou receber quando estivermos falando com um servidor HTTP.
Vamos relembrar o que compõe uma requisição HTTP. Para isso, analisaremos a requisição que é feita pelo navegador quando abrimos a página https://developer.mozilla.org .

GET / HTTP/1.1
Host: developer.mozilla.org
Accept: text/html

Vejamos quais são as informações presentes nessa requisição:
O método HTTP, definido por um verbo em inglês. Nesse caso, utilizamos o GET , que normalmente é utilizado para "buscar" algo do servidor, e é também o método padrão executado por navegadores quando acessamos uma URL. Veremos mais sobre verbos HTTP em breve.
O caminho, no servidor, do recurso que estamos tentando acessar. Nesse caso, o caminho é / , pois estamos acessando a página inicial.
A versão do protocolo (1.1 é a versão nesse exemplo).
O local (host) onde está o recurso que se está tentando acessar, ou seja, a URL ou o endereço IP servidor. Nesse caso, utilizamos developer.mozilla.org , mas poderia ser localhost:3000 , caso você esteja trabalhando localmente.
Os headers . São informações adicionais a respeito de uma requisição ou de uma resposta. Eles podem ser enviados do cliente para o servidor, ou vice-versa. Na requisição de exemplo, temos o header Host , que informa o endereço do servidor, e o header Accept , que informa o tipo de resposta que esperamos do servidor. Um outro exemplo bem comum são os tokens de autenticação, em que o cliente informa ao servidor quem está tentando acessar aquele recurso: Authorization: Bearer {token-aqui} . Alguns exemplos extras de headers podem ser vistos aqui. .
Esses são os dados transmitidos em uma request do tipo GET . No entanto, o GET não é o único método HTTP existente. Na verdade, existem 39 métodos diferentes! Os mais comuns são cinco: GET , PUT , POST , DELETE e PATCH , além do método OPTIONS , utilizado por clientes para entender como deve ser realizada a comunicação com o servidor.
A principal diferença entre os métodos é o seu significado. Cada método costuma dizer para o servidor que uma operação diferente deve ser executada. O método POST , por exemplo, costuma ser utilizado para criar um determinado recurso naquele servidor.
Além da diferença de significado, requisições do tipo POST , PUT e PATCH carregam mais uma informação para o servidor: o corpo, ou body . É no corpo da requisição que as informações de um formulário, por exemplo, são transmitidas.
Quando um servidor recebe uma requisição, ele envia de volta uma resposta . Veja um exemplo:

HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada).>


A composição da resposta é definida por:
A versão do protocolo (1.1 no nosso exemplo).
O código do status, que diz se a requisição foi um sucesso ou não (nesse caso, deu certo, pois recebemos um código 200 ), acompanhado de uma pequena mensagem descritiva ( OK , nesse caso).
Os Headers , no mesmo esquema da requisição. No caso do exemplo acima, o Content-Type diz para o navegador o que ele precisa fazer. No caso do HTML, ele deve renderizar o documento na página.
Um body , que é opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo.
Após a resposta, a conexão com o servidor é fechada ou guardada para futuras requisições (seu navegador faz essa parte por você).
Note que tanto requisições quanto respostas podem ter headers e um body. No entanto, é importante não confundir uma coisa com a outra: o body e os headers da requisição representam a informação que o cliente está enviando para o servidor . Por outro lado, o body e os headers da resposta representam a informação que o servidor está devolvendo para o cliente .

### APIs

API é uma sigla para A pplication P rogramming I nterface. Ou seja, Interface de programação de aplicação .
Isso quer dizer que uma API é, basicamente, qualquer coisa que permita a comunicação, de forma programática, com uma determinada aplicação.
Um tipo muito comum de API são as APIs HTTP, que permitem que códigos se comuniquem com aplicações através de requisições HTTP. É desse tipo de API que boa parte da web é feita.
Elas são extremamente importantes nos dias de hoje, em que temos múltiplos clients (web, apps mobile, tvs, smartwatches etc.) se comunicando com o mesmo servidor! É assim que seu Netflix está sempre sincronizado entre seu celular, seu computador e sua televisão. 😃
Nos projetos de front-end, você integrou várias APIs com suas aplicações.
Agora, veja o vídeo abaixo com mais detalhes sobre o que é uma API:

### Contextualizando

A partir de agora, você irá criar APIs, que vão receber requisições e devolver dados , passando por validações , regras de negócio , acesso ao banco de dados , etc.
Se compararmos uma aplicação web a um restaurante, o Front-End é a área das mesas , garçons e garçonetes: é onde a comunicação direta com clientes acontece, onde os pedidos são anotados, e também a parte que leva as receitas da cozinha até a mesa das pessoas.
O Back-End, por sua vez, é cozinha . É onde uma pessoa cozinheira, mediante o recebimento de um pedido, vai preparar os ingredientes , montar a receita e devolvê-lo para que uma pessoa atendente apresente esse prato a quem o pediu . É no Back-End que os dados serão filtrados , manipulados e preparados para envio ao Front-end. Esse, por sua vez, se encarrega de apresentá-los a quem fez o pedido.
Ainda na analogia da cozinha, uma API seria o quadro de pedidos que os setores de "Cozinha" e "Atendimento" usam para se comunicar:
Quando o client envia uma requisição para o Back-End , é como se uma pessoa atendente anotasse o pedido em um papel e o colocasse no balcão para ser preparado pela cozinha .
Quando o servidor envia a resposta para a requisição do client , ele mostra essas informações ao usuário via Front-End. É como se a cozinha entregasse o prato que foi pedido para que o atendente o leve para a mesa da pessoa cliente.
Pra ilustrar, a coisa toda funciona como a imagem abaixo:
Daqui pra frente, vamos focar nos conceitos e na construção das APIs, visto que uma API bem feita, assim como um quadro de pedidos bem organizado, pode ser a chave para uma aplicação (ou um restaurante) bem sucedida. 🧑‍🍳💻

### E o Express?

O express é um framework Node.js criado para facilitar a criação de APIs HTTP com Node. Ele nos fornece uma série de recursos e abstrações que facilitam a vida na hora de decidir quais requisições tratar, como tratá-las, quais regras de negócio aplicar e afins.
O framework foi construído pensando em um padrão de construção de APIs chamado de REST, que você vai estudar mais à frente. Seu objetivo é nos ajudar a construir APIs de forma mais fácil, essencialmente nos permitindo criar APIs altamente funcionais com metade do trabalho que teríamos para fazer isso "na mão".
Existem outras ferramentas semelhantes no mercado, mas o Express é largamente adotado na comunidade hoje, e dois dos motivos são:
Ele foi lançado no final de 2010, ou seja, é um framework maduro e “testado em batalha”;
Ele é um "unopinionated framework" (framework sem opinião). Isso significa que ele não impõe um padrão de desenvolvimento na hora de escrever sua aplicação.
Hoje, o Express faz parte da Node.js Foundation . Isso demonstra o quão relevante ele é para a comunidade


### Criando uma aplicação com Express

mkdir hello-express
cd hello-express
npm init -y

npm i express
touch index.js

const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}

node index.js

### nodemon 

Uma vez que nossa API está rodando e fazemos modificações no seu código é preciso parar e reiniciar a aplicação executando novamente o node index.js . Faça um teste: Deixe sua aplicação rodando e modifique o código da rota /hello para ficar assim:

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá mundo!'); 
}

Abra o navegador e faça uma requisição novamente para a URL http://localhost:3000/hello. Você vai perceber que o código continua retornando a mensagem 'Hello World!' . Para que a mudança seja aplicada você deve parar a aplicação (CTRL+c) e iniciar a aplicação novamente. É bem trabalhoso ter que fazer isso sempre que mudarmos qualquer coisa no nosso código, não é mesmo?
Para facilitar nosso fluxo de desenvolvimento podemos utilizar um pacote chamado Nodemon que reinicia a aplicação toda vez que editamos e salvamos os nossos arquivos. Para utilizar esse pacote, vamos começar instalando ele na nossa aplicação.


npm i nodemon -D

Observe que passamos o parâmetro -D que indica ao npm que esse pacote deve ser instalado como uma dependência de desenvolvimento. Por enquanto, não precisamos nos preocupar com o que isso significa. Para poder automatizar o uso do nodemon, vamos abrir nosso arquivo package.json e adicionar a seguinte linha:


//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon index.js"
//  },
// ...


npm run dev

Pronto, agora sempre que fizermos qualquer alteração no nosso código e salvarmos o arquivo, o Nodemon automaticamente reinicia a aplicação para aplicar as modificações. Faça alguns testes mudando a mensagem retornada e fazendo uma nova requisição para a URL que fizemos.
⚠️ Atenção ⚠️ Apesar de ser uma ferramenta muito útil para desenvolvimento, o Nodemon não deve ser utilizado para rodar a aplicação, pois caso seja disponibilizada para a pessoa usuária final (ou seja, em produção), podemos ter problemas de reinicialização da aplicação, devido ao fato de que qualquer alteração em qualquer arquivo afete a aplicação, fazendo com que toda ela seja reiniciada. Para executar uma aplicação em produção , deve-se utilizar o script start com o comando node index.js .
Agora, podemos partir de cabeça para entender como criar uma API utilizando o Express.

### Roteamento 

O aspecto mais básico de uma API HTTP se dá através de suas rotas , também chamadas de endpoints . Uma rota ou endpoint é definida pelo método HTTP e caminho .

Na nossa aplicação de "Hello, world!", por exemplo, registramos uma rota GET /hello . Repare que, se tentarmos utilizar qualquer outro método ou qualquer outro caminho para acessar essa rota, receberemos um erro do Express, juntamente com um status 404 - Not Found .


A forma que o Express trabalha com rotas é a seguinte: ao registrarmos uma rota, estamos dizendo para o Express o que fazer com requisições que contenham aquele método e caminho . Voltando para a nossa cozinha, é como se estivéssemos definindo, no nosso quadro de pedidos, que os pedidos que levam carne devem ser, primeiro, preparados pela pessoa responsável pela chapa, enquanto pedidos que sejam compostos apenas de vegetais (como saladas) devem ser preparados pela pessoa responsável pelo corte de legumes e verduras.
Ou seja, o roteamento consiste em "direcionar" uma requisição para que seja atendida por uma determinada parte do nosso sistema.
No Express, nós registramos uma rota utilizando a assinatura app.METODO(caminho, callback) , onde a função de callback recebe três parâmetros: request , response e next .
request : comumente chamado de req ; contém as informações enviadas pelo cliente ao servidor.
response : geralmente chamado de res ; permite o envio de informações do servidor de volta ao cliente.
next : função que diz para o Express que aquele callback terminou de ser executado, e que ele deve prosseguir para executar o próximo callback para aquela rota. Este parâmetro é opcional e você entenderá melhor o uso do next em breve.
As rotas respondem a requisições que satisfaçam a condição método HTTP + caminho 

const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


### Estruturando uma API 

Para entendermos na prática como utilizar o Express e o seu sistema de rotas para criar uma API funcional, vamos partir do seguinte cenário: Temos uma aplicação que permite gerenciar uma lista de receitas disponíveis, com seus respectivos nomes, preço e tempo médio de preparo. Essa aplicação é uma API que implementa CRUD, ou seja, um conjunto de endpoints que permite listar, pesquisar, cadastrar, editar e remover os itens dessa lista de receitas. Até o final do dia, vamos implementar uma API que permite fazer todas essas operações.
Vamos começar implementando o endpoint que retorna a lista de receitas na rota /recipes quando a requisição for do tipo GET . A lista de receitas virá de uma array que vamos definir no código. Siga o exemplo abaixo:


/* index.js */
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

Agora, deixamos de usar o método .send para usar o método .json . O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que vai ser retornado. Mas para deixar mais evidente que o que vamos devolver é um JSON usamos o método .json .
Para testar nossa aplicação, podemos fazer uma requisição usando o próprio navegador, colocando a URL http://localhost:3001/recipes . Porém como nem todo tipo de requisição HTTP pode ser feita diretamente pelo navegador, é recomendado utilizar algum cliente HTTP. Os mais famosos são o Postman e o Insomnia . No vídeo da seção anterior apresentamos o uso do httpie que permite fazer uma requisição direto pelo terminal. Depois de instalá-lo, experimente rodar o comando abaixo:

http :3001/recipes

Observe que não é preciso colocar a URL completa, já que o HTTPie assume que as requisições são feitas para localhost por padrão. Após rodar o comando você deve conferir que ele vai retornar uma resposta como mostrado abaixo.

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 205
Content-Type: application/json; charset=utf-8
Date: Fri, 20 Aug 2021 22:06:58 GMT
ETag: W/"cd-wMzyMLQRx8RrJ9Bl5KB9X7VuhcA"
Keep-Alive: timeout=5
X-Powered-By: Express

[
    {
        "id": 1,
        "name": "Lasanha",
        "price": 40,
        "waitTime": 30
    },
    {
        "id": 2,
        "name": "Macarrão a Bolonhesa",
        "price": 35,
        "waitTime": 25
    },
    {
        "id": 3,
        "name": "Macarrão com molho branco",
        "price": 35,
        "waitTime": 25
    }
]

Ok! Mas o que isso significa de fato? Esse JSON que foi retornado pode ser utilizado por uma aplicação front-end para renderizar essa lista no navegador utilizando o método fetch, que foi utilizado bastante nos nossos exercícios e projetos desde o módulo de fundamentos e principalmente nos projetos de front-end. A diferença é que agora a requisição vai ser feita para uma API que você mesmo desenvolveu e que roda na sua máquina. A estrutura básica de uma requisição utilizando o fetch pode ser escrita da seguinte forma:

fetch('http://localhost:3001/recipes')
    .then(resp => resp.json())

Para dar mais visibilidade, imagine um componente React que precisa exibir essa lista. Ele ficaria mais ou menos assim:


class receitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        { 
          recipes,
          isLoading: false,
        },
      ));
  }

  render() {
    const { recipes, isLoading } = this.state;
    
    return (
      <div>
        <div>
          {isLoading && <Loading />}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


⚠️ Observação: Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação, é preciso instalar um módulo que libera o acesso da nossa API para outras aplicações. Para isso basta instalar um módulo chamado cors usando npm i cors e adicionar as seguintes linhas no seu arquivo index.js .


// const express = require('express');
// const app = express();
const cors = require('cors');

app.use(cors());


Vamos falar um pouco mais sobre esse módulo no conteúdo de amanhã, mas caso deseje testar integração entre front-end e back-end é necessário fazer esse ajuste no código da API.



Para Fixar
Crie uma array drinks com os seguintes obejtos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.
Pronto, já temos uma rota da nossa API que devolve a lista dos receitas disponíveis, mas não precisamos parar por aqui. E se quiséssemos conseguir acessar uma receita específicA pelo seu id ? ou mesmo procurar por todas os receitas que tem a palavra Macarrão no nome? Além disso, como fazemos para permitir adicionar, editar ou remover receitas da lista através da nossa API?
Tudo isso é o que vamos ver daqui em diante.















 


