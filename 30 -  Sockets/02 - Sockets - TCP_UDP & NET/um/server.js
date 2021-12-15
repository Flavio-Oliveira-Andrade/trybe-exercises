require('dotenv').config()
const express = require('express');
const path = require('path');

const { PORT_URL } = process.env;

const app = express();
const server = require('http').createServer(app); //define protocolo http
const io = require('socket.io')(server); // define protocolo wss , retorna a function to serv

app.use(express.static(path.join(__dirname, 'public')));
app.set('views ', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (_req, res) => {
  res.render('index.html')
});

let messages = []

io.on('connection', (socket) => {
  console.log(`socket connected ${socket.id}`);

  socket.emit('previousMessages', messages)
  socket.on('message', (data) => {
    console.log(data);
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
  });
});

server.listen(PORT_URL, ()=> console.log('listening on port', PORT_URL));