const express = require('express');
const multer = require('multer')
const app = express();

const storage = multer.diskStorage({})

const uploads = multer({ dest: 'Uploads/'})


app.post('/file', uploads.single("arquivo"), (req, res) => {

  return res.status(201).json({message: 'Arquivo carregado com sucesso'})
})

app.post('/files', uploads.array("arquivo", 3), (req, res) => {

  return res.status(201).json({message: 'Arquivo carregado com sucesso'})
})

app.listen(3000, function (){console.log('listening on port 3000')})