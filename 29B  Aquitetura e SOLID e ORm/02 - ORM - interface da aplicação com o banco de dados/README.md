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

Nosso Model esta criado! Agora vamos passar para o proximo passo as ***migrations**

# migrações / Migration
Uma migration é  uma forma de versionar o schema do banco de dados, ou seja, cada migration contera um pedaço de codigo que representa, no conjunto, todas as alterações  feitas no historicos do nosso banco de dados.

Imagine assim: Você  escreve  um código definindo  como um banco de dados de ser criaddo, e esse codigo fica salvo num arquivo na pasta migrations  Após um tempo, uma atualização é feita, e uma coluna é acrescentada em uma tabela. O que você faz? Escreve em outro arquivo o código para acrescentar essa coluna. Cada arquivo é marcado com uma estampa datetime , então ao longo do tempo esse código, que é mantido no controle de versão do git, vai empilhando dezenas, às vezes centenas de arquivos, e cada um marca uma versão do banco de dados e o seu histórico de mudanças e evoluções. Quem clona um projeto pela primeira vez roda suas migrations para configurar, sem ter que fazer mais nada, o banco de dados no formato mais recente enviado para master . Aí é possível trabalhar localmente no banco de dados da aplicação sem medo de ele ser diferente da versão mais nova que encontramos em master .
Usando migrations, o mapeador objeto-relacional sabe exatamente quais alterações executar no banco de dados, tanto para criar algo novo quanto para restaurar o banco para uma versão mais antiga. Além disso, uma migration tem dois códigos conhecidos como Up e Down . Ou seja: toda migration, além de saber o que fazer para executar as mudanças no banco de dados ( Up ), também deve saber como reverter essas mudanças ( Down ). Isso significa que as migrations têm o poder de avançar ou reverter o seu banco de dados para qualquer um dos estados que ele já teve.
Chega de explicações! Vamos ver em código como fazemos uma migration. Antes de começarmos a falar de migrations, nós criamos o banco de dados, fizemos sua conexão com a nossa aplicação, instalamos o CLI, criamos o nosso model e já geramos um arquivo XXXXXXXXXXXXXX-create-user.js ! Agora, podemos seguir em frente e configurar nossa primeira migration para criar a tabela Users .
Ao abrir o arquivo, você já irá se deparar com a estrutura correta de uma migration. O conteúdo do arquivo deve ser parecido com isso:

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

Iremos mexer apenas dentro das funções up e down , como dito anteriormente. Reparem que ambas as funções recebem dois parâmetros: um é o queryInterface , e o outro é o Sequelize . Ambos os parâmetros são objetos que armazenam dados e operações. O queryInterface é usado pelo sequelize para modificar o banco de dados, seguindo o "dialeto" do banco que estamos utilizando. O objeto Sequelize armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar , string , integer , date etc.
No código acima, a migration da tabela Users foi criada automaticamente quando o seu model foi criado. Perceba que os campos id , fullName , createdAt e updatedAt já foram adicionados na migration pelo próprio Sequelize, o que facilita bastante o nosso trabalho!
Caso seja necessário desfazer essa operação, o código irá apenas apagar a tabela. Assim escrevemos uma migration perfeitamente reversível!
Com a migration criada, devemos adicionar o que ela de fato irá fazer, tanto na execução ( up ), quanto na reversão ( down ). Atenção! Se o código da migration contiver erros, as suas migrations podem não executar direito nos processos de criar ou desfazer uma nova versão do banco. É preciso ter bastante cuidado na hora de mexer no código de uma migration.
Como fizemos no model, vamos adicionar uma coluna de email na migration da tabela Users .

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      // adicionamos um novo campo 'email' como foi feito no model !
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};


Com a migration criada, basta executarmos pelo CLI:
- npx sequelize db:migrate
Caso queira reverter uma migration:
- npx sequelize db:migrate:undo

