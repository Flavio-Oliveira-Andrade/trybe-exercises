## O que vamos aprender?

Sua aplicação de back-end muitas vezes vai se comunicar com o banco de dados . O mapeamento Objeto-relacional, ou ORM na sigla em inglês, prove  uma forma de , Atraves de codigos JavaScripts, alterar e interagir com o banco de dados de qualquer  forma que for necessaria, Voce passa a poder , então, criar alterar tabelas, fazer consulta, inserir e extrair dados do seu banco de dados sem nunca fazer nada que escrever codigo javaScrpts

### Voĉe sera capaz de :
- Ultilizar o sequelize para interagir com seu banco de dados
- Criar migração utilizando o sequeliza
- Criar seeds utilizando o sequelize

 ## Por que isso é importante ?
 As bibliotecas que trabalham com ORM, como o sequelise que mencionaremos aqui, abstraem muitaas funções do banco de dados isto é: elas ocultam parte de sua complexidade e a envelopam numa  função de uso mais agil e intuitivo. isso facilita o  seu trabalho, a manutenção do codigo e o deixa menos propenso a erros. Como falamos no dia de SOLID, o objetivo aqui é escrever um codigo simplificado! Isso (ou seja, barateia a manutenção e extensão de codigos! è mais um passo no rumo do conhecimento avançado em qualidade de codigos  que estamos vendo nesse bloco !
 )

## Conteúdos
Mapeamento objeto relacional ORM (Object Relacional Mapper ) é uma técnica /camada de mapeamento que permite fazer uma relação de estruturas de dados da nossa aplicação com os dados do banco de dados que as mesmas representam. O mapeamento objeto relacional abstrai as diferenças entre os dois paradigmas, da aplicação e do banco de dados.


Vamos trazer isso pra prática! Suponha que temos uma aplicação que gerencia clientes. Nela teremos um objeto que chama Pessoas . Esta é a representação da entidade Pessoas na aplicação:

{
  "id": 1,
  "name": "Leonardo",
  "age": 30,
  "height": 180
}

Já para representar Pessoas no banco de dados relacional, nós usamos tabelas, em que cada linha vai representar uma entidade. Essa é a representação de Pessoas no nosso banco de dados:
Já para representar Pessoas no banco de dados relacional, nós usamos tabelas, em que cada linha vai representar uma entidade. Essa é a representação de Pessoas no nosso banco de dados:

Até aí tudo bem, certo? Agora imagine que nosso sistema recebe informações de uma nova pessoa e precisa salvar isso no banco de dados. Para isso, precisamos implementar, em algum lugar do nosso projeto, funções que "falem", entre outras coisas, que o nome que recebemos para salvar pode ser armazenado na coluna name do banco de dados. Além disso, precisaríamos escrever "na mão" o código SQL que faz a inserção dos dados no banco, de acordo com o banco de dados que estamos utilizando (MySQL, PostgreSQL etc). Agora, pense em ter 15 tabelas, cada uma com oito colunas, múltiplos relacionamentos se cruzando e por aí vai. Imagine o quão complexo pode ficar nosso projeto ao longo do tempo.
Para facilitar um pouco o nosso trabalho, existem várias bibliotecas de mapeamento objeto-relacional que podemos utilizar para abstrair essa complexidade , colocando sobre ela uma camada mais simples de código com a qual podemos interagir para lidar com banco de dados. Dessa forma, não precisamos mais escrever uma query SQL "crua" para cada vez que formos inserir um registro na tabela. A própria biblioteca fica responsável por isso, você apenas passa o objeto JavaScript para ela e ela insere os dados no banco de dados.
No Node.js , uma das bibliotecas mais famosas é o Sequelize , que tem suporte aos banco de dados PostgreSQL, MariaDB, MySQL, SQLite e Microsoft SQL Server.

## Mapeamento
No  Mercado, existe dois padrões que são  mais utilizados para realizar os mapeamentos. Esses padrões são o Data Mapper e o Active Record . Ambos os padrões  foram definidos por martin fowler em seu livro `Padrões de Arquitetura de aplicações Corporativa`. Vamos ver um pouco sobre ambos  abaixo.

### Data Mapper
Nesse padrão, a classe que representa a tabela do banco de dados não deve conhecer os recursos necessarios para realizar as transações com o banco de dados
No Data Mapper , como podemos ver acima, a entidade Pessoa está desacoplada do banco de dados. As informações e os comportamentos relacionadas à Pessoa no contexto específico do nosso negócio ficam em um lugar, e em um outro, o Mapeador Pessoa , temos a camada responsável por criar as transações das informações com o banco de dados.
Isso significa que, enquanto o Mapeador Pessoa está fortemente acoplado ao banco de dados e deve ser refatorado ou refeito sempre que houver mudança na estrutura do banco de dados, a entidade Pessoa está completamente independente - a ela não interessa como o banco de dados está. Essa complexidade é absorvida pelo mapeador.

