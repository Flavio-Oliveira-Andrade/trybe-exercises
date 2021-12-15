### Arquitetura de Software - Camada de Model

## o que vamos aprender ?
Hoje vode ira aprender sobre a camada `Model` e entedera quais suas responsabilidades e como ela se relaciona com o banco de dados ,

Além disso, voce vera como realizar a conexao da sua aplicação com um banco de dados e aprendera a acessar um banco MongoDb e tambem MySQL

## Voce sera capaz de :
Entender o funcionamneto da camada de Model;
Delegar responsabilidade especifica para essa camada
Conectar sua aplicação com diferentes bancos de dados

## Por que isso é importante ?
A intenção desse tema é iniciar sua visão arquitetural. Além disso, dividir sua aplicação em camadas facilita muito a manutenção, a adição de novas funcionalidades e a organização geral do seu código, pois você sabe exatamente onde cada coisa deve ficar.
Quanto mais padrões você conhecer e quanto mais entender em quais cenários cada uma se aplica melhor, maiores as chances de o seu projeto ter sucesso.
Assista o vídeo abaixo para entender um pouco da arquitetura MSC e sobre a camada de modelo que vamos aprender hoje

Mysql,
mongoDB
Assincronos
HTTP, node e Express.

M model  = banco de dados , conexoes e query
s serviço =
c controller =

## Model
O model é onde nós manipulamos e definimos a estrutura dos nossos dados. Todo acesso aos dados deve passar por essa camada.
Os dados que a aplicação utiliza podem estar armazenados em um banco de dados, acessados através de uma API externa, arquivos ou outros dispositivos de armazenamento.
O model é responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados. Por exemplo, é responsabilidade da camada de models estabelecer uma conexão com o banco de dados.
As demais camadas não devem saber, por exemplo, se o banco utilizado é MySQL ou MongoDB , ou se sequer há um banco de dados. O model se encarrega de fazer o mapeamento dos dados armazenados para as entidades existentes no domínio do seu negócio.
É no model que verificaríamos se o novo usuário que estamos tentando criar é válido de acordo com as regras de negócio definidas, do qual falamos na página ( Introdução - Arquitetura de Software ), ou se a pessoa que está tentando apagar um post tem permissão para tal.
A medida que você for aprendendo sobre as camadas de uma aplicação, você verá que o model deve ser completamente desacoplado das demais camadas. Ou seja, o model não pode ter conhecimento dessas camadas. Isso facilita a manutenção do código, pois alterações em outras camadas não terão impacto nos seus modelos.
Outro benefício é uma maior reusabilidade de código. Por exemplo, com uma camada de modelo bem definida, nós poderíamos criar uma versão CLI da nossa aplicação somente utilizando a API que ela define, sem nenhuma duplicação de código.
Vamos a um rápido exemplo sem muitos detalhes para fixar melhor o conceito:

// userModel.js

const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}

Agora podemos utilizar esse arquivo em qualquer lugar onde precisemos de um usuário. Por exemplo, numa interface de linha de comando:

// cli.js

const readline = require('readline-sync');
const userModel = require('./userModel');

async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);

    if (!user) {
        return console.log('Usuário não encontrado');
    }

    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}

start();

Ao mesmo tempo, podemos utilizar nosso model em um middleware:

// getUserMiddleware.js

const userModel = require('./userModel');

function getUserMiddleware (req, res, next) {
    const { username } = req.body;

    const user = await useModel.getUser(username);

    if (!user) {
        return res.status(404).json({ message: 'user não encontrado' });
    }

    return res.status(200).json(user);
}

Dessa forma, caso nossos usuários passem a estar armazenados em outro lugar, como num arquivo, ou num outro banco de dados, nós só precisaremos alterar o arquivo userModel.js e, automaticamente, tudo volta a funcionar.

### Model com MySQL

