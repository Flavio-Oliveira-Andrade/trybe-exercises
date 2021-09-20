const express = require('express')

const app = express()

app.use(express.json())

require('dotenv').config();

const PORT_URL = '3333'

app.listen(()=>console.log(`Rodando na port${PORT_URL}`))

