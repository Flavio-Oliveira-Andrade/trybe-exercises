const express = require('express');
const bodyParser = require('body-parser');
const {getAllVoos} = require('./controllers/controllerVoo')

const app = express();
app.use(bodyParser.json());

const PORT = 3030;

app.get('/voos', getAllVoos)
app.post('/voos',)
app.put('/voos:id',)
app.delete('/voos:id',)



app.listen(PORT, () => console.log(`Online na  port: ${PORT}`));