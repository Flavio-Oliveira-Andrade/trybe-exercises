### O que é Node.js?

Como dito anteriormente, o Node.js surgiu do V8, que é a ferramenta do Google Chrome responsável por ler e executar as instruções que escrevemos em JavaScript, processo comumente chamado de interpretar o código. Ao software responsável por interpretar o código dá-se o nome de interpretador , engine e, por vezes, de runtime . Por isso, é comum dizer que o NodeJS é um runtime JavaScript.
Apesar de ser baseado no V8, o Node.js possui algumas diferenças em relação ao interpretador que funciona nos navegadores. Dentre elas, as principais são a ausência de métodos para manipulação de páginas web e a presença de métodos que permitem acessar o sistema de arquivos e a rede mais diretamente.

### Exportando e importando de módulos

Quando queremos utilizar o conteúdo de um módulo ou pacote de outro arquivo no Node.js, precisamos importar esse módulo / pacote para o contexto atual no qual estamos.
Existem dois sistemas de módulos difundidos na comunidade JavaScript:
Módulos ES6 ;
Módulos CommonJS

## ES6

O nome ES6 vem de ECMAScript 6, que é a especificação seguida pelo JavaScript.
Na especificação do ECMAScript 6, os módulos são importados utilizando a palavra-chave import , tendo como contrapartida a palavra-chave export para exportá-los.
O Node.js não possui suporte a módulos ES6 por padrão, sendo necessário o uso de transpiladores, como o Babel, ou supersets da linguagem, como o TypeScript, para que esse recurso esteja disponível. Transpiladores são ferramentas que leêm o código-fonte escrito em uma linguagem como o Node.js e produz o código equivalente em outra linguagem. Supersets são linguagens que utilizam um transpilador para adicionar novas funcionalidades ao JavaScript.
Para saber mais sobre módulos ES6 e transpiladores, dê uma olhada na seção Recursos Adicionais.

## CommonJS

O CommonJS é o sistema de módulos implementado pelo Node.js nativamente e, portanto, o sistema que utilizaremos daqui pra frente. Veja as próximas seções para entender como ele funciona
Vamos dar uma olhada, primeiramente, em como exportamos algo de um módulo ou arquivo JavaScript.

### Exportando módulos

Para exportar algo no sistema CommonJS, utilizamos a variável global module.exports , atribuindo a ela o valor que desejamos exportar:
// brlValue.js
const brl = 5.37;

module.exports = brl;

Note como utilizamos as palavras-chave module.exports . Como vimos anteriormente, um módulo possui um escopo isolado, ou seja, suas funções, variáveis, classes e demais definições existem somente dentro do módulo. O module.exports nos permite definir quais desses "objetos" internos ao módulo serão exportados , ou seja, serão acessíveis a arquivos que importarem aquele módulo. O module.exports pode receber qualquer valor válido em JavaScript, incluindo objetos, classes, funções e afins.
No arquivo acima estamos exportando do nosso módulo o valor da constante brl , que é 5.37 . Ao importarmos esse módulo, receberíamos o valor 5.37 como resposta. Apesar de isso funcionar, exportar um único valor constante assim não é comum. Vamos observar um caso que acontece com mais frequência:


// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;

Agora estamos exportando uma função de forma que podemos utilizá-la para converter um valor em dólares para outro valor, em reais.
O uso desse nosso módulo se daria da seguinte forma:

// index.js
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7

Perceba que podemos dar o nome que quisermos para a função depois que a importamos, independente de qual o seu nome dentro do módulo.

Suponhamos agora que seja desejável exportar tanto a função de conversão quanto o valor do dólar (a variável brl ). Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:

// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};

Dessa forma, ao importarmos o módulo, receberemos um objeto como resposta:

