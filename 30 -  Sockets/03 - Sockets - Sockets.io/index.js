 const express = require('express');
 const app = express();
 const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

io.on('connection', (socket) => {
  socket.name = 'aceitos';
  console.log(`Usuário conectado. ID: ${socket.id} ${socket.name} `);
  socket.on('ping',()=>{
    console.log(`Usuário conectado`)
  })
});

 app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
 });

 http.listen(3000, () => {
   console.log('Servidor ouvindo na porta 3000');
 });