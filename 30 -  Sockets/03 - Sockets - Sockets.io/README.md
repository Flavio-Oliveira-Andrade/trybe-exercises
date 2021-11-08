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
