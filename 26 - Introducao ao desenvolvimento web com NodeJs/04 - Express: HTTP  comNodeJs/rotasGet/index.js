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

/*Rota com o caminho '/', utilizando o metodo PUT */
app.put('/put', (req, res) => {
  res.status(200).json({"message":"editado com sucesso"});
})

/*Rota com caminho '/' para o DELETE */
app.delete('/delete', (req, res) => {
  res.status(200).json({"message":"excluido com sucesso"});
})

/*Rota com o caminho '/' para qualquer método HTTP */
app.all('/', (req, res) => {
  res.status(200).json({"message": "feito com sucesso"});
})

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
]

// app.get('/recipes' , (req, res) =>{
//   res.json(recipes);
// })

app.get('/recipes/:id', (req, res) =>{
  const { id }= req.params
  const result = recipes.find(elem => elem.id === Number(id));
  if(!result){
    return res.status(404).json({ message: 'Item nao encontarado'})
  }
  return res.status(200).json(result)

})


app.listen(3030, ()=> console.log("Rodando https//:localhost:3030"))