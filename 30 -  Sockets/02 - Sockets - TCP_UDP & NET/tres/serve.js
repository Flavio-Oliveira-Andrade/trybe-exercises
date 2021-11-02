const  http = require('http');

const PORT_URL = 65535;
guestId ++;
const server = http.createServer((socket)=>{
  socket.name = `Guest ${guestId}`
  console.log('Usuario conectado', socket.id)
  socket.write('voce se conectou')
  console.log('Usuario', socket.name)
});

socket.on('data',(message)=>{
  console.log(`Usuario${socket.name} enviou messagem`, message.toString())
  socket.foreach((client)=>{
    if(client.name !== socket.name){
      client.write(message.toString())
    }
  })
})
server.listen(PORT_URL, ()=> console.log('Rodando na porta', PORT_URL))