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
Manual da Pessoa Estudante

## Aprofundando no uso de socket.io
Além de enviar eventos usando `socket.emit e io.emit`, temos outras formas de usar o socket.io, mas primeiramente vamos entender a diferença entre estes dois métodos.

### socket.emit:
Quando executado do lado do fronte-end ele envia uma mensagem do front para o back, mas o que acontece se usarmos ele do lado do back-end. Para exprementar vamos adicionar a seguinte linha

sockets/chat.js

// module.exports = (io) => io.on('connection', (socket) => {
    socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
//  socket.on('clientMessage', (message) => {
//    console.log(`Mensagem ${message}`);
//    io.emit('serverMessage', message);
//  });
// });

Agora teste com duas abas abertas, depois que as páginas carregarem, recarregue novamente apenas uma das páginas. Você perceberá que a mensagem só chegou no navegador onde você recarregou a página. Isso acontece porque o socket.emit transmite uma mensagem apenas o cliente que disparou o evento connection . Essa é a principal diferença do socket.emit para o io.emit ; O primeiro envia apenas para o cliente que disparou o evento e o segundo transmite algo para todos os clientes que estão conectados ao socket.
Podemos entender o uso do socket.emit veja a imagem abaixo.

Mas e se for preciso enviar uma mensagem para todos os clientes, exceto o cliente atual, como seria possível fazer? Para isso vamos usar o socket.broadcast.emit !

### socket.broacast.emit:

Para enviar uma mensagem para todos os outros clientes, exceto para quem disparou um evento, vamos precisar recorrer ao broadcast do socket.io. Veremos o quão simples é fazer a implementação do envio de mensagem em massa, coisa bem diferente do que fizemos na aula anterior:
sockets/chat.js

// module.exports = (io) => io.on('connection', (socket) => {
//  socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
    socket.broadcast.emit('serverMessage', `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`});
// ...
// });

Agora, novamente com duas abas abertas, teste recarregar a página de um usuário e você perceberá que a mensagem para o outro cliente que não carregou a página recebeu a mensagem Iiiiiirraaaa! ... . Conseguimos fazer isso graças ao socket.broadcast.emit.
Veja na imagem abaixo como o socket.broadcast.emit funciona.
socket.broadcast.emit

### socket.on('disconnect'):
Sempre que um cliente fecha ou recarrega a página, a conexão socket é encerrada e o socket.io dispara automaticamente um evento disconnect . É possível criar um listener específico para detectar quando uma conexão é encerrada.
sockets/chat.js

// module.exports = (io) => io.on('connection', (socket) => {
  // ...

  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
  });
});

Novamente faça o teste com duas páginas abertas e feche a página de algum dos clientes. Os demais clientes que continuarem conectados ao socket vão receber a mensagem Xiii! ... . Note que usamos socket.broadcat.emit , poderíamos usar também io.emit , mas como o usuário está se desconectando faz sentido enviar apenas para os outros usuários através do envio em broadcast .
Obs.: Nem sempre o navegador dispara o evento disconnect dependendo de como a página foi encerrada, para termos uma garantia que o socket vai realmente se desconectar, colo que o seguinte trecho de código no javascript do seu cliente.

public/js/chat.js

//...
window.onbeforeunload = function(event) {
  socket.disconnect();
};

Você pode usar a função socket.disconnect para fechar uma conexão socket e a partir desse momento essa página não vai conseguir nem emitir, nem escutar eventos.

### O que aprendemos até aqui?
Nosso leque de ferramentas com socket.io está aumentando. Até então vimos como usar as seguintes funções:
socket.emit : Enviar uma mensagem apenas entre cliente <=> servidor que dispara um evento.
io.emit : Enviar uma mensagem para todos os clientes com uma conexão socket aberta. (Só é possível usar do lado do servidor)
socket.broadcast.emit : Enviar uma mensagem para todos os clientes exceto o cliente que disparou o evento. (Só é possível usar do lado do servidor)
socket.on('eventoCustomizado') : Escutar um evento qualquer.
socket.on('disconnect') : Escutar o evento disparado quando um usuário se desconecta.
socket.disconnect : Força o encerramento de uma conexão socket.

### Salas
O Socket.io tem um recurso que permite criar chats privados entre um conjunto especifico de clientes, para isso ele usa um recurso chamada de sala que pode ser exemplificado pela imagem abaixo.

O conceito de um chat privado e que um cliente se conecta a uma sala especifica e a parti desse momento é possivel direncionar mensagens apenas para outris clientes que tambem estiverem conectados a essa mesma sala. Até o final dessa seção teremos duas telas, uma que permite o usuario colocar um nome de usuario e escolher uma sala
A segunda tela que vai ser o chat para a sala escolhida.
Vamos começar implementando a tela para entrar em uma sala.
public/entrar.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/login.css">
  <title>Chat por Tópicos</title>
</head>
<body>
  <div class="login-page">
    <div class="form">
      <form class="login-form" action="room.html">
        <input type="text" placeholder="username" name="username" />
        <select name="room" id="room">
          <option value="Cinema">Cinema</option>
          <option value="Esporte">Esporte</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Música">Música</option>
          <option value="Memes">Memes</option>
        </select>
        <button>Entrar na sala</button>
      </form>
    </div>
  </div>
</body>
</html>

