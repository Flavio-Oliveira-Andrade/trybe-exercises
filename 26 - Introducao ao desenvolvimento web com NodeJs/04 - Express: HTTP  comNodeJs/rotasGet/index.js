const express = require('express');

const app = express();
// const bodyParser = require('body-parser');
app.use(express.json())



app.get('/', (req, res) => {
  res.send("Bem vindo ao meu API")
})

app.get('/ping', (req, res) => res.json({"message": "pong"}));

app.post('/hello', (req, res) => {
  const { name, idade, adress } = req.body;
  res.status(200).json({"message": `hello, ${name}! tenho ${idade} live in from ${adress} `});

})




app.listen(3030, ()=> console.log("Rodando https//:localhost:3030"))