Criando e populando o banco de dados
Antes de mais nada, precisamos ter o MySQL instalado e configurado na nossa máquina. Se precisar, consulte o conteúdo sobre MySQL para fazer a instalação.
Para utilizar o MySQL , precisamos primeiramente criar nosso banco de dados, que será chamado model_example . Por enquanto, só teremos a tabela authors , com informações de escritores. A tabela terá as seguintes colunas:
Nome. Obrigatório;
Nome do meio. Opcional;
Sobrenome. Obrigatório;
Data de nascimento. Opcional;
Nacionalidade. Opcional;
Agora, utilizando o MySQL Workbench ou o console do MySQL, execute o script SQL abaixo para criar o banco, a tabela e popular o banco com nosso dados iniciais:
Copiar
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE authors
(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)

VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
    ('J.','R. R.','Tolkien','1892-01-03','britânico'),
    ('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
    ('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
    ('Júlio',NULL,'Verne','1905-03-24','francês');
Assista o vídeo abaixo para ver como criar a conexão com o MySQL e como utilizar para criar uma listagem de autores.

Caso, prefira, leia os dois próximos tópicos para criar o começo da aplicação.

## Estabelecendo uma conexão com o banco

Com o banco criado e populado, vamos criar nosso projeto Node.js.
Comece criando uma nova pasta para conter o projeto. Dê o nome que você quiser a ela, mas aqui vamos chamá-la de model-example :
Copiar
$ mkdir model-example
$ cd model-example
Agora, iniciamos um novo projeto Node.js, passando a flag -y para pular as perguntas e gerar um projeto com as opções padrão:
Copiar
$ npm init -y
Para que possamos dar continuidade, precisamos antes de mais nada, criar um servidor utilizando a biblioteca express , ela vai nos fornecer o que precisamos para rodar um servidor, criar rotas e utilizar nossa conexão com o banco. Instale o express rodando o comando abaixo:
Copiar
$ npm install express
Agora, na raiz do projeto, crie um arquivo chamado index.js e preencha-o com o código abaixo:
Copiar
// index.js

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
Em index.js , importamos o express e iniciamos uma nova aplicação. Porém, para que possamos nos comunicar com o MySQL, precisamos de um driver . Um driver é um software que permite que você se comunique com o banco de dados a partir de uma aplicação. Qual driver usar depende tanto da linguagem quanto do banco de dados que você está utilizando. Aqui na Trybe, você vai utilizar o drive chamado mysql2 . Instale-o executando o comando abaixo:
Copiar
$ npm install mysql2
Agora, na raiz do projeto crie uma pasta models e, dentro dela, crie um arquivo connection.js e preencha-o com o código abaixo. Lembre-se de substituir os campos user e password pelo usuário e senha que você utiliza para acessar o banco:
Copiar
// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senha123',
    database: 'model_example' });

