### Callbacks

Primeiro, vamos começar com o conceito de callback. Conforme o próprio nome diz, callback tem a ver com "chamar de volta". Basicamente, toda vez que precisarmos que algo seja processado em segundo plano, devemos registrar uma callback. Ela será executada quando a operação que solicitamos for concluída. Podemos pensar em callbacks como sendo uma forma de dizermos pro runtime JavaScript um "vê lá e me avisa". 😆
Vamos usar como exemplo a função readFile do módulo fs do Node.js. Ela realiza a leitura de um arquivo e, quando termina, chama uma função de callback, passando o resultado:
Copiar
const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
No exemplo acima, passamos uma função para readFile , à qual damos o nome de callback . Essa função de callback recebe dois parâmetros: o primeiro, que chamamos de err , é um erro que pode ter ocorrido durante a leitura do arquivo. Caso nenhum erro tenha ocorrido, esse parâmetro será undefined . O segundo parâmetro é, nesse caso, o conteúdo do arquivo, em forma de uma sequência de bytes, que chamamos de content . Caso ocorra um erro na leitura do arquivo, esse parâmetro será undefined .
Sabendo disso, veja abaixo o que esse código faz:
Primeiro, pedimos que o Node.js leia o arquivo, e passamos uma função de callback;
Quando a leitura do arquivo é concluída ou um erro acontece, nossa função é chamada;
Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, escrevemos ele no console e encerramos a execução com o return ;
Caso nenhum erro tenha acontecido, sabemos que nosso arquivo foi lido com sucesso e, portanto, seu conteúdo está no segundo parâmetro, que chamamos de content .
Esse formato de callback que recebe dois parâmetros, erro e resultado, não foi utilizado por acaso. Callbacks desse tipo são chamadas de node-style callbacks e são, por convenção, a melhor maneira de se estruturar uma callback. Toda API de módulos nativos do Node.js utiliza esse mesmo formato de callbacks . Guarde essa informação, pois ela vai ser importante mais tarde. 😉

### O lado ruim dos callbacks

A principal desvantagem das callbacks vem do fato de que o resultado de uma operação só existe dentro daquela callback; ou seja: se precisamos executar uma coisa depois da outra, precisamos colocar uma callback dentro da outra. À medida que vamos fazendo isso, vamos aumentando o nível de indentação necessária e, portanto, aumentamos a dificuldade de ler e até mesmo de dar manutenção no código. Vamos ver um exemplo:
Suponhamos que precisamos ler, sequencialmente, três arquivos, e que vamos fazê-lo de forma assíncrona, para não travar nosso servidor. O código para isso ficaria mais ou menos assim:

const fs = require('fs');

fs.readFile('file1.txt', (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', (err, file2Content) => {
    if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

    console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

    fs.readFile('file3.txt', (err, file3Content) => {
      if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

      console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
    });
  });
});

Com três níveis de indentação, já dá pra perceber que o código começa a ficar menos legível. Imagina como seria se tivéssemos ainda mais níveis de callbacks aninhadas?
A isso damos o nome de callback hell , que é quando temos uma callback dentro de outra, dentro de outra, dentro da outra etc., de forma que o código fica horrível de ler. Uma imagem que ilustra muito bem a callback hell é essa:

Uma forma de tentar resolver o problema é quebrar o código em infinitas funções menores, que não fazem nada além de chamar a próxima callback, mas isso também não é tão simples, organizado, ou mesmo bonito, e acaba por não funcionar. Veja um exemplo:

const fs = require('fs');

const file3Callback = (err, file3Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

  console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
};

const file2Callback = (err, file2Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

  console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

  fs.readFile('file3.txt', file3Callback);
};

const file1Callback = (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', file2Callback);
};

fs.readFile('file1.txt', file1Callback);

### Promises

Promises foram introduzidas à especificação do JavaScript em 2015 como uma forma de resolver a potencial bagunça trazida pelas callbacks. Sua ideia é um tanto quanto simples, mas faz uma grande diferença quando o assunto é melhorar a legibilidade do código. Na verdade, quando utilizamos Promises, ainda estamos utilizando um tipo de callback, mas que possui uma API mais legível e intuitiva. Bora entender melhor? Então segue a leitura!
O conceito de uma Promise, ou um objeto Promise, não é muito diferente da ideia de uma promessa na vida real: alguém se compromete com outra pessoa a fazer algo. Essa promessa pode ser cumprida e, portanto, resolvida , ou algo pode dar errado, fazendo com que não seja possível cumprir a promessa, que será então rejeitada . Promises no JavaScript funcionam do mesmo jeito: uma promessa é criada, e dentro dela existe código a ser executado. Se o código é executado sem nenhum problema, a Promise é resolvida através da função resolve , que veremos daqui a pouco. Se algo dá errado durante a execução do código, a Promise é rejeitada através da função reject .
## OK, mas o que isso tem a ver com callbacks e com fluxo assíncrono?
A grande sacada das Promises está em como tratamos o sucesso ou o erro. Enquanto com callbacks temos apenas uma função que recebe tanto o sucesso quanto o erro, nas Promises temos uma forma de registrar uma callback para sucesso e outra forma de registrar uma callback para erros.
Além disso, outra grande vantagem das Promises está no fato de que podemos registrar vários callbacks de sucesso para serem executados um após o outro, sendo que o próximo callback recebe o resultado do callback anterior. Fazemos isso utilizando vários .then numa mesma Promise. As funções que passamos para cada then serão executadas em sequência, e o resultado de uma será passado para a próxima.
Antes de continuar assista o vídeo abaixo para entender como utilizar Promises.

