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
