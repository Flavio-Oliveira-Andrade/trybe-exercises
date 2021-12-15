const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.json())


const PORT_URL = '3900'


const diskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/")
  },
  filename:(req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname)
  },
})

const uploads = multer({storage :diskStorage })

// const uploads = multer({
//   dest: 'uploads/'
// })

app.get('/ping', (req, res) => {
  res.send('pong')
 })

app.post('/:uplod',uploads.single("arquivo"), (req, res)=>{
 res.send('uplods efetuado com sucesso')
})


app.listen(PORT_URL,()=>console.log(`Rodando na port${PORT_URL}`))

