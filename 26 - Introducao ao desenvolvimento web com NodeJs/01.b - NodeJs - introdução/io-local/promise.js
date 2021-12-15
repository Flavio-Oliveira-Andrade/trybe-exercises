const fs = require('fs').promises

const nomeDoArquivo = "meu-arquivo.txt";

fs.readFile(nomeDoArquivo, "utf8",)
  .then((data) => {
    console.log(`Conteudo do arquivo: ${data}`);
  }).catch((err) => {
    console.error(`Nao  foi possivel ler o arquivo: ${nomeDoArquivo}\n Error: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  })

  fs.writeFile('./meu-arquivo.txt', 'aqui e eu escrevo meu texto')
    .then( () => {
      console.log('texto escrito com sucesso!');
    }).catch( (err) => {
      console.error('error: ' + err.message)
    })