module.exports = connection;
Primeiro, importamos o mysql do módulo mysql2/promise , assim utilizamos a versão mais atualizada do mysql2 em vez de usar a versão com callbacks.
O método createPool cria uma pool de conexões com o banco de dados. Isso significa que a própria biblioteca irá gerenciar as múltiplas conexões que fizermos com o banco. O createPool recebe um objeto com as credenciais necessárias para estabelecer a conexão. Entre as opções possíveis, estão:
host : local onde o servidor do MySQL está armazenado. Como estamos executando localmente, usamos localhost ;
user : usuário que vamos utilizar para acessar o banco. Estamos usando o usuário root nesse exemplo;
password : senha do usuário especificado. Coloque '' se não houver senha para o usuário;
database : nome do banco ao qual queremos nos conectar;
O método createPool retorna um objeto Pool representando uma sessão com o banco.
Para não ser necessário criar uma sessão e selecionar o schema sempre que precisarmos acessar o banco, armazenamos nossa pool na variável connection .
Criando o model
Agora, podemos de fato começar a escrever nossa aplicação. A primeira coisa que faremos é criar uma rota que retornará uma lista com os nomes de todos os autores. Queremos também que seja exibido o nome completo do escritor, que será a concatenação do primeiro nome, nome do meio (se houver) e sobrenome .
O model deverá expor alguma interface que seja capaz de buscar essa lista do banco de dados e retorná-la. Ele deverá se encarregar de todos os detalhes de baixo nível, como se conectar com o banco, montar e executar as queries necessárias para buscar e retornar os dados desejados. Ele também fará o mapeamento dos dados para um formato que seja mais adequado para o domínio da aplicação. Esse mapeamento pode envolver conversão de dados, renomear campos, esconder ou criar novos campos derivados dos dados existentes, por exemplo.
A camada de modelo pode ser implementada de várias formas. Aqui, vamos seguir esta abordagem:
Haverá uma entidade chamada Author na aplicação;
A entidade vai conter os campos firstName , middleName e lastName . Note que os nomes estão em camelCase , enquanto as colunas do banco estão em snake_case ;
No código, um objeto contendo os campos mencionados acima será utilizado para representar um autor.
Existirão funções para ler e criar escritores do banco de dados;
A rota só irá interagir com os dados através da interface do model Author .
Dando continuidade à nossa aplicação, crie o arquivo Author.js , dentro da pasta models . Adicione o código abaixo ao arquivo criado:
Copiar
// models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
};
};

// Converte o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name});

// Busca todos os autores do banco.

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
    getAll,
};
O model Author exporta uma função getAll . Essa função retornará todos os escritores cadastrados no banco de dados. Utilizamos o método execute para fazer uma query mysql como já estamos acostumados. Esse método retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] . O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.
No exemplo, desconstruímos essa resposta utilizando [Authors] que chega para nós da seguinte forma:
Copiar
[
{
    id: 1,
    first_name: 'George',
    middle_name: 'R. R.',
    last_name: 'Martin'
},
{
    id: 2,
    first_name: 'J.',
    middle_name: 'R. R.',
    last_name: 'Tolkien'
},
{
    id: 3,
    first_name: 'Isaac',
    middle_name: null,
    last_name: 'Asimov'
},
{
    id: 4,
    first_name: 'Frank',
    middle_name: null,
    last_name: 'Herbert'
},
{
    id: 5,
    first_name: 'Júlio',
    middle_name: null,
    last_name: 'Verne'
}
]
Repare que função getAll faz o mapeamento dos dados do banco para a aplicação, convertendo os nomes de snake_case para camelCase , utilizando a função serialize . Note também o uso da função getNewAuthor , que formata os dados para que seja exibido o nome completo do autor em uma única string.
Com o model criado devemos então criar a rota que o utilizará. Adicione ao conteúdo do index.js o seguinte:
Copiar
// index.js

// const express = require('express');

const Author = require('./models/Author');

// const app = express();

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });
A essa aplicação, adicionamos uma nova rota GET /authors . Então fazemos como já havíamos aprendido anteriormente, passamos uma função que acessa os parâmetros req e res , que chama a função getAll do nosso model , aguarda sua execução e então retorna um JSON com os dados enviados pelo banco.
Vamos praticar
Vamos colocar em prática tudo o que aprendemos até aqui. Primeiro, crie a tabela Books usando o SQL abaixo
Copiar
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(90) NOT NULL,
    author_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
    ('A Game of Thrones', 1),
    ('A Clash of Kings', 1),
    ('A Storm of Swords', 1),
    ('The Lord of The Rings - The Fellowship of the Ring', 2),
    ('The Lord of The Rings - The Two Towers', 2),
    ('The Lord of The Rings - The Return of The King', 2),
    ('Foundation', 3);
Depois de criar a tabela no banco de dados, faça as seguintes implementações.
Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
Crie uma rota /books para trazer a lista de todos os livros.
Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.
Buscando pelos detalhes de um escritor
Veja o vídeo a seguir ou leia o conteúdo para aprender a implementar uma busca por id.

