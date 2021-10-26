 npm init -y
 npm i express nodemon sequelize mysql2
 npx sequelize-cli init
 npm i dotenv
 npm i express

### inicia o projeto Mysql com as configurações e pastas iniciais
npm i sequelize-cli

### cria o schema , banco de dados
npx sequelize db:create

### cria a migrations que sera responsavel pela tabela
 npx sequelize migration:generate --name create-employees

### estrutura modelo para a migrations
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

### estrutura modelo para a migrations

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

hasMany : tem muitos
hasOne  : tem um

### criação da migrations/tabela
npx sequelize db:migrate

### Criar dois seeders e com nome
 npx sequelize seed:generate --name employees
 npx sequelize seed:generate --name addresses

### para executar a criação dos seeders .
 npx sequelize db:seed:all