Teste os dois comandos para analisar o funcionamento! É seu exercício de fixação! Experimente, também, usar os comandos que aprendemos para criar uma nova migração reversível. Rode-as, reverta-as, brinque com as migrations. Assim você começará a dominá-las! 💥
Criando uma nova migration para alterar uma tabela já existente
Imagine agora com base no modelo User se for preciso salvar o telefone do usuário, o que pode vir a mente é que basta adicionar o novo atributo no modelo e na migration como fizemos com o atributo email , correto?
Errado , essa é uma prática que não é escalável, pela seguinte situação, imagine que foi feito um deploy do seu código e a migration foi usado para criar o banco em ambiente de produção, você teria que rodar o comando db:migrate:undo e recriar o banco para executar o comando db:migrate para recriar uma tabela, qual o problema disso? Ao rodar o undo você perdeu todos os dados salvos anteriormente na tabela, e isso é a coisa que jamais você deve fazer.
Então, como seria a forma correta de adicionar uma nova coluna em uma tabela já existente?
Criar uma nova migration que permita alterar a tabela, e para isso o objeto queryInterface possui funções específicas que permitem criar uma nova coluna, remover uma coluna ou mesmo mudar o tipo de uma coluna que já existe. Nesse caso, o queryInterface abstrai o que a função ALTER TABLE faz no SQL, como aprendemos no conteúdo sobre estrutura de banco de dados.
Se você quiser criar uma outra migration para adicionar a coluna phone na sua tabela Users , você pode criar um novo arquivo com o comando:

 npx sequelize migration:generate --name add-column-phone-table-users
 Um novo arquivo XXXXXXXXXXXXXX-add-column-phone-table-users.js será criado na pasta migration contendo o seguinte código:
 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

Esse código representa o esqueleto da migration que foi criada. Assim Podemos inserir a função queryInterface.addColumn() no escopo Up par adicionar uma nova coluna a nossa tabela Users , e adicionar a função queryInterface.removeColumn() no escopo Down para remover a nova coluna da tabela.

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'phone_num', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone_num');
  }
};

Em seguida rodamos o comando para executar a nossa nova migration:

 npx sequelize db:migrate

 E alteramos o model user.js para incluir a nova coluna phone :
 const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  // aqui inserimos o datatype da coluna criada
  phone_num: DataTypes.STRING,
  });

  return User;
}

E pronto! Conseguimos criar uma migration para adição da coluna phone na tabela Users . Desta maneira, se outra pessoa for alterar este projeto em outro computador, ela pode executar as migrations e atualizar o banco de dados local com as modificações feitas por você!
Além de adicionar ou remover colunas, o objeto queryInterface também permite que você altere a estrutura de uma coluna como seu tipo, valor default entre outros detalhes assim como o ALTER TABLE também permite. Você pode consultar esse link da documentação do Sequelize para ver como utilizar esse recurso.
Agora, vamos aprender a popular nosso banco de dados utilizando o Seeders .

# Seders
Agora que sabemos de um jeito seguro de criar e recriar um banco de dados, alem de acrescentar/ excluir tabelas e colunas, nós entramos numa outra etapa. Pense, agora que toda vez que executamos as migrations, nosso banco de dados é criado do zero ou seja, sem informações dentro das tabelas.

Vamos supor que estamos trabalhando num projeto que é um e-commerce. Acabamos de entrar nesse projeto e estamos montando nosso ambiente. executamos as migrations e nosso banco de dados foi criado. |Em seguida, executamos o projeto localmente. Quando entramos na home do site não existe nenhum produto, nem categoria, nenhuma marca, nenhum usuario cadastrado e por ahi vai.

os seeders chegam pra resolver problemas como esse! As bibliotecas de mapeamento objeto-relacional permite que controlemos informações que devem ser criadas assim que nosso banco de dados/tabelas forem ciadas. ou seja, podemos configurar nosso banco para ser automaticamente criado e povoado!