Agora vamos criar um método e um endpoint para obter os detalhes de um escritor. A rota do endpoint é /authors/:id , onde id corresponde ao id do escritor.
Na model Authors crie o seguinte método.
Copiar
// models/Authors.js
// const connection = require('./connection');

// Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;
//
// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');
//
// return {
//  id,
//  firstName,
//  middleName,
//  lastName,
//  name: fullName,
// };
// };

// Serializa o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//  id: authorData.id,
//  firstName: authorData.first_name,
//  middleName: authorData.middle_name,
//  lastName: authorData.last_name,
// });

// Busca todos os autores do banco.

// const getAll = async () => {
//  const [authors] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  );
//  return authors.map(serialize).map(getNewAuthor);
// };

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/

const findById = async (id) => {
// Repare que substituímos o id por `?` na query.
// Depois, ao executá-la, informamos um array com o id para o método `execute`.
// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
const [ authorData ] = await connection.execute(query, [id]);

if (authorData.length === 0) return null;

// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
const { firstName, middleName, lastName } = serialize(authorData[0]);

return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName});
};

// module.exports = {
// getAll,
        findById,
// };
Copiar
// index.js

// const express = require('express');

// const Author = require('./models/Author');

// const app = express();

// app.get('/authors', async (_req, res) => {
// const authors = await Author.getAll();
//
// res.status(200).json(authors);
// });

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });
No index.js , registramos uma nova rota para obter os detalhes de um autor, onde adicionamos uma função para responder a requisições para essa rota. Ela funciona de forma muito semelhante a da rota /authors . A diferença é que ela extrai o parâmetro id da URL e o usa para consultar o model pelo escritor requisitado. Caso o model não encontre um escritor, setamos o código de status para 404 (Not Found) e retornamos um JSON com uma mensagem informando o que ocorreu.
No model, adicionamos o método findById . Esse método é muito semelhante a getAll . A grande diferença é que usamos o where na nossa query para limitar o escopo da busca ao escritor procurado. No entanto, em vez de passar valores diretamente na string, fazendo interpolação, é uma boa prática separar os valores da query. Fazemos isso usando ? como parâmetros na string e usando, como segundo argumento, um array que contém os valores que devem substituir todos os ? utilizados, na ordem.
Veja o resultado iniciando o servidor e acessando a rota /authors em seu navegador.
Vamos praticar!
Continuando o exercício anterior faça o seguinte.
Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .
Criando um novo escritor
Veja o vídeo a seguir ou leia o conteúdo para aprender a implementar um cadastro de autor.

Agora vamos incrementar nossa aplicação para permitir a criação de novos escritores.
Primeiro, vamos adicionar dois métodos no nosso model Authors .
Copiar
// models/Authors.js

// const connection = require('./connection');

// Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;

// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');

// return {
//  id,
//  firstName,
//  middleName,
//  lastName,
//  name: fullName,
// };
// };

// Serializa o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//  id: authorData.id,
//  firstName: authorData.first_name,
//  middleName: authorData.middle_name,
//  lastName: authorData.last_name,
// });

// Busca todos os autores do banco.

// const getAll = async () => {
//  const [authors] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  );
//  return authors.map(serialize).map(getNewAuthor);
// };

//
// Busca um autor específico, a partir do seu ID
// @param {String} id ID do autor a ser recuperado
//
// const findById = async (id) => {
// const [
//  authorData,
//  ] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?',
//      [id],
//  );

// if (authorData.length === 0) return null;

// const { firstName, middleName, lastName } = authorData.map(serialize)[0];

// return getNewAuthor({ id, firstName, middleName, lastName });
// };

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
);

// module.exports = {
// getAll,
// findById,
        isValid,
        create,
