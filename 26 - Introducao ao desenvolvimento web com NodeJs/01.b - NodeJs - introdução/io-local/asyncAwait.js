const fs = require('fs').promises;

async function main(){
  try {
    await fs.writeFile('./meu-arquivo.txt', 'meu testao2ddd');
    console.log('arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Error ao escrevero arquivo: ${error.message}`);
  }
}
main();

// const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()


const fs = require('fs').promises;

// A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error('err');
  });

/*
[...]
[Error: EEXIST: file already exists, open './meu-arquivo.txt'] {
  errno: -17,
  code: 'EEXIST',
  syscall: 'open',
  path: './meu-arquivo.txt'
}

*/

const fs = require('fs').promises;

promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
.then(([file1, file2, file3]) => {
  const fileSizeSum = file1.length + file2.length + file3.length;
  console.log(`Lidos 3 arquivos totalizando: ${fileSizeSum} bytes`);
})
.catch((err) => console.error("Erro ao ler os arquivos: " + err.message));