### Active Record
Diferentimente do anterior, a classe  que representa a tabela conece os recurso necessarios para realizar as transações no banco de dados

No Active Record o model está diretamente acoplado ao banco de dados. Dessa forma, o nosso próprio model descreve as operações do banco de dados e tem conhecimento de como salvar os dados, atualizá-los, deletá-los etc.

## Qual devo usar ?
A resposta , como sempre é "depende". O estilo Active Record e mais simples de ser implementar, mas o data mapper facilita atualizações e mudança na estrutura do banco de dados

## Sequelize
Agora, vamos utilizar o sequelizer, que segue a linha Active Record, juntamente com uma aplicação simples `node.js`. Para o banco de dados iremos utilizar o MySQL. Vale ressaltar que a maioria dos metodos fornecidos pelo Sequelizer são assincronos e , portanto, retornam promisses. Podemos usar Then, catch etc. para taratar os retornos, ou podemos utilizar, tambem async e await.

O fluxograma abaixo mostra as estapas para a implementação do sequelize no seu projeto. Pode parecer um Processo complexo, mas esta biblioteca ORM possui muitas vantagens sobre a utilização de uma  interface direta com o MySQL. O javascripts sozinho nao possui um suporte eficiente para o SQL, afinal, você precisa de um scrpts SQL separando para criar seu database e tabelas, sem falar que as queries SQl precisam ser incorporadas ("embedados") no codigo do javascripts para serem utilizados. no final, estamos apenas incluindo boilerplates de SQl em vez de utilizar A logica de negocio , na nossa aplicação .

***Boilerpretes**: trechos de codigo que podemos ser utilizados em muitos lugares compouca ou nenhuma alteração.
Usando o sequelize, voce  pode evitar a criação de queries  SQl e utilizar models e migrations para criar as tabelas em vez de um scripts SQl separado. com isso , o seu codigo se torna mais legivel, extensivel e de facil manutenção, . alem disso, por meio do mapeamento por objtos relacionais (Active aRecord), é possivel criar as relações e associações entre as tabelas com o propio JavaScripts. E ainda é possivel migrar seu database para outro banco de dados sem precisar reescrever o codigo (por exemplo: MySQl para SQL serve ).

# Configurando o Sequelizer
***instalar Sequelize**
Para começar, vamos iniciar uma aplicação node.js e intalar o sequelize:

 - mkdir app-with-sequelize && cd app-with-sequelize
 - npm init -y
 - npm install sequelize

 Atenção! Vá fazendo cada passo junto conosco, sao seus exercicios de fixação.
 O primeiro passo para utilizar o sequelize é instalar um CLI que é responsavél por gerar e executar as operações. Alem de instalar CLI, precisamos installar tambem o mysql2, uma depedencia necessaria para usarmos o mysql. juntamente com o sequelize.

- npm install --save sequelize
- npm install sequelize-cli
- npm install mysql2

## iniciando o sequelize
depois  que instalamos o CLI, precisamos iniciar um projeto com sequelize. para isto, vamos executtar o seguinte comando dentro da pasta raiz:

- npx sequelize-cli init

## Esse comando irá criar as seguintes pastas
- config: contem um arquivo de configuraçõa que "fala" para o CLI como conectar-se com o banco de dados;
- models: contem todos os modelos da nossa aplicação
- migrations: contem todos os arquivos de migração da nossa aplicação;
- seeders: contem todas os arquivos de "seeds".

### conectando ao banco de dados
Agora só nos resta configurar o arquivo config.json gerado pelo init  do cli. Ao alterar esse arquivo, estamos configurando o acesso da aplicaçõ ao nosso banco de dados. vamos modificar somente o objeto development, não vamos nos preocupar com os demais:

config/config.json

