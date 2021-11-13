# O que vamos aprender ?
o tema de hoje sobre uma ferramenta: ums rctenção de sockets, uma forma nova e pratica de desenvolver funcionalidades do mundo real sem muita dor de cabeça. Apresentando-lhes o **socket-oi**

O `socket.io`  é um pacote JavaScripts que funciona tento no front-end quando no back-end, ou seja, voce, pode importa-lo tanto no node.js quanto no seu projeto React, Angular, Vuejs ou até mesmo em  projetos sem nenhuma framework. Esse pacote nos permite implementar Ações real time em nossa aplicações, como um sistema de notificações

## Você sera capaz de:
- conseguir desenvolver um server sockets usando o socket.io;
- Emitir eventos personalizados usando o socket-io;

## Porque isso é importante ?
Sockets sao um padrão de counicaçõa muito usado em aplicações real time. Contudo, usar o pacote net do nodeJs é muito custoso quando precisamos fazer uma aplicação de grand porte, e é  nesse momento que temos outras bibliotecas para ajudar.

Diferentimente  da aplicação que fizemos na aula anterior, o socket.io nos permite implementar mecanismos mais complexos do que o que fizemos e de uma forma até mais simples  do que ja vimos. Alguns exemplos dos mecanismos mais complexos que podemos  implementar são: controle de salas, limite do numero de users conectados no servidor, trabalhar com eventos de uma maneira mais customizavel etc.

## O que é socket.io ?

Antigamente, aplicações real time eram feitas atraves de outros padrões. Uma das formas mais comuns de se fazer isso era fazendo o que chamamos de pooling. Pooling é basicamente, ter requisições dentro de loop infinito verificando algo. Socket io é uma implementação para comunicação via sockets, mas o mais importante que isso é ele oferecer a possibilidade de serter um fallBack: uma feature de contigência para quando seu cli/ser nao estiver disponivel

O Socket.io funciona por meio de eventos do Node.js . Podemos ouvir um evento da nossa conexão e fazer com que, por exemplo, uma função seja acionada quando um novo usuário se conectar ao servidor, ou quando uma mensagem for emitida. O Socket.io é usado por inúmeras empresas e pessoas desenvolvedoras. Ele tem muito uso em aplicativos de mensagens instantâneas, análise e monitoramento em tempo real e também streaming e colaboração em documentos. Um detalhe importante: o Socket.io não é uma implementação do WebSocket . Os autores afirmam que "o Socket.io realmente usa o WebSocket como transporte quando possível. Contudo, um cliente WebSocket não poderá se conectar a um servidor Socket.io, e um cliente Socket.IO não poderá se conectar a um servidor WebSocket". Apesar disso, a estrutura do Socket.io se comporta exatamente como o WebSockets, e aqui reside o seu poder.

## Configurando o Socket.io
Além da facilidade de sintaxe no uso do socket.io, ele  tambem cria um servidor para nós, assim como Express. Porem, ao invés de rotas, nós temos uma logica baseada em eventos! é atraves  desses eventos que fazemos a comunicação do cliente com o servidor e do servidor com o cliente! Nesta seção iremos fazer a configuração basica para o socket io funcionar do lado do servidor e do lado do cliente.

$ npm init -y
Feito isso, vamos instalar o Express com:
Copiar
$ npm install express
Dentro da pasta do nosso projeto, vamos criar o arquivo index.js com o seguinte conteúdo:
index.js
Copiar
const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
Note que, na rota raiz, estamos devolvendo um arquivo chamado /index.html . Ele, porém, ainda não existe, então vamos criá-lo!
Dentro do mesmo diretório, vamos criar o arquivo index.html com o seguinte conteúdo:
index.html
Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO - Trybe</title>
  </head>
  <body>
  </body>
</html>
Leia o código e você notará que ainda não estamos fazendo nada, apenas criamos uma página vazia. Rode a aplicação com node index.js e abra seu browser no endereço localhost:3000 .
Passando dessa etapa, vamos instalar o socket.io no projeto:
Copiar
$ npm install socket.io
Após isso, vamos adicioná-lo no nosso servidor:
index.js
Copiar
// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
});

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// http.listen(3000, () => {
//   console.log('Servidor ouvindo na porta 3000');
// });
Começamos implementando a instância do socket.io usando a função io e passando dois parâmetros:
O objeto http que é um servidor HTTP;
Um objeto options para definir a regra de CORS para definir que vamos aceitar conexões do cliente que acessar pela URL http://localhost:3000 usando verbos GET e POST.
Além disso, colocamos um trecho de código que chama a função io.on('connection') , essa função vai ser executada sempre que um novo client se conectar ao servidor. Perceba que dentro dessa função passamos um segundo parâmetro que é um callback com um parâmetro socket . Este parâmetro é a representação de uma conexão aberta ao socket-io rodando no nosso back-end. No objeto socket temos um atributo id que é uma string aleatória que é gerada a cada nova conexão.
Agora, do lado do nosso front-end para que o cliente possa se comunicar com o back-end, nós temos que implementar o script do socket.io dentro da página HTML que fizemos anteriormente. Pode ser usado um link provido pelo CDNJS , que nos dá toda a biblioteca do socket.io para uso no front-end. O link da biblioteca é: https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js .
Se você prefere não usar a versão da biblioteca via CDN, você consegue encontrar um arquivo local assim que baixar o módulo do socket.io . Você terá acesso ao arquivo de que precisa no seguinte caminho: /socket.io/socket.io.js . Para usar, você adiciona uma tag script dessa forma:
Copiar
<script src="/socket.io/socket.io.js"></script>
index.html
Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO - trybe</title>
  </head>
  <body>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();

    </script>
  </body>

