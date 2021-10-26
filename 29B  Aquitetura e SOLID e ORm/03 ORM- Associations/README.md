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

## Utilizando os relacionamentos
Em seguida, veremos os dois métodos de utilização dos relacionamentos:
- Eager loading, ou carregamento antecipado (que utilizamos no exemplo acima),
- lazy loading, ou carregamento tardio.

nesse caso, vamos aprender a utilizar cada um desses dois modos e como eles acontecem no codigo, usando o relacionamento de 1:N que criamos acima:

## Eager Loading

Esse método carrega todos os dados na mesma request. Logo, ao utilizar eager loading, todas as informações são trazidas, idepedente se vamos usa-las ou não. Rstye modo é util para cenarios em que sabemos, ja de antemão, que sempre vamos precisar de todos os dados das entidades envovildas.

Antes de prosseguimos, vamos alterar as informações na tabela. Para isso, utilizaremos os seeders ja criados.
Abra o arquivo xxxxx employees.js dentro da pasta seeders apague tudoque aviamos colocado antes e copie o codigo abaixo

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Employees',
      [
        { first_name: 'Marcos', last_name: 'Zuck', age: 49 },
        { first_name: 'Fred', last_name: 'Mercurio', age: 19 },
        { first_name: 'Ayrton', last_name: 'Keno', age: 51 },
        { first_name: 'Robin', last_name: 'Mathias', age: 63 },
        { first_name: 'Antonio', last_name: 'Augusto', age: 18 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};

Depois, abra o arquivo XXXXXXXXXXXXXX-addresses.js dentro da pasta seeders , limpe-o e copie o código abaixo:

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Florida',
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
          city: 'Belo Horizonte',
          street: 'Rua Vicente Alvarenga',
          number: 80,
          employee_id: 1,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};

Por último, utilize o comando abaixo para remover as tabelas antigas, depois recriá-las e por último, executar as seeders:

 npx sequelize db:migrate:undo:all
 npx sequelize db:migrate
 npx sequelize db:seed:all

 Vamos ver agora, como utilizar o Eager loading na prática. Voltaremos no arquivo index.js e criaremos mais uma rota:

// const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses' }],
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

Agora faça uma requisição do tipo `get` para o endpoint localhost , e veja como o resultado é retornado.
Além das propiedades que ja citamos, o campo `include` pode manipularos dados que serão retornados. Por exemplo, se  não quisermos o acesso ao numero de endereço, bastaria alterar o codigo, adicianando a propiedade `attributes`  e dentro dela o que queremos fazer.

// const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// app.get('/employees/:id', async (req, res) =>  {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//         where: { id },
           include: [{
             model: Address, as: 'addresses', attributes: { exclude: ['number'] },
           }],
//       });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

dessa maneira o campo Number será excluido do return da requisição  { exclude: ['number'] }

### Lazy loading
Agora vamos  ver como funciona a outra forma de carregar dados de associção: o lazy lodings. Esse Metodo consiste, basicamente, em não especificar uma propiedade includes no momento de realizar query no banco de dados. Dessa forma , cria -se a possibilidade de dois usos para o mesmo endpoint.

Para utilizarmos duas ações diferentes em um endpoint, iremos usar a query string `includeAdresses`, na qual, caso o parâmetro dela seja true os endereços  daquele funcionario, também serão retornados

imagine que exista a função `getAdress` que tem como responsabilidade buscar todos os endereços de acordo com o `employee_id`.

// const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
       const employee = await Employee.findOne({ where: { id } });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

       if (req.query.includeAddresses === 'true') {
         const addresses = await Address.findAll({ where: { employeeId: id } });
         return res.status(200).json({ employee, addresses });
       }

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));


Reinicie a aplicação e realiza uma requisição do tipo GET para o endpoint http://localhost:3000/employees/1?includeAddresses=true . Depois, retire o ?includeAddresses=true e veja seu retorno.
Como pudemos ver, o lazy loading é muito útil em situações em que não sabemos se vamos, de fato, precisar buscar todas as informações de uma só vez. Aqui, se tivéssemos utilizado eager loading , teríamos buscado os dados dos funcionários mesmo quando includeAddresses não era informado, e precisaríamos excluir a chave addresses do resultado do banco caso esse parâmetro não fosse informado. Com o lazy loading , podemos carregar apenas os dados do funcionário, e carregar os dados dos endereços apenas quando necessário, economizando recursos do banco.

### Relacionamento de N:N

Nos relacionamentos de N:N. existem algumas significativas ao se criar as associações. Esse tipo de relacionamento pode ser visto tambem como dois relacionamentos um para muitos (1:n) ligados por uma tabela intermediaria, chamada de tabela de `Junção`, ela guarda as informações de como as tabelas se relacionam entre si.

Representação de um banco 1:1

