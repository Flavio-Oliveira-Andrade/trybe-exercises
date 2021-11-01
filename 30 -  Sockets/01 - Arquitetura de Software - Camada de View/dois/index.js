const express = require('express');
const bodyParser = require('body-parser');
const Cats = require('./src/models/catsModel');

const app = express();

app.set('view engne', 'ejs');
app.set('view', './src/views')

// buscar todos os cats_api
app.get('/cats', async (req, res) => {
  const cats = await Cats.getAll();

  if(!cats){
    return res.render('catList',{ message: 'Gatos não encontrados '})
  }
})

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => console.log('listening on 3001'))
