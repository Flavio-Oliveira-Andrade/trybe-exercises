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