function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);

}

function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

  No segundo exemplo, repare que a função dividirNumeros retorna uma Promise, ou seja: ela promete que vai dividir os números. Caso não consiga realizar a divisão, ela rejeita essa promessa, utilizando a função reject . Caso dê tudo certo, ela resolve a promessa, utilizando a função resolve . Tudo que será realizado de forma assíncrona , ou seja, em segundo plano, pode também ser encarado da mesma forma. Quando pedirmos, por exemplo, para o que o Node.js leia um arquivo do disco, ele nos retornará uma promessa de que vai ler esse arquivo. Se der tudo certo, essa promessa será resolvida. Caso contrário, ela será rejeitada.
Pra entender melhor, vamos usar um exemplo prático: vamos escrever uma função que promete ler arquivos do dia. Antes de começar, no entanto, vamos dar uma olhada na sintaxe da criação de uma Promise.
Sempre que precisarmos criar uma nova Promise, invocaremos o construtor através da palavra-chave new . Para esse construtor, devemos passar uma função, que é chamada de executor ; é ela quem vai, de fato, tentar cumprir a promessa que estamos fazendo. A função executor recebe outras duas funções como parâmetros: resolve e reject . Isso tudo fica assim:

const p = new Promise((resolve, reject) => {
  // Aqui é onde vamos realizar a lógica que precisamos
  // para "tentar cumprir" a promessa
});

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

### Vamos entender o que estamos fazendo aqui:

Recebemos, como parâmetro, o nome do arquivo que queremos ler, fileName na função readFilePromise(fileName) ;
Criamos e retornamos uma nova Promise, Promise((resolve, reject) => {} ;
Chamamos o módulo nativo do node, fs , para realizar a leitura desse arquivo, fs.readFile(fileName, (err, content) => {}) ;
Dentro da callback fs.readFile(fileName, (err, content) => {}) que passamos para a função readFile , verificamos se ocorreu um erro ( if (err) ). Se sim, rejeitamos a Promise e encerramos a execução - reject(err) ;
Caso não tenha acontecido nenhum erro, resolvemos a Promise com o resultado da leitura do arquivo - resolve(content) .
Dessa forma, quem chamar nossa função poderá consumir os resultados da leitura do arquivo ou tratar qualquer erro que ocorrer utilizando Promises.
Antes de prosseguir, para entender como podemos consumir uma Promise, vamos nos atentar a alguns detalhes:
A função que passamos para a Promise só consegue retornar um resultado através da função resolve que ela recebe. Por isso, o fato de chamarmos return reject(err) não faz diferença, já que a Promise será rejeitada, e o retorno da callback passada para readFile é simplesmente ignorado. Na verdade, isso geralmente é válido para qualquer callback. Como callbacks geralmente são chamadas para lidar com resultados, seu retorno raramente importa para a função que a chamou ou que recebeu esses resultados.
resolve e reject são os nomes das funções que a Promise passa para a função executor . No entanto, para nós, elas são apenas parâmetros que são passados pra nossa função. Logo, não importa muito o nome que damos a elas, pois para o JavaScript isso é indiferente. De qualquer forma, chamar essas funções de qualquer outra coisa não é considerado uma boa prática, pois pode dificultar a legibilidade do código.
Dito isso, vamos agora entender como podemos consumir essa Promise. Vimos antes que Promises permitem que a callback de erro seja registrada de determinada forma e que callbacks de sucesso sejam registradas de outra forma. Note o uso do plural aqui: utilizando Promises, podemos definir mais de uma callback de sucesso.
Vamos a um exemplo de como podemos consumir a Promise que estamos retornando da nossa função logo acima:

// ...

readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });

  Por que isso é importante? Essa funcionalidade nos permite criar estruturas de pipeline , em que uma operação recebe como entrada o resultado da operação anterior, e esses resultados todos podem ser compostos e formar um único resultado de forma extremamente fácil!
Para demonstrar isso, e como Promises tornam o código mais legível, vamos reescrever o código que nos levou ao callback hell mas, dessa vez, utilizando Promises:

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });

  E nada mais de callback hell! Agora temos um código muito mais simples de interpretar e que não vai nos dar dor de cabeça quando precisarmos modificar. 😁

  ### Lendo arquivos co métodos sincronos

  Agora que entendemos como funcionam callbacks e promises, vamos nos aprofundar um pouco mais no módulo fs do node e na leitura e escrita de arquivos.
Primeiro, é importante saber que não precisamos ler arquivos "em segundo plano". Podemos fazer isso de forma síncrona, ou seja: parar a execução de todo o programa até que um arquivo seja lido.
Os métodos assíncronos não esperam o comando atual terminar para iniciar o próximo. Se quisermos ler um arquivo de maneira assíncrona, o Javascript não vai esperar o arquivo inteiro ser lido para só então dar continuidade ao script. Se quisermos esse comportamento, precisamos de um método síncrono . O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync . Vamos utilizá-lo no exemplo a seguir.
Para começar, vamos criar uma pasta para nosso projeto, chamada io-local . Iniciaremos nosso projeto Node.js usando o comando npm init . Feito isso, vamos criar um arquivo chamado readFileSync.js e colocar nele o seguinte código:
io-local/readFileSync.js