Esse banco possui 3 tabelas  Users , Books e UserBooks . A tabela UserBooks possui um relacionamento N:N com as demais tabelas. Desta maneira, podemos inferir que:

A tabela Users guarda as informações de cada usuário.
A tabela Books guarda as informações de cada livro.
A tabela UserBooks irá agir como uma tabela de junção , guardando a relação de quais pessoas usuárias possuem quais livros. Nessa tabela uma pessoa usuária pode possuir vários livros, enquanto um livro pode pertencer a várias pessoas usuárias. Assim cadastramos o livro uma única vez na tabela Books , assim como a pessoa usuária na tabela Users , e este livro vai poder ser associado de forma livre a várias pessoas usuárias, assim como uma única pessoa usuária poderá ser associado a vários livros, graças a essa tabela.

Como criamos uma associação que possa por 3 tabelas

Primeiro, vamos criar o model de Users :

// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  return User;
};

// models/Book.js
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookId: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    numberPages: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Books',
    underscored: true,
  });

  return Book;
};

// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define('UserBook',
    {},
    { timestamps: false },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBook;
};

Primeiro de tudo, note que não temos nenhum atributo nesse local. isso é possivel porque quando estabelecemos os relacionamentos  usando `UserBook` como tabela de associação, o sequelize ja entende que esse model precisa ter os dois IDS da tabels sendo associadas.

Depois, temos um novo tipo de relacionamneto: o `belongToMany`. Esse  relacionamento cria um relacionamneto do tipo N:N utilizando o model especificado na opção  through como tabela de associação. temos tembem o  o lias  daquela associação, na chave  ase, por ultimo, temos os paramentros foreignKey e otherKey . Esses dois parâmetros dizem ao Sequelize qual campo utilizar na tabela de associação para identificar cada uma das entidades.foreignKey e otherKey . Esses dois parâmetros dizem ao Sequelize qual campo utilizar na tabela de associação para identificar cada uma das entidades.

Lembre-se: foreignKey sempre se refere ao model em que chamamos belongsToMany , enquanto otherKey se refere ao model com o qual estamos criando a associação.

Para testar a aplicação, você deve fazer as devidas alterações nos controllers , criar as migrations e os seeders .
Para criar as migrations, utilize os seguintes comandos:

 npx sequelize migration:generate --name create-books
 npx sequelize migration:generate --name create-users
 npx sequelize migration:generate --name create-user-books

 E copie o conteúdo abaixo para seus respectivos arquivos de migration, create-books , create-users e create-user-books :

 // cole esse código dentro do arquivo da migration "books"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      bookId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'book_id',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      numberPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'number_pages',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  },
};

// cole esse código dentro do arquivo da migration "users"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_id',
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
    await queryInterface.dropTable('Users');
  },
};

// cole esse código dentro do arquivo da migration "user-books"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books',
          key: 'book_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('UserBooks');
  },
};

Depois disso, teremos que criar as seeds com informações para podermos enfim, testar nossa nova association:

 npx sequelize seed:generate --name books
 npx sequelize seed:generate --name users
 npx sequelize seed:generate --name user-books


Copie os códigos abaixo para seus respectivos arquivos dentro da pasta seeders :

// cole esse código dentro do arquivo da seed "books"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',
      [
        { name: 'Livro A', release_year: 2020, number_pages: 111 },
        { name: 'Livro B', release_year: 2019, number_pages: 222 },
        { name: 'Livro C', release_year: 2018, number_pages: 333 },
        { name: 'Livro D', release_year: 2017, number_pages: 444 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};

// cole esse código dentro do arquivo da seed "users"

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          first_name: 'Bárbara',
          last_name: 'Silva',
          age: 16,
        },
        {
          first_name: 'Carlos',
          last_name: 'Santos',
          age: 24,
        },
        {
          first_name: 'Danilo',
          last_name: 'Henrique',
          age: 32,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};


// cole esse código dentro do arquivo da seed "user-books"

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('UserBooks',
      [
        { user_id: 1, book_id: 1 },
        { user_id: 1, book_id: 3 },
        { user_id: 2, book_id: 1 },
        { user_id: 2, book_id: 2 },
        { user_id: 3, book_id: 1 },
        { user_id: 3, book_id: 2 },
        { user_id: 3, book_id: 3 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UserBooks', null, {});
  },
};


Depois, utilize o comando abaixo para executar as migrations e as seeds:

 npx sequelize db:migrate
 npx sequelize db:seed:all

 Para fazer a requisição, bastaria acrescentar ao index.js as seguintes linhas:

 const { Book, User } = require('./models');
// ...
app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

Agora, faça uma requisição do tipo GET para o endpoint localhost:3000/usersbooks/1 e verifique a resposta para o usuário.
Nota: a propriedade through: { attributes: [] } deve estar presente, pois sem ela, em cada book , apareceriam todos seus respectivos users . Tente fazê-lo sem e veja a diferença no resultado!

// ...