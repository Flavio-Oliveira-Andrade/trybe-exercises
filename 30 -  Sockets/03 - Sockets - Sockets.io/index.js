const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
})

const PORT ='3000'
app.listen(PORT, ()=> console.log('listening on port',PORT))