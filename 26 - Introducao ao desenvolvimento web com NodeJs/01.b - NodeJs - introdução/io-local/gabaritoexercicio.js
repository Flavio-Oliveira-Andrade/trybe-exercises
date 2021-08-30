function doMath(a, b, c) {
  return new Promise((resolve, reject) => {});
}

// function doMath(a, b, c) {
  // return new Promise((resolve, reject) => {
    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
  //});
//}

// function doMath(a, b, c) {
//   return new Promise((resolve, reject) => {
//     /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
//     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
//       reject('Informe apenas números');

const result = (a + b) * c;

if (result < 50) {
  return reject('Valor muito baixo');
}

resolve(result);
//   });
// }

// function doMath(a, b, c) {
//   return new Promise((resolve, reject) => {
//     /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
//     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
//       reject('Informe apenas números');

//     const result = (a + b) * c;

//     if (result < 50) {
//       return reject('Valor muito baixo');
//     }

//     resolve(result);
//   });
// }

doMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))


  // function doMath(a, b, c) {
// ...
// }

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
}


// function doMath(a, b, c) {
// ...
// }

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100 + 1);
// }

// function callDoMath() {
//   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

doMath(...randomNumbers)
.then(result => console.log(result))
.catch(err => console.error(err.message))
// }


// async function callDoMath() {
  //   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
  //   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  //   doMath(...randomNumbers)
  //     .then((result) => console.log(result))
  //     .catch((err) => console.error(err.message));
  // }

  // async function callDoMath() {
//   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

const result = await doMath(...randomNumbers)
//     .catch((err) => console.error(err.message));

//   console.log(result);
// }


// async function callDoMath() {
//   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

try {
  //     const result = await doMath(...randomNumbers);
  //     console.log(result);
       } catch (err) {
         console.error(err);
       }
  // }


  const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {});

  // const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
  return JSON.parse(fileContent);
  //   });

  // const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     return JSON.parse(fileContent);
//   })
.then((simpsons) => {
  return simpsons.map(({ id, name }) => `${id} - ${name}`);
});

// const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     return JSON.parse(fileContent);
//   })
//   .then((simpsons) => {
//     return simpsons.map(({ id, name }) => `${id} - ${name}`);
//   })
.then((strings) => {
  strings.forEach((string) => console.log(string));
});

const fs = require('fs').promises;

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

// const fs = require('fs').promises;

// async function getSimpsonById(id) {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

if (!chosenSimpson) {
  /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
   * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
   * tendo como motivo o que passarmos para o `throw`.
   * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
   */
  throw new Error('id não encontrado');
}
// }


// const fs = require('fs').promises;

// async function getSimpsonById(id) {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

//   if (!chosenSimpson) {
//     /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
//      * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
//      * tendo como motivo o que passarmos para o `throw`.
//      * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
//      */
//     throw new Error('id não encontrado');
//   }

     /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
      * `return` aciona o fluxo de sucesso e resolve a Promise.
      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
      * dentro do executor de uma Promise.
      */
     return chosenSimpson;
// }

const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

// const fs = require('fs').promises;

// async function filterSimpsons() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
// }


const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

// const fs = require('fs').promises;

// async function filterSimpsons() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
// }


// const fs = require('fs').promises;

// async function filterSimpsons() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
// }

const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

// const fs = require('fs').promises;

// async function createSimpsonsFamily() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));
// }


// const fs = require('fs').promises;

// async function createSimpsonsFamily() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));

await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }

const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}


// const fs = require('fs').promises;

// async function addNelsonToFamily() {
//   const simpsonsFamily = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });
// }


// const fs = require('fs').promises;

// async function addNelsonToFamily() {
//   const simpsonsFamily = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });

await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
// }


// Importamos o módulo de promises do fs
const fs = require('fs').promises;

function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}




const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
}



// const fs = require('fs').promises;

// async function arrayToFile() {
//   const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

const createFilePromises = strings.map((string, index) =>
fs.writeFile(`./file${index + 1}.txt`, string)
);
// }



// const fs = require('fs').promises;

// async function arrayToFile() {
//   const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

//   const createFilePromises = strings.map((string, index) =>
//     fs.writeFile(`./file${index + 1}.txt`, string)
//   );

await Promise.all(createFilePromises);
// }



// const fs = require('fs').promises;

// async function arrayToFile() {
//   const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

//   const createFilePromises = strings.map((string, index) =>
//     fs.writeFile(`./file${index + 1}.txt`, string)
//   );

//   await Promise.all(createFilePromises);

const fileNames = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
];

const fileContents = await Promise.all(
  fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
);
// }



// const fs = require('fs').promises;

// async function arrayToFile() {
//   const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

//   const createFilePromises = strings.map((string, index) =>
//     fs.writeFile(`./file${index + 1}.txt`, string)
//   );

//   await Promise.all(createFilePromises);

//   const fileNames = [
//     'file1.txt',
//     'file2.txt',
//     'file3.txt',
//     'file4.txt',
//     'file5.txt',
//   ];

//   const fileContents = await Promise.all(
//     fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
//   );

const newFileContent = fileContents.join(' ');

await fs.writeFile('./fileAll.txt', newFileContent);
// }





const fs = require('fs').promises;
const readline = require('readline');


const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  // Realizamos o uso do readline conforme mostrado na documentação.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}




// const fs = require('fs').promises;
// const readline = require('readline');

