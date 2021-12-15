const express = require('express')
const {valid} = require('./middley')

const app = express()

app.use(express.json());

app.post('/user/register', valid, (req, res,) => {

res.status(201).json({message:"user created"})
})







app.listen(1900,()=>console.log("rodando na porta 1900"))