// };
isValid é uma função que retorna um boolean indicando se os dados são válidos, checando se firstName e lastName são strings não vazias, e se middleName , caso seja informado, é uma string. create é uma função que recebe firstName, middleName e lastName e salva um autor no banco.
Como agora teremos requisições POST, precisaremos fazer o parsing do corpo da requisição. O middleware body-parser é capaz de fazer isso automaticamente para nós.
Copiar
$ npm install body-parser
Copiar
// const express = require('express');
const bodyParser = require('body-parser');

// const Author = require('./models/Author');

// const app = express();

app.use(bodyParser.json());

// app.get('/authors', async (\_req, res) => {
//  const authors = await Author.getAll();
//
//  res.status(200).json(author);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;

//   const author = await Author.findById(id);

//   if (!author) return res.status(404).json({ message: 'Not found' });

//   res.status(200).json(author);
// });

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });
A rota POST /authors extrai as informações do autor que chegam em req.body e verifica se os dados enviados são válidos. Caso não sejam, o endpoint retorna um JSON com uma mensagem informando o que houve, juntamente como o status 400 , que indica uma requisição ruim, no caso com dados inválidos. Caso os dados sejam válidos, pede ao modelo para criar um novo escritor e retorna um JSON com uma mensagem indicando que o autor foi criado com sucesso.
Vamos praticar
Ainda usando a tabela books como referência crie uma rota books do tipo POST . Faça as seguintes validações:
Título não pode ser vazio;
Título precisa ter pelo menos três caracteres;
O campo author_id não pode ser vazio;
O campo author_id só é válido se existir um autor com esse id;
Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 .


### Model com MongoDB

Como dissemos anteriormente, uma das maiores vantagens que a camada de model nos traz é que, independentemente de como os dados são armazenados, a representação e as responsabilidades do modelo não mudam.
A aplicação que construímos na seção anterior utilizava MySQL como data storage . Nessa seção, vamos trocar o MySQL pelo MongoDB. Isso servirá a dois propósitos: mostrar como acessar o MongoDB a partir de aplicações Node.js e exemplificar como é possível trocar nosso data storage com algumas poucas alterações na camada de model , sem afetar as demais.

## Populando o banco

Antes de iniciarmos, certifique-se de ter o MongoDB instalado na sua máquina. Consulte o conteúdo sobre MongoDB se precisar.
Abra o console do MongoDB e execute o código abaixo para popular o banco:

use model_example
db.authors.insertMany([
    { "firstName": "George", "middleName": "R. R.", "lastName": "Martin", "birthday": "1948-09-20", "nationality": "norte-americano" },
    { "firstName": "J.", "middleName": "R. R.", "lastName": "Tolkien", "birthday": "1892-01-03", "nationality": "britânico" },
    { "firstName": "Isaac", "lastName": "Asimov", "birthday": "1920-01-20", "nationality": "russo-americano" },
    { "firstName": "Frank", "lastName": "Herbert", "birthday": "1920-02-11", "nationality": "norte-americano" },
    { "firstName": "Júlio", "lastName": "Verne", "birthday": "1905-03-24", "nationality": "francês" }
])

Note que esses são exatamente os mesmos dados que inserimos no MySQL. Só que agora não precisamos criar o banco, a tabela etc. 🤘

## Criando uma conexão com o banco

Nota : Lembre-se de que estamos utilizando a mesma aplicação que construímos na seção anterior. Abra a aplicação para fazer as alterações.
Pode ser interessante fazer um cópia da aplicação que desenvolveu anteriormente, assim você terá os dois códigos para consultar posteriormente.
Assim como ocorreu com o MySQL, precisamos de um driver para acessar o MongoDB pelo Node.js. Vamos instalar o driver oficial:

 npm install mongodb

 Agora vamos estabelecer uma conexão com o servidor do MongoDB rodando localmente. Substitua o código no arquivo connection pelo código abaixo:

 // models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('model_example');
    return db;
    })
};

module.exports = connection;




