## O que vamos Aprender ?
Em MySQL você aprendeu a criar relações entre tabelas, utilizar Foreign Keys e PrimarY Keys, e fazer requisições com os temidos maravilhosos `joins`.

## Voce será capaz de:

- Utilizar o sequelizer para criar relacionamento entre tabelas;
- Utilizar Métodos que simulam comandos de integração de tabelas:

## Por que isso é importante
Ja vimos anteriormente quando o sequelize facilita a vida das pessoas programadoras que utilizam aplicações em nodeJS para interagir com banco de dados.

Uma das principais utilidades de banco de dados relacional com o MySQL é a criação de relação entre tabelas, que aumenta sua performace e organize  os dados, alem de outros beneficios.

O sequelize tambem possui ferramentas para criar, manipular e ler as tabelas e seus relacionamnetos, entao mão a obra!

# Relacionamento 1:1

Antes de começar, analise o diagrama abaixo. Esse será o banco de dados que utilizaremos no primeiro exemplo

Podemos notar que existem duas tabelas nesse banco, employees e adresses. cada employees possui um adress, assim como cada address pertence a um employee

Vamos criar um novo projeto para demostrar esse exemplo. No dia anterior  você viu todos os comandos que  vamos utilizar, mas vamos relebrar,,

 npm init -y
 npm i express nodemon sequelize mysql2
 npm i sequelize-cli
 npx sequelize-cli init

 Agora, realize as configurações necessarias no arquivo `config/config.json `. para fazer o exemplo, você  utiliza a chave `development`, entao altere os valores dessa caso necessario, os valores são:

Username da sua instalação do MySQL.
Senha da sua instalação do MySQL.
Database , que é o nome do schema que será criado, em nosso exemplo, iremos utilizar associations .
Host é o IP do seu servidor, no nosso caso, iremos manter 127.0.0.1 .
Dialect que é o tipo de banco SQL que será utilizado (exemplos são: MySQL, MariaDB, PostgreSQL e outros). Vamos utilizar MySQL , então manteremos a opção que vem por padrão.

Apos confugurar o seu `config.json`, precisamos criar o schema que ira conter as nossas tabelas, para fazer isso , utilize o comando abaixo. O schema sera criado com o nome que digitamos na chave `development.database do config.json`

 npx sequelize db:create

 Agora vamos criar as migrations e para criar a migration que será responsável pela tabela Employees , basta utilizar o comando:

  npx sequelize migration:generate --name create-employees

  Abra a migration e adicione o seguinte código:

  module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Employees');
  },
};

Agora vamos criar a migration responsável pela tabela Addresses utilizando o comando:

 npx sequelize migration:generate --name create-addresses

Abra a migration e adicione o seguinte código:

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        references: {
          model: 'Employees',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};

Repare que agora, temos algumas informações  novas passadas para o sequelize no momento de adicionar a coluna. Essas informações informan ao sequelize que aquele campo deve ser uma forign key. Vamos passar por cada um deles:

references.model : Indica qual tabela nossa FK está referenciando.
references.key : Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key .
onUpdate e onDelete : Configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os produtos daquele usuário serão alterados ou excluídos.
Essa migration cria uma FK na tabela Addresses , que relaciona o campo employee_id dessa tabela ao campo id da tabela Employees .
Vamos executar o comando para gerar as migrations:

 npx sequelize db:migrate

 Ok, mas como criamos essa associação no sequelize?
Com as migrations criadas, vamos para os models !
O model de Employee será da seguinte maneira:

// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employee;
};

A função Employee.associate = (models) => {} , que criamos é onde iremos declarar as associações daquele model . No nosso caso, estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id , e que o model Employee deve chamar de addresses (note a letra minúscula), como definido na propriedade as .
Essa função é chamada pelo arquivo models/index.js , criado pelo comando npx sequelize-cli init que você já executou ao começar o exemplo.
Os métodos de criação de associações que o sequelize disponibiliza são:
hasOne
belongsTo
hasMany
belongsToMany
No caso de relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo . A tradução literal desses métodos facilita o seu entendimento.
hasOne = tem um
belongsTo = pertencente a
No model Address , por sua vez, temos que fazer o caminho inverso, declarando que o address pertence a Employee .


// models/Address.js
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee,
      { foreignKey: 'employee_id', as: 'employees' });
  };

  return Address;
};

## Validando relacionamento 1:1
Agora, vamos validar o relacionamento, para isso precisamos criar seeders para inserimos dados nas tabelas e um servidor para responder as requisições.
 npx sequelize seed:generate --name employees
 npx sequelize seed:generate --name addresses

 Depois, abra o arquivo employees dentro da pasta seeders e copie o código abaixo. Todas as seeds quando criadas, tem um timestamp antes do nome do arquivo, lembre-se disso ao procurá-lo:

 module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Employees',
      [
        {
          first_name: 'Marcos',
          last_name: 'Zuck',
          age: 49,
        },
        {
          first_name: 'Fred',
          last_name: 'Mercurio',
          age: 19,
        },
        {
          first_name: 'Ayrton',
          last_name: 'Keno',
          age: 51,
        },
        {
          first_name: 'Robin',
          last_name: 'Mathias',
          age: 63,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};

Faça o mesmo para o arquivo addresses da pasta seeds :

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Flórida',
          number: 1080,
          employee_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          employee_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          employee_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          employee_id: 4,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 4,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};

Depois, utilize o comando abaixo para executar os seeders:

 npx sequelize db:seed:all

 Por último, vamos criar o servidor para testarmos nossas associations . Para diminuirmos a complexidade do exercício, não seguiremos a arquitetura MSC, lembrando que isso não é uma boa prática e deve ser evitada .

// index.js
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

A grande diferença quando vamos fazer uma requisição que necessite da utilização de uma association com o Sequelize, é o campo include . Esse campo diz ao Sequelize quais serão as configurações da requisição. A propriedade model se refere a qual tabela será utilizada. Já a propriedade as deve ser igual ao que declaramos no momento da criação da associação no respectivo model.
Agora inicie o servidor, como instalamos o nodemon anteriormente, iremos utilizar o npx para executá-lo agora, para isso utilize o comando:

 npx nodemon index.js

 Por último, faça uma requisição do tipo GET para o endpoint localhost:3000/employees e verifique a resposta, onde em cada um dos empregados (employees), aparecerá o respectivo endereço (address).


# Relacionamento 1:N
No caso dos relacionamentos 1:n, não ha grande diferençã na maneira como criamos as associações, Caso cada employee possuissee varios adress, bastaria declarar seu model da seguinte forma:

// models/Employee.js
// module.exports = (sequelize, DataTypes) => {
//   const Employee = sequelize.define('Employee', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//   },
//   {
//     timestamps: false,
//     tableName: 'Employees',
//     underscored: true,
//   });

//   Employee.associate = (models) => {
     Employee.hasMany(models.Address,
       { foreignKey: 'employee_id', as: 'addresses' });
//   };

//   return Employee;
// };

- hasMany : tem muitos
Mudamos apenas o método de declaração da associação para hasMany, indicando cada emplo[ pode possuir muitos adress. Observe o id 4 no resultado e vej a diferençã que ocorre quando é usado hasOne ou hasMany.
No model adresses, por sua vez, não ha necessidade de alterarmos nada, pois cada adress continua  pertecendo a apenas um employee, o que justifica o uso do método `beleongsT`.
Acompanhe na pratica como fazer relacionamento 1:1 (Um para Um )e 1:N (um para muitos )