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