A conexão com o MongoDB acontece de forma bem semelhante à conexão com o MySQL. A diferença é que estamos utilizando outro driver, e que agora separamos temos uma função sendo exportada do arquivo, para que possamos importá-lo em todos os models, reaproveitando o código de conexão com o banco.
Note o uso dos parâmetros useNewUrlParser e useUnifiedTopology . Eles dizem ao driver do mongodb como ele deve se conectar ao banco:
useNewUrlParser : o time do mongodb reescreveu a forma que o driver utiliza para interpretar a URL de conexão ao banco. Por ser uma mudança muito grande, essa nova forma de interpretação de URLs só é ativada com o uso dessa flag. A forma antiga, no entanto, está depreciada, e seu uso emite um warning no terminal.
useUnifiedTopology : nas versões mais recentes do driver do mongodb, a ferramenta que realiza a descoberta de servidores e a conexão com os mesmos foi alterada. Essa flag diz para o driver do mongodb que queremos utilizar essa nova forma de conexão. A forma de conexão antiga está depreciada, e seu uso emite um warning no terminal.
Outro ponto importante de se reparar no código acima é que estamos utilizando um padrão conhecido como singleton . Em resumo, um singleton é um objeto ou módulo que, mesmo que chamado várias vezes, só vai ser criado uma vez.
No nosso caso, da primeira vez que chamarmos a função connection , a variável db estará vazia, e precisaremos realizar a conexão com o banco.
No entanto, nas próximas vezes, a variável já estará preenchida, pois nós a preenchemos na linha 14, da primeira vez que realizamos a condição.
Sendo assim, a execução não chega no MongoClient.connect . Ela é interrompida antes e a db armazenada anteriormente é retornada.
Isso garante que, durante todo o ciclo de vida da nossa aplicação, só iremos abrir uma conexão com o banco. Isso que estamos fazendo é semelhante ao que fazemos ao criar uma pool no mysql2 . A questão é que o método de conexão do driver do MongoDB retorna uma Promise e, por isso, é mais difícil utilizá-lo exatamente da mesma forma.
O importante é que você entenda que estamos trabalhando com um pool de conexões , da mesma forma que no mysql2 ;
Agora vamos ver como podemos utilizar essa conexão.

### Listando os escritores... mas do MongoDB

Nos trechos de código a seguir, as linhas comentadas são linhas que não devem sofrer alterações, e estão lá apenas para prover contexto ao restante dos arquivos. Você deve alterar apenas as linhas que não estão comentadas.
Altere o modelo Author , modificando o método getAll para ficar desta forma:
Copiar
// models/Author.js

// const connection = require('./connection');

// Busca todos os autores do banco.
const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}
// ...

O método getAll continua funcionando de forma parecida. Ela busca no banco todos os escritores, faz um mapeamento para o formato de objeto que definimos para Author e retorna uma Promise . A diferença é que, como agora estamos usando o MongoDB , mudamos a forma de recuperar os dados. Note que mudamos id para _id , e que mudamos o destructure utilizado no authors.map para utilizar um destructure de objeto, ao invés de um destructure de array. Fizemos isso porque o MongoDB não nos devolve um Array de colunas como o MySQL , e sim um objeto para cada documento encontrado.
A API que o pacote mongodb oferece é bem semelhante à que usamos no cliente do MongoDB, com pequenas mudanças. Em vez de fazer db.authors.find() , por exemplo, precisamos fazer db.collection('authors').find() . Além de find , você pode utilizar outros métodos conhecidos, como findOne , insertMany e updateMany .
Inicie a aplicação com node index.js e faça uma requisição GET para http://localhost:3000/authors . A listagem de autores continua funcionando, mas agora os dados estão sendo lidos do MongoDB. Não precisamos alterar nada fora da camada de modelo. 😉

### Vamos praticar