{
  "development": {
    "username": "root",
    "password": "",
    "database": "orm_example",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

  // No resto do arquivo você vai encontrar as convenções para conectar o Sequelize em outros ambientes
}

Nota: se necessario, troque o user e a senha do exemplo pelos seus
vamos entender melhor as informações que estamos passando:

Usuário de acesso ao banco de dados;
Senha de acesso ao banco de dados;
Nome do banco de dados no qual queremos conectar;
Host que estamos conectando - por ser local, utilizamos o 127.0.0.1 ;
Dialect é, nada mais nada menos, qual banco estamos utilizando. Dito isso, passamos "mysql".

Vale lembrar que passar as credencias dessa forma não é uma boa pratica, pois nossos dados de acesso ao banco de dados ficam totalmente visiveis para qualquer pessoa que tenha acesso ao codigo da nossa aplicação. mais a frente trataremos essa aplicaçã, para que seja utilizada usando variavei de ambiente.

### Criando Banco de dados usando CLI do sequelize
Agora que iniciamos uma aplicação do sequelize, podemos criar o banco de dados ORM_EXEMPLE que nomeamos no arquivo config.json  atraves deste comando

-  npx sequelize db:create
-  mysql -u root -p
-  show databases;

Confira que o banco orm_exemploi foi criado e voĉe nao precisou escrever uma linha de SQL para isto, essa é uma das primeiras vantagens que o sequelize nos fornece.
Curiosidade : Hoje o Sequelize suporta os bancos MySQL , MariaDB , PostgreSQL , SQLite e Microsoft SQL Server .
# Model
Podemos verificar que dentro da pasta models criada, existe um arquivo index.js  . Este arquivo é gerado automaticamente pelo sequelize e possui um papel muito importante: estabelecer uma instancia de conexão entre os arquivos presentes na pasta model e o banco de dados relacional utilizando. Não Apague este arquivo, ele é necessario para operação do sequelize.

Os models são a essencia do sequelize. Um model é uma abstração que representa uma linha na tabela em seu banco de dados  e diz ao sequelize varias coisas sobre essa entidade, como o nome da tabela no banco de dados e quais colunas ela possui(e seus tipos de dados). O model pode ser definido de duas formas:

- Chamado pela Função `sequelize.define(name,atributo,options)`
- Estendendo `Model` como uma classe e chamado `init(attibutes, options)`

A segunda forma é a padrão para utilização do sequelize, gerada automaticamente quando utilizado os comandos do CLI, e é especifica para programação Orientada a Objetos. Como ainda não apredemos sobre este tipo de desenvolvimento, utilizaremos a primeira forma para definição de models, chamada pela função `sequelize.define()`.

Para criar um model, usamos o seguinte comando no cli (nao execute o comando abaixo, ele é apenas um template de como criar um model):

 npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string

 Alem de gerar o model, ele tambem gera uma migration que ira criar a tabela no banco de dados.não se preucupe, vamos aprender  sobre as migrations no proximo topico. Observe que passamos dois parametros para o comando:

 - O paramentro `--name` se refere ao nome das colunas e os tipos de dados que ela contém. Não é preciso definir todas as colunas neste comando,é possivél adiciona-las direto no arquivo `model.js` gerado e na migration equivalente a este model.
 - o paramentro `--atributes` se refere ao nome das colunas e os tipos de dados que ela contem.  nao é preciso defineir todas as colunas neste comando, é posivél adiciona-las direto no arquivo model.js gerado e na migration equivalente a este model.

Vamos dar um exemplo para ficar mais evidente. Queremos criar uma tabela `Users` que contem dados de vários usuarios. o que fazemos primeiro é gerar um model que ira representar uma instancia de usuario, ou uma linha na tabela Users no nosso banco de dados (lembre-se vamos ver a tabela sendo criada no proximo tópico)

- npx sequelize model:generate --name User --attributes fullName:string

Depois de  rodar este comando, perceba que foi criado um arquivo `user.js` na pasta model, e na pasta migrations foi criado o arquivo `20210310124202-create-user.js`(os numeros, no inicio do nome do arquivo, significa a data e hora da criação dele, seguindo o formato yyy-mm-dd:hh:mm:ss). vamos focar no arquivo user.js por enquanto, perceba que o seguinte código esta presente

models/user.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

Como dito anteriormente, não iremos trabalhar com classes, mas sim com a função sequelize.define() , então substitua este código pelo seguinte:
models/user.js

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;

Perceba que adicionamos uma nova coluna email no nosso model.
Agora, a imagem abaixo mostra o nosso model e migration criados. Perceba que o nome do arquivo model é user.js , o nome da função model definida está no singular User e na migration a tabela foi nomeada como Users .

Um ponto importante de mudança estrutural que o sequelize traz e que, da forma que aprendemos antes, sem o sequelize, nossa logica de validação, interações  com o banco de dados (get, insert, etc), entre outras, se centralizavam no model, Com o sequelize, essa  lógica se centraliza nos controllers ou services. O model fica apenas responsavel  por representar a estrutura do banco de dados para ajudar o sequelize  a realizar as operações . O mundo do Back-end e cheio de  diferentes  forma e filosofias para a organização de um codigo! Essaé uma delas!

Nosso Model esta criado! Agora vamos passar para o proximo passo as migrations








