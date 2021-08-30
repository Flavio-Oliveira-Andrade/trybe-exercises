const fs = require('fs');

const nomeDoArquivo = "meu-arquivo.txt";

fs.readFile(nomeDoArquivo, 'utf8', (err, data) =>{
  if(err){
    console.error("Nao foi possivel ler o arquivo" + nomeDoArquivo +"\n Error" + err);
    process.exit(1);  // Para sair do node com um código de 'falha': process.exit(1);
  }
  console.log(`Conteudo do arquivo: ${data}`);
})

/*
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(3000, () => console.log('Server ready'))

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

process.kill(process.pid, 'SIGTERM')

*/