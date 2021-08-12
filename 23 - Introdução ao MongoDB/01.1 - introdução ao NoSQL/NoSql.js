/* comandos
mongoDB conection
mongodb://localhost:27017

Iniciando o MongoDB
sudo service mongod start

sudo service mongod status
sudo systemctl enable mongod.service
sudo service mongod start

sudo apt-get autoremove
sudo apt-get autoclean
sudo rm -rf /var/log/mongodb

use nomeDoBanco
db.nomeDaColecao.insertOne( { x: 1 })


$lt <
$lte <=
$gt >
$gte >=
$eq ===
$ne !==
$in
$nin



base de dados( banco de dados )                 base de dados
coleção(collections)  tabels                    Tabela de dad
documento(documents) linhas                     Registro
atributo(atributs) colunas                      Coluna

show dbs;
use nome-banco;
show collections;
cls;
it paginação terminal
INSERTS

db.nomeDobanco.insertOne({key:value});
insert()
insertMany() ;
find() ;
count() ;
limit() e o skip() .
db.nomeDoBanco.insert
pretty()


db.myDB.find();

Import
mongoimport --db class -- collection films ./dataset.json
mongoexport --db =class --collection=film --out=diretorio

db.film.find({
  ano: {$lt : 2000 }
})

db.film.find({
  ano: {$lte : 2000 }
})

db.film.find({
  ano: {$gt : 2000 }
})

db.film.find({
  ano: {$gte : 2000 }
})

db.film.find({
  ano: { $gte : 2000, $lte : 3000 }.pretty();
})

db.film.find({
  ano: {$ne : 2000 }
})

db.film.find({
  titulo: /i/
  titulo: /^ME/
  titulo: /as$/
});

db.filmes.find({ titulo: /i/ }); //like '%i%'
db.filmes.find({ titulo: /^Me/ }); //like 'Me%'
db.filmes.find({ titulo: /as$/ }); //like '%as'

deletar
db.film.deleteOne({titulo:harmony})


// Para utilizar o banco
use nomeDoBanco
​
//cria uma coleção direto no dataBase
db.createCollection( "nomeDaColecao", { collation: { locale: "pt" } } );
​
// insere dados dentro da coleção
db.nomeDaColecao.insertOne( { x: 1 })
​
//inserindo varios dados
db.nomeDaColecao.insertMany(
  { "chave1": "valor1"},
  { "chave2": "valor2"},
  { "chave3": "valor3"}
  )
  ​
  //Procurar  um dado na coleção
  db.collection.findOne("chave": "valor")
  ​
  //Procurar  mais dados na coleção
  db.collection.find("chave": "valor")
  ​
  //Procurar um ou mais dados na coleção onde:
  // a query define os filtros a ser consultado
  // o projection define o retorno da sua consulta
  db.collection.find(query, projection)
  ​
  //Para filtragem dos campos solicitados
  dbdb.collection.find({}, {"chave": 1, _id:0})
  ​
  // Retorna o número de documentos de uma coleção
  db.collection.count()
  ​
  //limitar o número de documentos retornados por uma consulta
  // db.collection.find(<query>).limit(<número>)
db.bios.find().limit(5)
​
// deixar os resultados exibidos mais legíveis
db.bios.find().limit(5).pretty()
​
//determinará quantos documentos serão "pulados" antes de começar a retornar
db.bios.find().skip(2)
db.bios.find().limit(10).skip(5)
​
// Utilizar os operadores de comparação
​
// $lt ( less than , menor que, <)
db.inventory.find({ qty: { $lt: 20 } })
​
// $lte ( less than or equal , menor ou igual a, <=)
db.inventory.find({ qty: { $lte: 20 } })
​
// $gt ( greater than , maior que, >)
db.inventory.find({ qty: { $gt: 20 } })
​
// $gte ( greater than or equal , maior ou igual a, >=)
db.inventory.find({ qty: { $gte: 20 } })
​
// $eq ( equal , igual a, =)
db.inventory.find({ qty: { $eq: 20 } })
​
// $ne ( not equal , diferente de, !=, <>)
db.inventory.find({ qty: { $ne: 20 } })
​
// $in ( in , dentro de)
db.inventory.find({ qty: { $in: [ 5, 15 ] } })
​
// $nin ( not in , não está dentro de)
db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )
​
{/* Utilizar os operadores lógicos }/*
​
//{ $and ( and , se todas as condições forem verdadeiras retorna true ) }
// { $and: [{ <expressão1> }, { <expressão2> } , ... , { <expressãoN> }] }
db.inventory.find({
  $and: [
    { price: { $ne: 1.99 } },
    { price: { $exists: true } }
  ]
})
​
{/* $or ( or , se apenas uma condição for verdadeira retorna true ) }/*
// { $or: [{ <expression1> }, { <expression2> }, ... , { <expressionN> }] }
db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })
*/
​
{/* Compor filtros avançados com */}
{/* $not ( not , inverte o resultado da expressão) */}
// { campo: { $not: { <operador ou expressão> } } }
db.inventory.find({ price: { $not: { $gt: 1.99 } } })
​
{/* $nor ( not or , semelhante ao or , porém trabalha com a condição false ) */}
{/* { $nor: [ { <expressão1> }, { <expressão2> }, ...  { <expressãoN> } ] } */}
db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })
​
db.filmes.find({ titulo: /i/ }); //like '%i%'
db.filmes.find({ titulo: /^Me/ }); //like 'Me%'
db.filmes.find({ titulo: /as$/ }); //like '%as'
​
​
{/* $exists ( exists , verifica a existência de um atributo) */}
{/* Operador $exists */}
{/* { campo: { $exists: <boolean> } } */}
db.inventory.find({ qty: { $exists: true } })
db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })
​
{/* sort() ( sort , ordenar) */}
{/* Método sort() */}
db.colecao.find().sort({ "campo": "1 ou -1"})
db.example.find({}, { value, name }).sort({ value: -1 }, { name: 1 })
​
{/* Removendo documentos */}
​
{/* deleteOne() */}
// remove o primeiro documento da coleção inventory em que o atributo status é igual a D
db.inventory.deleteOne({ status: "D" })
​
{/* deleteMany() */}
// remove todos os documentos da coleção inventory em que o atributo status é igual a A :
db.inventory.deleteMany({ status : "A" })
​
// Para remover todos os documentos da coleção,
// basta não passar nenhum parâmetro para o método deleteMany(
  db.inventory.deleteMany({})
  ​
  {/* Apagando uma coleção */}
  db.nomeDaColecao.drop()
  ​
  {/* Apagando um banco de dados */}
  ​
  db.dropDatabase()

  /*
  testes
  ./scripts/evaluate.sh
  ./scripts/evaluate.sh desafioN
  */
  
  criar uma collection
  db.createCollection("nomeColection")
  
  inserindo registro 
  one
  many[]
  db.nomeColection.insert({nome:valor})
  
  db.nomeCollection().limit(1)  observe que apos o find eu digo o limit ou skip count
  find({where}{booleano})  tem dois parametros 
  
  remover registro 
  db.nomeCollection.remove({key:value})   temos tambem o delete
  
  atualizar um documento 
  db.nomeCollection.update(
  {_id: objectId(wedfrfrf543f)},
  {$set:{$key:value}}
  )
  
  db.nomeCollection.find( { nome:{$in:25} } )
   db.nomeCollection.find( { nome:{ $in:[25,26,39] } } )
   $ne : not null
   $nin: not in
   
   db.nomeCollection.find( { $and:[{name:"item11"}, {price:10}]} )
   
    db.nomeCollection.find( { $or:[{name:"item11"}, {price:10}]} )
  
  
  
  
  
  
  
  
