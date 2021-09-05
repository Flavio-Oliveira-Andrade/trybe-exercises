const express = require('express');
const bodyParser = require('body-parser');
const { getAll, addOne } = require('./models/sakila.js')
//const { getAll, addOne } = require('./models/allfligtherMongoDB')


const app = express();

app.use(bodyParser.json())



app.get('/actor', async(req, res) => {
  const data = await getAll();

  // return res.status(200).json(result[0])
  return res.status(200).json({data,})
})



app.post('/actor', async(req, res)=> {
  const { name, lastName,} = req.body;
  const createOne = await addOne(name, lastName)

  return res.status(201).json(createOne)
})



app.listen(3030,()=> console.log("Online"))