Vamos aplicar as alterações do nosso modelo Book , primeiro vamos criar e popular uma coleção com a mesma lista de livros que salvamos no mysql.
Copiar
db.books.insertMany([
    { title: 'A Game of Thrones', author_id: 1 },
    { title: 'A Clash of Kings', author_id: 1 },
    { title: 'A Storm of Swords', author_id: 1 },
    { title: 'The Lord of The Rings - The Fellowship of the Ring', author_id: 2 },
    { title: 'The Lord of The Rings - The Two Towers', author_id: 2 },
    { title: 'The Lord of The Rings - The Return of The King', author_id: 2 },
    { title: 'Foundation', author_id: 3 },
]);

Refatore o método getAll de models/Book para utilizar o mongo como banco de dados.
Refatore o método getByAuthorId de models/Book para utilizar o mongo como banco de dados.

### Obtendo detalhes de um escritor

Se você tentou fazer uma requisição para o endpoint de detalhes de um escritor, viu que a aplicação morre . Vamos consertar esse bug.
A rota da página de detalhes é /authors/:id . Esse id era o id da tabela authors do MySQL. Agora, nós queremos que ele seja o campo _id do MongoDB. O que precisamos fazer agora é alterar o modelo Author para utilizá-lo para encontrar o escritor.
Modifique a função findById e deixe-a como abaixo. Note que precisamos importar também o ObjectId do mongodb na primeira linha do arquivo.
Copiar
// models/Authors.js

const { ObjectId } = require('mongodb');

// const connection = require('./connection');

// ...

// Busca um autor específico, a partir do seu ID
// @param {String} id ID do autor a ser recuperado

const findById = async (id) => {
    if (!ObjectId.isValid(id)) {
        return null;
    }

    const authorData = await connection()
        .then((db) => db.collection('authors').findOne(new ObjectId(id)));

    if (!authorData) return null;

    const { firstName, middleName, lastName } = authorData;

    return getNewAuthor({ id, firstName, middleName, lastName });
};

// ...
Aqui usamos findOne(new ObjectId(id)) , uma sintaxe mais sucinta que podemos empregar quando estamos filtrando documentos pelo campo _id . Também poderíamos usar a versão completa e mais verbosa: findOne({ _id: new ObjectId(id) }) .
Repare também que, na primeira linha da função findById , utilizamos a função isValid do ObjectId . Fazemos isso porque, caso o id informado não seja um ObjectId válido do MongoDB, teremos um erro ao fazer new Object(id) algumas linhas abaixo. Caso o id não seja um ObjectId válido, retornamos null , que é o mesmo comportamento de quando não encontramos um autor, já que um id inválido, realmente, não encontraria nenhum autor caso enviado ao banco.
Reinicie o servidor e faça a requisição de detalhes de alguns escritores.
Vamos praticar
Continuando a refatorar nosso CRUD de livros, agora faça o seguinte:
Refatore o método getById de models/Book para utilizar o mongo como banco de dados.
Criando um novo escritor
Agora só falta a criação de escritores para nossa aplicação voltar a funcionar 100%. Não tem segredo aqui: precisamos refatorar a função create para inserir um novo documento na coleção authors com o método insertOne :
Copiar
// models/Author.js

// ...

const create = async (firstName, middleName, lastName) =>
    connection()
        .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
        .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

// ...
Outra alteração que fizemos foi fazer com que a função create retorne um novo Author , contendo as informações que acabamos de inserir no banco. Para obter o ID que acabou de ser criado, utilizamos a propriedade insertedId do resultado da chamada de db.collection('authors').insertOne .
Reinicie a aplicação mais uma vez. Tente criar alguns escritores. Se quiser, abra o console do MongoDB e inspecione a coleção com db.authors.find().pretty() para ver os novos documentos.
Agora podemos até remover o mysql2 , já que não o utilizamos mais:
Copiar
$ npm uninstall mysql2
E é isso! Nossa aplicação continua funcionando 100%. E o melhor é que não foi preciso mudar absolutamente nada no index.js !
Vamos praticar
Continuando a refatorar nosso CRUD de livros, agora faça o seguinte:
Refatore o método create de models/Book para utilizar o mongo como banco de dados.