// index.js
const brlValue = require('./brValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7

Por último, como estamos lidando com um objeto, podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:

const { brl, usdToBrl } = require('./brValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7


### Importando módulos

Você verá, a seguir, como utilizar o require para importar cada tipo de módulo.

## Módulos locais

Quando queremos importar um módulo local, precisamos passar para o require o caminho do módulo, seguindo a mesma assinatura. Por exemplo, require('./meuModulo') . Note que a extensão ( .js ) não é necessária: por padrão, o Node já procura por arquivos terminados em .js ou .json e os considera como módulos.
Além de importarmos um arquivo como módulo, podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos, mas desejamos importar todas as suas funcionalidades de uma vez só. Nesse caso, a pasta precisa conter um arquivo chamado index.js , que importa cada um dos arquivos do módulo e os exporta da forma mais conveniente.
Por exemplo:

// meuModulo/funcionalidade-1.js

module.exports = function () {
  console.log('funcionalidade1');
}

// meuModulo/funcionalidade-2.js

module.exports = function () {
  console.log('funcionalidade2');
}

// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };

Note que utilizamos a palavras-chave module.exports . Confome já vimos, um módulo possui um escopo isolado, ou seja, suas funções, variáveis, classes e demais definições existem somente dentro do módulo. O module.exports nos permite definir quais desses "objetos" internos ao módulo serão exportados , ou seja, estarão acessíveis para arquivos que importarem aquele módulo. O module.exports pode receber qualquer valor válido em JavaScript, incluindo objetos, classes, funções e afins. No exemplo acima, isso quer dizer que, quando importarmos o módulo meuModulo , teremos um objeto contendo duas propriedades, que são as funcionalidades que exportamos dentro de meuModulo/index.js .
Para importarmos e utilizarmos o módulo meuModulo , basta passar o caminho da pasta como argumento para a função require , assim:


// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');1

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();

Módulos internos
Para utilizarmos um módulo interno, devemos passar o nome do pacote como parâmetro para a função require . Por exemplo, require('fs') importa o pacote fs , responsável pelo sistema de arquivos.
Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável, dessa forma:

const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');

Repare que o nome da variável pode ser qualquer um que escolhermos. O que importa mesmo é o nome do pacote que passamos como parâmetro para o require .

Módulos de terceiros

Módulos de terceiros são importados da mesma forma que os módulos internos: passando seu nome como parâmetro para a função require . A diferença é que, como esses módulos não são nativos do Node.js, precisamos primeiro instalá-los na pasta do projeto em que queremos utilizá-los. O registro oficial do Node.js, em que milhares de pacotes estão disponíveis para serem instalados, é o npm . Além disso, npm também é o nome da ferramenta de linha de comando (CLI - command line interface ) responsável por baixar e instalar esses pacotes. O CLI npm é instalado juntamente com o Node.js.
Quando importamos um módulo que não é nativo do Node.js, e não aponta para um arquivo local, o Node inicia uma busca por esse módulo. Essa busca acontece na pasta node_modules . Caso um módulo não seja encontrado na node_modules mais próxima do arquivo que o chamou, o Node procurará por uma pasta node_modules na pasta que contém a pasta atual. Caso encontrado, o módulo é carregado. Do contrário, o processo é repetido em um nível de pasta acima. Isso acontece até que o módulo seja encontrado, ou até que uma pasta node_modules não exista no local em que o Node está procurando.
Aproveitando que estamos falando sobre módulos de terceiros, vamos falar melhor do NPM: você entenderá melhor o que ele é e como utilizar os principais comandos do seu CLI. Bora lá!

### NPM
O NPM (sigla para Node Package Manager ) é, como dito no tópico anterior, o repositório oficial para publicação de pacotes NodeJS. É para ele que realizamos upload dos arquivos de nosso pacote quando queremos disponibilizá-lo para uso de outras pessoas ou em diversos projetos. Atualmente, uma média de 659 pacotes são publicados no NPM todos os dias, segundo o site ModuleCounts.com
Um pacote é um conjunto de arquivos que exportam um ou mais módulos Node. Nem todo pacote Node é uma biblioteca, visto que uma API desenvolvida em Node também tem um pacote.
Você entenderá mais sobre o que compõe um pacote mais à frente.

Utilizando o CLI npm

O CLI do npm é uma ferramenta oficial que nos auxilia no gerenciamento de pacotes, sejam eles dependências da nossa aplicação ou nossos próprios pacotes. É através dele que criamos um projeto, instalamos e removemos pacotes, publicamos e gerenciamos versões dos nossos próprios pacotes. Publicar um pacote público no npm é gratuito e não há um limite de pacotes que se pode publicar. Existem, no entanto, taxas de assinaturas, caso desejemos hospedar pacotes de forma privada, ou seja, pacotes sob os quais só nós temos o controle de acesso.
Para entender melhor o npm e seu uso na prática, assista ao vídeo a seguir:

Como você pode ver no vídeo, o npm nos provê alguns comandos importantes, vários dos quais já temos usado há bastante tempo no curso! Você terá acesso ao Cheat Sheet dos comandos neste repositório para consultas rápidas. No entanto, vamos passar por alguns deles para uma explicação mais aprofundada:

### npm init

O comando npm init nos permite criar, de forma rápida e simplificada, um novo pacote Node.js na pasta onde é executado.
Ao ser executado, o comando pede para quem executou algumas informaçãoes sobre o pacote como nome, versão, nome das pessoas autoras e afins. Caso desejemos utilizar as respostas padrão para todas essas perguntas, podemos utilizar o comando com a flag -y , ou seja, npm init -y ; dessa forma, nenhuma pergunta será feita, e a inicialização será realizada com os valores padrão.
Para criar um novo pacote Node.js, o npm init simplesmente cria um arquivo chamado package.json com as respostas das perguntas realizadas e mais alguns campos de metadados. Para o Node.js, qualquer pasta contendo um arquivo package.json válido é um pacote.
Dentro do package.json é onde podemos realizar algumas configurações importantes para o nosso pacote como nome, versão, dependências e scripts .
Falando em scripts, vejamos um pouco mais sobre eles:

### npm run

O comando run faz com que o npm execute um determinado script configurado no package.json . Scripts são "atalhos" que podemos definir para executar determinadas tarefas relacionadas ao pacote atual.
Para criar um script, precisamos alterar o package.json e adicionar uma nova chave ao objeto scripts . O valor dessa chave deve ser o comando que desejamos que seja executado quando chamarmos aquele script.
Por exemplo, para ter um script chamado lint que execute a ferramenta de linter que usamos aqui na Trybe, o ESLint, nossa chave scripts fica assim:

{
  "scripts": {
    "lint": "eslint ."
  }
}

npm run lint

Você pode criar quantos scripts quiser, para realizar quais tarefas quiser. Inclusive, pode criar scripts que chamam outros scripts, criando assim "pipelines". Esse tipo de coisa é muito útil, por exemplo, quando trabalhamos supersets do JavaScript como o TypeScript , ou transpiladores como o Babel , pois ambos exigem que executemos comandos adicionais antes de iniciar nossos pacotes.
Agora que vimos o que são scripts, vamos falar de um script especial: o start . Esse script é especial pois é utilizado por um comando do npm diferente do npm run : o npm start . Entenda sobre ele a seguir:

### npm start

O comando npm start age como um "atalho" para o comando npm run start , uma vez que sua função é executar o script start definido no package.json .
Como convenção, todo pacote que pode ser executado pelo terminal (como CLIs, APIs e afins) deve ter um script start com o comando necessário para executar a aplicação principal daquele pacote.
Por exemplo, se tivermos um pacote que calcula o IMC (Índice de Massa Corporal) de uma pessoa cujo código está no arquivo imc.js , é comum criarmos o seguinte script:

{
  // ...
  "scripts": {
    "start": "node imc.js"
  }
  // ...
}

Dessa forma, qualquer pessoa que for utilizar seu script vai ter certeza de como inicializá-lo, pois só vai precisar executar npm start .

npm install

Você provavelmente já utilizou esse comando durante o módulo de Front-End. Ele é o responsável por baixar e instalar pacotes Node.js do NPM para o nosso pacote, e existem algumas formas de usá-lo:
npm install <nome do pacote> : Baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json
npm install -D <nome do pacote> : É semelhante ao comando anterior. Baixa o pacote do registro do NPM, porém o adiciona ao objeto devDependencies do package.json , indicando que o pacote em questão não é necessário para executar a aplicação, mas é necessário para desenvolvimento, ou seja, para alterar o código daquela aplicação. Isso é muito útil ao colocar a aplicação no ar, pois pacotes marcados como devDependencies podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la.
npm install : Baixa e instala todos os pacotes listados nos objetos de dependencies e devDependencies do package.json . Sempre deve ser executado ao clonar o repositório de um pacote para garantir que todas as dependências desse pacote estão instaladas.

### Criando um script simples

Agora que chegamos até aqui, vamos criar o famoso Hello World em Node.js. Vem com a gente!
Criando o pacote Node.js
Vamos começar criando uma nova pasta, chamada hello-world , onde colaremos nosso código.
Uma vez dentro dessa pasta, execute o comando npm init . Deixe todas as perguntas com o valor padrão, a não ser o nome da pessoa autora ( author: ), onde você colocará seu nome.
Pronto! Nosso pacote está criado. Abra a pasta hello-world no VSCode e vamos começar a criar nosso script.

### Criando o código do Hello, world!

Dentro da pasta hello-world , crie um arquivo chamado index.js . Por padrão, esse é o arquivo principal de qualquer aplicação Node.js, e é comum darmos esse nome ao arquivo que deve ser executado para iniciar nosso programa. Sendo assim, por convenção, todo pacote Node.js deve ter um arquivo index.js , salvo exceções, que devem ser documentadas no README do repositório.
Dentro do index.js , adicione o seguinte código:

console.log('Hello, world!');

E pronto, nosso script de "Hello, world!" está criado! Mas nosso pacote ainda não está pronto. Vamos criar um script start para estarmos aderentes às convenções do Node.js.
Criando o script start
Como você viu anteriormente, para criar um script, precisamos alterar o package.json da nossa aplicação. Sendo assim, abra o package.json da pasta hello-world e altere a linha destacada para criar o script start dessa forma:
Copiar
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "Seu nome",
  "license": "ISC"
}
Executando o script
Agora que temos tudo criado e configurado, chegou a hora de executar nosso Hello, world! Para isso, navegue até a pasta hello-world no terminal e execute npm start .
E pronto! Temos nosso primeiro "Hello, world!" sendo executado com Node.js!
Mas, cá entre nós, essa coisa de "Hello, world!" simples já tá um pouco batida, né? 😝
Vamos, então, dar uma incrementada nesse script, adicionando o nome e sobrenome da pessoa que chamou nosso script!
Lendo input do terminal
Para podermos ler o nome e sobrenome da pessoa que executou o script, vamos utilizar um pacote de terceiros: o readline-sync .
Por tratar-se de um módulo de terceiros, precisamos primeiro instalar o readline-sync pra podermos utilizá-lo no código.
Para fazer isso, basta executarmos, dentro da pasta hello-world , o comando npm i readline-sync . A letra i aqui é um atalho para install . Ela também funciona com a flag -D para devDependencies , e sem parâmetro nenhum, para instalar as dependências listadas no package.json .
Uma vez instalado o pacote, podemos utilizá-lo em nosso script. Para isso, precisamos, primeiro, importá-lo:
Copiar
const readline = require('readline-sync');

// console.log('Hello, world!');
Perceba que, apesar do pacote chamar-se readline-sync , podemos dar qualquer nome para a const que usamos para importá-lo.
Agora, com o pacote em mãos, podemos utilizar as funções question e questionInt disponibilizadas por ele para perguntar à pessoa usuária seu nome e idade:
Copiar
// const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

// console.log('Hello, world!');
A função question interpreta a resposta como uma string comum, ao passo que a função questionInt converte a resposta para número utilizando o parseInt e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.
Pronto, o próximo e último passo é utilizarmos essas novas variáveis para compor nossa mensagem de olá.
Copiar
// const readline = require('readline-sync');

// const name = readline.question('What is your name? ');
// const age = readline.questionInt('How old are you? ');

console.log(`Hello, ${name}! You are ${age} years old!`);
E, agora, se executarmos novamente, veremos o resultado: perguntamos qual o nome e idade da pessoa e, depois, exibimos uma mensagem personalizada.
Execute novamente o script com npm start para vê-lo em ação