A seguir está o código CSS utilizado nessa página.
public/css/login.css

/* Referência para este css: https://codepen.io/colorlib/pen/rxddKy*/
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input, select {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 515;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

Essa tela tem um form que faz uma requisição redirecionando para a página room.html enviando dois parâmetros, o username e room que vamos utilizar para poder abrir uma sala e identificar o usuário.
public/room.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/chat.css">
  <title>Chat</title>
</head>
<body>
  <ul id="messages"></ul>
  <form action="">
    <input id="messageInput" autocomplete="off" /><button>Send</button>
  </form>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js"
    integrity="sha256-TDxXjkAUay70ae/QJBEpGKkpVslXaHHayklIVglFRT4=" crossorigin="anonymous"></script>
  <script src="/socket.io/socket.io.js"></script>
  <!-- script que vai conter toda lógica de conexão com socket.io -->
  <script src="./js/rooms.js"></script>
</body>
</html>

Esta página segue a mesma base que nosso arquivo chat.html , mas estamos adicionando o uso da lib Qs que permite acessar parâmetros via query string do lado do front-end. É através dessa lib que vamos conseguir acessar os valores enviados pelo formulário da página entrar.html . Vamos implementar toda lógica desse chat no arquivo rooms que está sendo importado nessa página.
public/js/rooms.js

const socket = window.io();

// A `lib` expõe a constante `Qs`, que utilizaremos dessa forma no nosso exemplo
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true});

console.log(username, room);

Para conferir que os valores de username e room estão chegando corretamente, abra a URL http://localhost:3000/entrar.html , preencha os campos e aperte o botão. Confira se os valores foram exibidos no console do seu navegador.
Ok, até o momento montamos esses dois arquivos, mas vamos começar a implementar de fato o nosso socket para criar uma sala de acordo com o tópico selecionado, para isso vamos fazer nosso cliente sinalizar para o servidor que quer entrar em uma sala específica.
public/js/rooms.js

const io = window.io();

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true});

socket.emit('joinRoom', { username, room });

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
}

socket.on('serverMessage', (message) => createMessage(message));

Agora vamos configurar nosso back-end para receber essa requisição, vamos criar um arquivo para lidar apenas com essa página específica.
sockets/rooms.js

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);

    socket.emit('serverMessage', `Bem vindo ${username} a sala sobre ${room}`);

    socket.broadcast.to(room).emit('serverMessage', `${username} acabou de entrar na sala`);
  });
});


module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);

    socket.emit('serverMessage', `Bem vindo ${username} a sala sobre ${room}`);

    socket.broadcast.to(room).emit('serverMessage', `${username} acabou de entrar na sala`);
  });
});

index.js

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
// require('./sockets/chat')(io);
require('./sockets/rooms')(io);

// ...

Temos duas novidades, a primeira é o uso da função socket.join que sinaliza que um usuário se conectou a uma sala específica. A partir desse momento, esse usuário está apto a receber mensagens que forem enviadas para essa sala. A segunda é o socket.broadcast.to que envia um evento para uma sala específica. Dessa forma, garantimos que as mensagens enviadas nessa tela só chegarão para outros clientes que estiverem conectados na mesma sala.
Agora faça um teste abra três navegadores e em dois deles entre com usuários no tópico Cinema e com o terceiro usuário entre no tópico Música . Dessa forma, quando o segundo usuário se conecta ele aparece para o primeiro usuário que está na mesma sala, mas o mesmo não acontece quando o terceiro usuário entra em uma sala diferente. Isso aconteceu graças ao recurso de salas do socket.io.
Vamos agora fazer com que o envio de mensagens funcione para o chat privado. Vamos começar ajustando o cliente para emitir um evento quando apertar no botão de enviar.
public/js/rooms.js

// ...
socket.emit('joinRoom', { username, room });

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const message = inputMessage.value;
  socket.emit('roomClientMessage', { room, message });
  inputMessage.value = '';
  return false;
});

Agora do lado do back-end vamos emitir a mensagem para todos os usuários conectados usando io.to.emit :
sockets/rooms.js

// module.exports = (io) => io.on('connection', (socket) => {
//   socket.on('joinRoom', ({ username, room}) => {
//     socket.join(room);
//
//     socket.emit('serverMessage', `Bem vindo ${username} a sala sobre ${room}`);
//
//     socket.broadcast.to(room).emit('serverMessage', `${username} acabou de entrar na sala`);
//
       socket.on('roomClientMessage', ({ message, room}) => {
           io
             .to(room)
             .emit('serverMessage', `${username}: ${message}`)
         });
       });
// });

Pronto, agora nosso envio de mensagens já está funcionando para atender um chat privado. Do lado do cliente mandamos a sala como parâmetro e do lado do servidor usar a função io.to para enviar uma mensagem para todos os clientes conectados apenas a essa sala específica do tópico, isso garante que a mensagem só chegará nos outros clientes que estiverem no mesmo canal. Faça um teste entrando com dois usuários na sala Cinema e outros dois na sala Esportes e veja como a troca de mensagens está acontecendo.
Resumindo, o que aprendemos:
socket.join : Conecta um cliente a uma sala específica.
socket.broacast.to(x).emit e io.to(x).emit : Funciona equivalente ao que já vimos anteriormente, porém enviando a mensagem apenas para os clientes que estiverem conectados a sala x .