</html>
Note que, até então, temos apenas o código const socket = io(); no script. O pacote do socket.io expõe uma função chamada io , que por sua vez é global e, assim que é chamado, executa uma conexão socket com alguém. Esse método por default recebe como parâmetro o mesmo endpoint por onde ele está sendo acessado, ou seja, se estamos na rota http://localhost:3000 , é por aí que ele vai tentar se conectar. Caso você queira se conectar a um servidor num socket específico, basta você informar isso via parâmetro, por exemplo: const socket = io('http://localhost:5000') .
Agora, se você iniciar novamente seu projeto, verá uma mensagem no console.log a cada vez que atualizar a página. Note, que sempre que você carrega a página o id exibido é diferente do anterior. Isso acontece pois cada vez que uma conexão socket é aberta, o callback que definimos na linha io.on('connection') é executado.
Obs.: Uma conexão socket tem um ciclo de vida que começa quando um socket é aberto e encerrado quando o socket é fechado, geralmente ao fechar ou recarregar uma página. Entenderemos melhor sobre isso ao decorrer do conteúdo.
Finalizamos nossa primeira etapa, temos um back-end preparado para receber conexões socket.io e um front-end capaz de se conectar ao socket. Na próxima seção vamos aprender como fazer troca de mensagens entre client e servidor através de eventos.
© Trybe 2021

## Escutando e emitindo eventos customizados

O socket.io possibilita uma comunicação entre cliente-servidor através de eventos. Tanto o cliente como o servidor podem emitir e escutar eventos customizados.
Para demonstrar isso, vamos fazer nosso primeiro exemplo. Implementar um botão que emite um evento PING e fazer com que o back-end escute esse evento.

// ...

