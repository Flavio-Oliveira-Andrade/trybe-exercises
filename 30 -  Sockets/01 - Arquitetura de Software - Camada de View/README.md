## O que vamos aprender ?
Hoje, Você  vai aprender um outra forma de organização e divisão de responsabilidades nas suas aplicações Node.Js e Express, utilizando um dos padrões arquitetura mais fomoso do mercado MVC
Model
View
Controller

## Voce sera capaz de :
- itender a arquitetura MVC criando novas camadas;
- Estruturar um modelo em camadas sem a camada de serviço( `serviço` ).


### Por que isso é importante?

O MVC é dos padrões arquiteturais mais utilizados no mercado. inclusive, framewoirks como `Ruby on Rails e Cake PHP ` adotam o MVC como estrutura para aplicação. alem disso. quanto mais padrõies você conhece e quanto mais etender em quais cenários ca um se aplica, melhor, maiores as chances de seu projeto ter sucesso.

Lembre-se: um arquitetura pobre pode matar um projeto conforme ele vai crescendo.

### O que é MVC ?

MVC é uma sigla para `model-view-controller`, um dos mais antigos e mais utilizados padrões de arquitetura de software
O padrão foi criado nos anos de 1980, dentro da xerox, para o dsenvolvimento de interfaces graficas, mas o que o tornou mais popular foi a sua adoção em aplicações web.

Como todo padrão de arquitetura , o MVC  organiza e divide o código de uma aplicação em camadas, cada uma com suas responsabilidades. Ele é composto por três camadas, duas das quais você já conhece: a camada de modelo ( Model ), a camada de apresentação/visão ( View ) e a camada de controle ( Controller ).
Essa divisão permite que as regras de negócio fiquem longe da camada de apresentação, tornando possível uma maior reutilização de código.

## Model e Controller
Anteriormente você aprendeu sobre essas duas camadas no contexto da arquitetura MSC . Apesar de agora estarmos falando no contexto do MVC o model ainda é onde nós manipulamos e definimos a estrutura dos nossos dados, sendo que todo acesso aos dados deve passar por essa camada. E o controller ainda é responsável por receber as requisições e enviar as respostas, mas agora ele faz a ponte entre a view e o model , recebendo as ações da view e decidindo o que deve ser mostrado para a pessoa realizando a ação, após consultar o modelo, se necessário.
Mas agora que não temos mais a camada de service , onde devem ficar nossas regras de negócio? Bem, no MVC o responsável pelas regras de negócio da aplicação é o model , sendo nele feitas as validações e tratamentos de dados.
Assim como no MVC a camada de model deve se manter desacoplada das demais, views e controllers , não devendo ter nenhum conhecimento dessas camadas.

## View
A view é a camada de apresentação, ou seja, a parte que tem contato com a pessoa que está usando nosso sistema. Serve basicamente como input e output de dados. Ela é responsável por duas coisas: criar a visualização dos dados vindos do model e fornecer meios para que a pessoa possa interagir com o sistema.
A view se comunica com o controller (recebendo ordens do que exibir e comunicando eventos que ocorrem à medida que a pessoa interage com o sistema) e com o model , recebendo os dados que deve apresentar.
Aqui, mais uma vez, vemos os benefícios da separação de responsabilidades: como a view se encarrega somente de exibir uma representação dos dados, ela não precisa saber como eles são armazenados.
Imagine se, toda vez que precisássemos mudar a view (mudar o layout de uma página HTML, por exemplo), também tivéssemos que mudar nossos modelos ou, o que é pior, o nosso esquema do banco de dados! Como o model abstrai todos esses detalhes atrás de uma API, não precisamos nos preocupar com isso.
Essa separação permite, inclusive, que mais de uma apresentação dos mesmos dados seja criada para contextos diferentes.
Em aplicações web, a view geralmente é uma página HTML , mas também pode assumir outros formatos, como JSON e XML .

## Cominicação entre camadas
Da maneira como foi explicado acima, nossa camada de apresentação deve sempre ficar separada da nossa lógica de negócios.
Um forma interessante de utilizar o MVC é da maneira que o Ruby on Rails o implementa (e te força a usar, no bom sentido).

## MVC com EXPRESS

Ok, vimos um monte de teoria sobre o que é o MVC, mas como funciona isso na prática? Vamos construir uma pequena aplicação em Node.js e Express, seguindo o padrão MVC.

Vamos fazer isso "na mão", ou seja, não usaremos nenhum framework além do express. O motivo de fazermos isso é que muitos frameworks "têm opinião": eles já fornecem uma estrutura básica, já resolvem para você muitos problemas e o lugar onde as coisas devem ficar já está mais ou menos definido. Construir uma aplicação MVC do zero será trabalhoso, como você verá, mas vai te permitir ter uma melhor apreciação dos conceitos da arquitetura MVC aplicados na prática.