No exemplo do e-commerce acima, podemos criar seeds responsavel por gerar informações de produtos, marcas categoirias e etc, toda vez que um banco de dados fosse criado. Com isso, sempre que criássemos o banco de dados do zero e executássemos o projeto, teríamos um e-commerce com as informações básicas para que fosse possível navegar. Isso é especialmente útil quando, num contexto de testes automatizados, precisamos criar um banco e povoar com dados para testá-los! Aprenderemos sobre isso mais adiante nesse bloco.
Conclusão: um seeder é usado para, basicamente, alimentar o banco de dados com informações necessárias para o funcionamento mínimo da aplicação. Bom, vamos ver agora um pouco da prática de como fazer isso em código. Os seeds seguem a mesma linha das migrations.
Primeiramente vamos precisar executar pelo CLI a criação de um novo seed:

- npx sequelize seed:generate --name users

Reparem que o arquivo foi criado dentro da pasta seeders com o mesmo formato de um arquivo de uma migration. Agora, devemos adicionar, ao arquivo criado, quais informações aquele seed irá gerar. O código abaixo irá adicionar dois usuários ao banco de dados:
seeders/[timestamp]-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

Na função acima, estamos utilizando o parâmetro recebido pela função queryInterface para conversar com o banco de dados. Dessa forma conseguimos inserir os dados que queremos. Estamos adicionando os dados, que estão na estrutura de uma array de objetos, na tabela Users . O queryInterface tem a função bulkInsert , a qual estamos utilizando, que insere múltiplos dados na tabela.
Note que o seed segue o mesmo princípio de up e down , ou seja, devemos colocar, também, o que o seed deve fazer caso precise reverter a operação. Aqui, também, um código ruim pode quebrar o fluxo de uso/reversão dos seeds, então escreva com atenção! Para executar o seed, basta rodarmos o comando:

- npx sequelize db:seed:all

E para reverter:

- npx sequelize db:seed:undo:all

Teste os dois comandos para analisar o funcionamento! Povoe a outra tabela que você criou no exemplo anterior com alguns seeds. Rode-os e reverta-os! 💥

# Operações
Com o model implementado, caso precisemos gravar/ler algum dado do banco de dados, conseguimos faze-lo também. Caso precisemos buscar todas as pessoas usuárias, por exemplo, basta fazermos algo parecido com o exemplo de código abaixo:
controllers/userController.js

const express = require('express');
const { User } = require('../models');
const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// ...

module.exports = router;

Note que não precisamos escrever uma query SQL para buscar os dados, pois o Sequelize abstrai isso para nós. Ele oculta essa complexidade e nos provê uma forma menos trabalhosa de escrever esse código.
Reparem que estamos importando o modelo que criamos do arquivo index.js da pasta models, e não diretamente do arquivo User.js . Quando executamos o comando npx sequelize init , o arquivo index.js é gerado dentro da pasta models.
O código desse arquivo index.js é responsável por, basicamente, realizar a conexão com o banco de dados, através do arquivo config.json , coletar todos os modelos definidos dentro da pasta models e, caso necessário, associar um modelo a algum outro. O caso que mostramos acima foi para buscar todas as pessoas usuárias, mas conseguimos realizar todas as outras operações de consulta, inserção e deleção também.
controllers/userController.js

const express = require('express');
const { User } = require('../models');
const router = express.Router();

// ...

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email }});

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
router.put('/:id', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const [updateUser] = await User.update(
      { fullName, email },
      { where: { id } },
    );

    console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy(
      { where: { id } },
    );

    console.log(deleteUser) // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;

Por último, crie um arquivo index.js (código logo abaixo) na raiz do seu projeto. Teste e veja o comportamento de uma aplicação utilizando o Sequelize. Caso tenha alguma dúvida até aqui, na seção "Sequelize do 0" terá um vídeo demonstrando a criação de uma aplicação em Sequelize.
index.js

const express = require('express');
const bodyParser = require("body-parser");

const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));


O intuito do conteúdo de hoje é apresentar para vocês o Sequelize e suas funcionalidades. O importante é que vocês entendam as diferenças da forma que vocês faziam, antes do Sequelize, para essa nova forma, e onde devem usar.














