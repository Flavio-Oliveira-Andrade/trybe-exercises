# Configurando o Sequelizer
***instalar Sequelize**
Para começar, vamos iniciar uma aplicação node.js e intalar o sequelize:

 - mkdir app-with-sequelize && cd app-with-sequelize
 - npm init -y
 - npm install sequelize
 -
 - npm install --save sequelize
 - npm install sequelize-cli
 - npm install mysql2

## iniciando o sequelize
depois  que instalamos o CLI, precisamos iniciar um projeto com sequelize. para isto, vamos executtar o seguinte comando dentro da pasta raiz:

- npx sequelize-cli init

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

### Criando Banco de dados usando CLI do sequelize
Agora que iniciamos uma aplicação do sequelize, podemos criar o banco de dados ORM_EXEMPLE que nomeamos no arquivo config.json  atraves deste comando

-  npx sequelize db:create
-  mysql -u root -p    para entar no MySQL
-  show databases;     para verivicar a criação do banco de dados, tem que ter ponto virgula ao final


Para criar um model, usamos o seguinte comando no cli (nao execute o comando abaixo, ele é apenas um template de como criar um model):

 npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
  O paramentro `--name` se refere ao nome das colunas e os tipos de dados que ela contém
  o paramentro `--atributes` se refere ao nome das colunas e os tipos de dados que ela contem

- npx sequelize model:generate --name User --attributes fullName:string

## faça amudança no model por funcão
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;


### O model fica responsável apenas por representar a estrutura do banco de dados
### Com o Sequelize, essa lógica se centraliza nos controllers ou services

### Com a migration criada, basta executarmos pelo CLI:
- npx sequelize db:migrate
### Caso queira reverter uma migration:
-  npx sequelize db:migrate:undo

### Se você quiser criar uma outra migration para adicionar a coluna phone na sua tabela Users , você pode criar um novo arquivo com o comando:
-  npx sequelize migration:generate --name add-column-phone-table-users

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
### enato criamos nosso codigo
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
## Em seguida rodamos o comando para executar a nossa nova migration:
-  npx sequelize db:migrate

###  E alteramos o model user.js para incluir a nova coluna phone :
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  // aqui inserimos o datatype da coluna criada
  phone_num: DataTypes.STRING,
  });

  return User;
}