Lembra da API que desenvolvemos quando estávamos aprendendo sobre a arquitetura MSC ? Caso não lembre, nela construímos um CRUD simples, onde era possível cadastrar escritores, mas só com o "C" e o "R". Em outras palavras, poderemos criar e visualizar escritores. Nesse projeto, usaremos o MySQL como banco de dados.
Não se preocupe em não ter a aplicação já desenvolvida em sua máquina, vamos passar por todas as etapas de desenvolvimento no conteúdo, da criação do banco até a renderização da view .
Sem mais delongas, mãos à obra!
### o que é uma entidade?   banco de dados
Quando se fala de entidade de um banco de dados, estamos normalmente falando de uama tabela que representa algum conceito do mundo real que você quer descrever (pessoa, eventos, acontecimentos) e suas propiedades(altura, horário do evento, nome do acontecimento). A entidade pessoa , por exemplo, pode ter as propriedades de altura, peso e idade. Uma entidade festa pode possuir as propriedades horário do evento, público-alvo e data da festa. Por fim, uma entidade venda pode possuir as propriedades valor da venda, dia da venda, produto vendido etc.
**Entidade : Pessoa**
**Propriedades : Altura, peso, idade.**
A entidade é nossa tabela dentro de um banco de dados e as propriedades fazem parte dessa tabela.
Em alguns desses casos, as entidades são individuais e não se relacionam entre si, porém às vezes elas são ligadas umas com as outras através de relacionamentos.

Compreender o que é uma query SQL e quais são seus tipos de comando
Gerar valores com SELECT
Selecionar colunas individualmente com SELECT
Renomear e gerar colunas em uma consulta com AS
Concatenar colunas e valores com CONCAT
Remover dados duplicados em uma consulta com DISTINCT
Contar a quantidade de resultados em uma consulta com COUNT
Limitar a quantidade de resultados em uma consulta com LIMIT
Pular resultados em uma consulta com OFFSET
Ordenar os resultados de uma consulta com ORDER BY
CREATE : Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers
ALTER : Para alterar a estrutura de qualquer objeto
DROP : Permite deletar objetos
TRUNCATE : Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados
SELECT : usado para buscar dados em um banco de dados
INSERT : insere dados em uma tabela
UPDATE : altera dados dentro de uma tabela
DELETE : exclui dados de uma tabela
GRANT : concede acesso a um usuário
REVOKE : remove acessos concedidos através do comando GRANT
COMMIT : muda suas alterações de temporárias para permanentes no seu banco de dados
ROLLBACK : desfaz todo o impacto realizado por um comando
SAVEPOINT : define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query
TRANSACTION : comandos que definem onde, como e em que escopo suas transações são executadas

CREATE DATABASE IF NOT EXISTS mvc_example;

USE mvc_example;

CREATE TABLE authors (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality)
VALUES
    ('George', 'R. R.', 'Martin', '1948-09-20', 'norte-americano'),
    ('J.', 'R. R.', 'Tolkien', '1892-01-03', 'britânico'),
    ('Isaac', NULL, 'Asimov', '1920-01-20', 'russo-americano'),
    ('Frank', NULL, 'Herbert', '1920-02-11', 'norte-americano'),
    ('Júlio', NULL, 'Verne', '1905-03-24', 'francês');

## Estabelecendo uma conexão com o banco
Com o banco criado e populado, vamos criar nosso projeto Node.js.
Comece criando uma nova pasta para conter o projeto. Dê o nome que você quiser a ela, mas aqui vamos chamá-la de mvc-example :

 mkdir mvc-example
 cd mvc-example

 Agora, iniciamos um novo projeto Node.js, passando a flag -y para pular as perguntas e gerar um projeto com as opções padrão:

  npm init -y
   npm install mysql2

models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha123',
  database: 'mvc_example'});

module.exports = connection;

## Criando o model

Agora, podemos de fato começar a escrever nossa aplicação. A primeira coisa que faremos é criar uma rota que renderizará uma lista com os nomes de todos os autores. Queremos também que seja exibido o nome completo do escritor, que será a concatenação do primeiro nome, nome do meio (se houver) e sobrenome . Vamos pensar um pouco sobre o que serão nossa view , controller e model .
A view , no momento, será uma página HTML que a pessoa poderá visualizar. Por enquanto, só mostraremos o nome (completo) de um escritor.
O model funcionará exatamente como na aplicação que desenvolvemos anteriormente, quando estávamos aprendendo sobre MSC. Sendo assim, ele deverá se encarregar de todos os detalhes de baixo nível, como se conectar com o banco, montar e executar as queries necessárias para buscar e retornar os dados desejados, fazendo o mapeamento dos dados para um formato que seja mais adequado para o domínio da aplicação.
Dando continuidade à nossa aplicação, crie o arquivo Author.js , dentro da pasta models . Adicione o código abaixo ao arquivo criado:
models/Author.js

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

// Serializa o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});

// Busca todos os autores do banco.

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};

## Criando o Controller

com o model criado, é hora  de criar nosso controller. como você ja sabe, um controller é uma função  usada como callback para responder a requisição que chegam a uma rota.
Para começar, vamos instalar o express

 npm install express

Agora, crie uma nova pasta controllers na raiz do projeto. Dentro dela, crie um novo arquivo authorController.js e coloque o código abaixo:
controllers/authorController.js

const Author = require('../models/Author');

const listAuthors = async (req, res) => {
 // Já vamos voltar para adicionar a lógica aqui
};

module.exports = {
  listAuthors
}

index.js

const express = require('express');

const authorController = require('./controllers/authorController');

const app = express();

app.get('/authors', authorController.listAuthors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