// io.on('connection', (socket) => {
// console.log(`Usuário conectado. ID: ${socket.id}`);

  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping!`);
  });
// });

// ...
Vale lembrar que criamos sempre os eventos dentro de connection . No código acima estamos criando o evento personalizado da maneira mais simples possível. Basta colocarmos o nome que queremos dentro do método .on() e pronto, já temos nosso evento personalizado!
A função socket.on() cria um listener , ou seja, uma forma de detectar quando algum cliente emitir um evento personalizado para o servidor. No caso, criamos um listener para o evento ping . Podemos fazer um paralelo da função socket.on com a função document.addEventLintener que faz o registro de um listener de eventos do DOM como o clique em um botão ou ao digitar algo em uma caixa de texto.
Por falar em eventos de DOM, vamos agora fazer um botão e adicionar um listener ao evento de clique para enviar o evento ping para o servidor.
index.html
Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO - trybe</title>
  </head>
  <body>
    <button id='pingButton'>PING</button>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
      const button = document.querySelector('#pingButton');

      button.addEventListener('click', (e) => {
        socket.emit('ping');
        return false;
      });
    </script>
  </body>

</html>
Agora sim, nosso front-end está emitindo um evento para o nosso back-end através da função socket.emit . Perceba agora no terminal que será exibido uma mensagem parecida com essa:
Copiar
YIOksDTBcqbN-X1mAAAJ emitiu um ping!
Nosso trabalho ainda não acabou, no entanto. Por hora, só temos um evento sendo emitido pelo cliente e sendo detectado pelo servidor através de um listener que executa uma função callback para exibir a mensagem ping no terminal.
O próximo passo será emitir um novo evento pong para todas as outras conexões socket abertas.

## Enviando mensagens do back-end para o front-end
Uma forma de enviarmos uma mensagem do servidor para o clientes usando o método emit():

socket.emit('Nome do seu evento', {
  propriedade: 'Do seu objeto',
  enviado: 'Para o cliente da conexão atual'});

  Então, se quisermos mandar uma mensagem para o cliente assim que ele se conectar, basta fazermos:
index.js

// ...
// io.on('connection', (socket) => {
    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

//  socket.on('ping', () => {
//    console.log(`${socket.id} emitiu um ping!`);
//  });
});
// ...


Note que usamos uma string para enviar uma mensagem, mas podemos usar outros tipos de dados, como um número, uma data, um objeto, entre outros tipos.
O primeiro parâmetro da função é o nome do evento, enquanto o segundo conterá os dados enviados para o cliente, que deve estar escutando pelo nome do evento que, nesse caso é ola .
index.html
Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO - trybe</title>
  </head>
  <body>
    <button id='pingButton'>PING</button>=
    <ul id='messages'></ul>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();

      // const button = document.querySelector('#pingButton');
      // button.addEventListener('click', (e) => {
      //   socket.emit('ping');
      //   return false;
      // });

      // cria uma `li` e coloca dentro da `ul` com `id` mensagens
      const createMessage = (message) => {
        const messagesUl = document.querySelector('#messages');
        const li = document.createElement('li');
        li.innerText = message;
        messagesUl.appendChild(li);
      }

      // Quando nosso evento `ola` for emitido, vamos pegar a string mensagem enviada pelo nosso evento e passar para a função `createMessage`
      socket.on('ola', (mensagem) => createMessage(mensagem));
    </script>
  </body>
</html>
Agora faça um teste, abra uma nova aba em uma segunda janela. Note, que cada cliente que se conecta ao servidor recebe uma mensagem de boas-vindas. Temos nossa primeira comunicação do servidor para o cliente utilizando socket.emit . Porém, ao apertar nosso botão PING nada acontece ainda. Vamos modificar para que o listener do evento ping emita um evento pong para todos os clientes.
index.js
Copiar
// ...

// io.on('connection', (socket) => {
//  console.log(`Usuário conectado. ID: ${socket.id}`);
//
//  socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

// socket.on('ping', () => {
//  console.log(`${socket.id} emitiu um ping!`);
    io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
//  });
// });

// ...
Note, que dentro do listener do evento ping , usamos a função io.emit , em vez de socket.emit . Vamos entender a diferença entre essas duas chamadas um pouco mais a frente.
Entretanto, a mensagem que saiu do servidor ainda não é exibida na tela do cliente, para isso vamos definir um listener para o evento pong do lado do cliente utilizando o socket.on .
index.html
Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO - trybe</title>
    <script src="/socket.io/socket.io.js"></script>

  </head>
  <body>
    <button id='pingButton'>PING</button>
    <ul id='messages'></ul>
  </body>
  <script>
    // const socket = io();

    // ...

    // Quando o evento `pong` for emitido pelo servidor, vamos pegar a string mensagem enviada e passar para a função `createMessage`
    socket.on('pong', (mensagem) => createMessage(mensagem));
  </script>
</html>
Agora, observe que cada vez que você clica no botão PING, uma mensagem de PONG é enviada pelo back-end. Dessa forma que fazemos a troca de mensagens básicas entre servidor e cliente usando socket.io. Reserve um tempo para revisar tudo até esse ponto antes de seguir com os próximos exemplos e conceitos.

## Refatorando

Para distribuir melhor nosso código em diferentes arquivos podemos refatorar toda a parte de definição do socket para um arquivo a parte usando o conceito de inversão de dependência do SOLID. Vamos criar um diretório chamando sockets e adicionar um arquivo chamado ping.js .
sockets/ping.js
Copiar
module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
      io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};
E vamos tirar do arquivo index.js todo o código movido e substituir por um require.
index.js
Copiar
// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
//
// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:3000', // url aceita pelo cors
//     methods: ['GET', 'POST'], // Métodos aceitos pela url
//   },
// });
//

require('./sockets/ping')(io);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// http.listen(3000, () => {
//   console.log('Servidor ouvindo na porta 3000');
// });
Vamos agora a uma forma de refatorar nosso código HTML. Comece criando um arquivo para isolar o javascript do HTML. Atente-se a criar o arquivo dentro de um diretório public.
public/js/ping.js
Copiar
const socket = window.io();

const button = document.querySelector('#pingButton');
button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

// cria uma `li` e coloca dentro da `ul` com `id` mensagens
const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

// Quando nosso evento `ola` for emitido, vamos pegar a string mensagem enviada pelo nosso evento e passar para a função `createMessage`
socket.on('ola', (mensagem) => createMessage(mensagem));
socket.on('pong', (mensagem) => createMessage(mensagem));
Note que na linha 1, mudamos a chamada da função io() para window.io() , isso serve para enfatizar que a função io é uma função injetada ao objeto window do DOM da página. Dessa forma, conseguimos seguir utilizando nosso socket, mas agora em um arquivo separado. Portanto, devemos reorganizar nosso HTML como no exemplo abaixo.
index.html
Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO - trybe</title>
  </head>
  <body>
    <button id='pingButton'>PING</button>

    <ul id='messages'></ul>
  </body>
  <script src="/socket.io/socket.io.js"></script>
  <script src='./js/ping.js'></script>
</html>
Agora só precisamos fazer nosso back-end prover acesso aos arquivos dentro do diretório public adicionando a seguinte linha de código.
index.js
Copiar
// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
//
// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:3000', // url aceita pelo cors
//     methods: ['GET', 'POST'], // Métodos aceitos pela url
//   },
// });
//

app.use(express.static(__dirname + '/public'));

// require('./sockets/ping')(io);
// ...
Pronto, agora temos um código mais refatorado tanto no back-end como no front-end. Teste a aplicação para ver se tudo continua funcionando.
Tudo certo? Vamos seguir com um novo exemplo do uso de sockets.

## construindo um chat com socket.io

Agora que entendemos o básico sobre socket.io, vamos construir um exemplo mais próximo do mundo real. Vamos fazer um chat funcional onde todas as pessoas que entrarem na página poderão mandar mensagens em um chat público, algo similar a uma conversa de um grupo de WhatsApp.
Até o final desta seção, teremos uma chat funcional como a da imagem abaixo.
Além disso, poderemos testar também com quantas janelas quisermos do nossa chat!


Crie um arquivo sockets/chat.js para estruturar nossos eventos para o chat e adicionar a sua chamada no index.js.
sockets/chat.js
Copiar
module.exports = (io) => io.on('connection', (socket) => {
});
index.js
Copiar
// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
//
// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:3000', // url aceita pelo cors
//     methods: ['GET', 'POST'], // Métodos aceitos pela url
//   },
// });
//

// require('./sockets/ping')(io);
require('./sockets/chat')(io);

// ...
Crie agora o HTML, CSS e Javascript do cliente.
public/chat.html
Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO - trybe</title>
    <link rel="stylesheet" href="./css/chat.css">
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="messageInput" autocomplete="off" /><button>Send</button>
    </form>
    <script src="/socket.io/socket.io.js"></script>
    <script src='./js/chat.js'></script>
  </body>
</html>
public/css/chat.css
Copiar
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 13px Helvetica, Arial;
}

form {
  background: #000;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

form input {
  border: 0;
  padding: 10px;
  width: 90%;
  margin-right: 0.5%;
}

form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
  cursor: pointer;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages li {
  padding: 5px 10px;
}

#messages li:nth-child(odd) {
  background: #eee;
}
public/js/chat.js
Copiar
const socket = window.io();

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', inputMessage.value);
  inputMessage.value = '';
  return false;
});
Esse código javascript determina que ao clicar no botão submit do formulário, será enviado um evento clientMessage com a mensagem preenchida no campo com id messageInput . Vamos preparar nosso back-end para receber este evento.
sockets/chat.js
Copiar
// module.exports = (io) => io.on('connection', (socket) => {
  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
  });
// });
Agora faça, um teste. Abra a nova página pela url localhost:3000/chat.html e teste enviar uma mensagem. A mensagem que foi enviada chega no servidor e é exibida no console.log. Interessante, não é mesmo? Mas e se a gente quiser que a mensagem apareça no navegador, o que devemos fazer? Vamos emitir um outro evento chamado serverMessage com a mensagem saindo do servidor para todos os clientes que possuírem uma conexão socket aberta.
sockets/chat.js
Copiar
// module.exports = (io) => io.on('connection', (socket) => {
  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('serverMessage', message);
  });
// });
Interessante, mas ainda não temos a mensagem sendo renderizada no nosso front-end. Isso aconteceu, pois, não colocamos um listener para capturar o evento serverMessage que é emitido pelo back-end como uma resposta para o evento clientMessage . Vamos fazer isso agora.
public/js/chat.js
Copiar
// const socket = window.io();
//
// const form = document.querySelector('form')
// const inputMessage = document.querySelector('#mensagemInput')
// form.addEventListener('submit', (e) =>{
//   e.preventDefault();
//   socket.emit('clientMessage', inputMessage.value);
//   inputMessage.value = '';
//   return false;
// });

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

socket.on('serverMessage', (message) => createMessage(message));
Agora, sim, quando o evento serverMessage é disparado pelo back-end, o mesmo é detectado pelo cliente através do sokect.on('serverMessage') que dispara uma callback com o parâmetro message e chama a função createMessage que adiciona um elemento li com o valor da variável message no elemento ul com o id messages .
Faça um teste abrindo várias janelas do seu navegador lado a lado e testando o envio de mensagem. Para facilitar você pode usar um plugin do chrome chamado Tab Resize - split screen layouts , que possibilita abrir várias janelas do navegador em um formato de grid.
Desenvolvemos nosso primeiro chat. Na próxima seção vamos entender um pouco melhor como controlar eventos que são disparados automaticamente.
© Trybe 2021
·
Manual da Pessoa Estudante do flavio