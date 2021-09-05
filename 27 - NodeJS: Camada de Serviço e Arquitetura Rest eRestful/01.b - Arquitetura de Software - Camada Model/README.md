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