// function question(message) {
//   // Realizamos o uso do readline conforme mostrado na documentação.
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) => {
//     // No entanto, ao abrirmos a pergunta,
//     // fazemos isso dentro de uma Promise.
//     rl.question(message, (answer) => {
//       rl.close();

//       // Dessa forma, quando obtivermos a resposta,
//       // podemos resolver nossa Promise com essa resposta.
//       // Assim, quem chama nossa função não precisa
//       // se preocupar com callbacks, e pode obter a resposta
//       // através da Promise que retornamos.
//       resolve(answer);
//     });
//   });
// }

async function start() {
  // Como nossa função `question` retorna uma Promise,
  // podemos utilzar `await` para obter a resposta.
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    // Tentamos realizar a leitura do arquivo
    const fileContent = await readFile(fileName, 'utf-8');
    // E exibir seu resultado na tela
    console.log(fileContent);
  } catch (err) {
    // Caso um erro aconteça, exibimos a mensagem de erro na tela.
    console.log('Arquivo inexistente');
  }
}

start();




const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  // Realizamos o uso do readline conforme mostrado na documentação.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}


const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  // Realizamos o uso do readline conforme mostrado na documentação.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

async function start() {
  const fileName = await question('Arquivo a ser lido: ');
}

start();


// const fs = require('fs').promises;
// const readline = require('readline');

// function question(message) {
//   // Realizamos o uso do readline conforme mostrado na documentação.
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) => {
//     // No entanto, ao abrirmos a pergunta,
//     // fazemos isso dentro de uma Promise.
//     rl.question(message, (answer) => {
//       rl.close();

//       // Dessa forma, quando obtivermos a resposta,
//       // podemos resolver nossa Promise com essa resposta.
//       // Assim, quem chama nossa função não precisa
//       // se preocupar com callbacks, e pode obter a resposta
//       // através da Promise que retornamos.
//       resolve(answer);
//     });
//   });
// }

// async function start() {
//   const fileName = await question('Arquivo a ser lido: ');

const originalContent = await fs.readFile(fileName, 'utf-8')
// Caso aconteça um erro ao ler o arquivo
.catch(err => {
  // Mostramos o erro na tela
  console.error(`Erro ao ler o arquivo: ${err}`);
  // E retornamos `false`.
  // O valor retornado aqui do catch é o valor que será armazenado
  // na variável `originalContent`.
  return false;
})

// Se `originalContent` estiver vazia ou contiver um valor falso,
// quer dizer que ocorreu um erro na leitura do arquivo e não devemos prosseguir.
// Utilizamos o `return` para encerrar a execução
if (!originalContent) return;
// }

// start();


// const fs = require('fs').promises;
// const readline = require('readline');

// function question(message) {
//   // Realizamos o uso do readline conforme mostrado na documentação.
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) => {
//     // No entanto, ao abrirmos a pergunta,
//     // fazemos isso dentro de uma Promise.
//     rl.question(message, (answer) => {
//       rl.close();

//       // Dessa forma, quando obtivermos a resposta,
//       // podemos resolver nossa Promise com essa resposta.
//       // Assim, quem chama nossa função não precisa
//       // se preocupar com callbacks, e pode obter a resposta
//       // através da Promise que retornamos.
//       resolve(answer);
//     });
//   });
// }

// async function start() {
//   const fileName = await question('Arquivo a ser lido: ');

//   const originalContent = await fs.readFile(fileName, 'utf-8')
//     // Caso aconteça um erro ao ler o arquivo
//     .catch(err => {
//       // Mostramos o erro na tela
//       console.error(`Erro ao ler o arquivo: ${err}`);
//       // E retornamos `false`.
//       // O valor retornado aqui do catch é o valor que será armazenado
//       // na variável `originalContent`.
//       return false;
//     })

//   // Se `originalContent` estiver vazia ou contiver um valor falso,
//   // quer dizer que ocorreu um erro na leitura do arquivo e não devemos prosseguir.
//   // Utilizamos o `return` para encerrar a execução
//   if (!originalContent) return;

const oldWord = await question('Qual palavra deseja substituir? ');
const newWord = await question('E qual palavra deve ficar em seu lugar? ');

const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);

console.log('Resultado da substituição: ');
console.log(newContent);
// }

// start();


// const fs = require('fs').promises;
// const readline = require('readline');

// function question(message) {
//   // Realizamos o uso do readline conforme mostrado na documentação.
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) => {
//     // No entanto, ao abrirmos a pergunta,
//     // fazemos isso dentro de uma Promise.
//     rl.question(message, (answer) => {
//       rl.close();

//       // Dessa forma, quando obtivermos a resposta,
//       // podemos resolver nossa Promise com essa resposta.
//       // Assim, quem chama nossa função não precisa
//       // se preocupar com callbacks, e pode obter a resposta
//       // através da Promise que retornamos.
//       resolve(answer);
//     });
//   });
// }

// async function start() {
//   const fileName = await question('Arquivo a ser lido: ');

//   const originalContent = await fs.readFile(fileName, 'utf-8')
//     // Caso aconteça um erro ao ler o arquivo
//     .catch(err => {
//       // Mostramos o erro na tela
//       console.error(`Erro ao ler o arquivo: ${err}`);
//       // E retornamos `false`.
//       // O valor retornado aqui do catch é o valor que será armazenado
//       // na variável `originalContent`.
//       return false;
//     })

//   // Se `originalContent` estiver vazia ou contiver um valor falso,
//   // quer dizer que ocorreu um erro na leitura do arquivo e não devemos prosseguir.
//   // Utilizamos o `return` para encerrar a execução
//   if (!originalContent) return;

//   const oldWord = await question('Qual palavra deseja substituir? ');
//   const newWord = await question('E qual palavra deve ficar em seu lugar? ');

//   const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);

//   console.log('Resultado da substituição: ');
//   console.log(newContent);

const destinationPath = await question('Onde deseja salvar o resultado? ');
await fs.writeFile(destinationPath, newContent);
// }

// start();