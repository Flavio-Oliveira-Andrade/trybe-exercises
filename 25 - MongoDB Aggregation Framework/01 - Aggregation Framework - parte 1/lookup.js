/*
Operador $lookup
O operador $lookup foi introduzido na versão 3.2 do MongoDB
e vem evoluindo desde então. Com ele, é possível
juntar documentos de outra coleção ( join ).
Como resultado dessa junção, um elemento do tipo array é adicionado
a cada documento da coleção de entrada,
contendo os documentos que deram "match" na coleção com a qual se faz o "join".

Existem quatro parâmetros básicos para montar um $lookup :

1 - from : uma coleção no mesmo database para executar o join ;
2 - localField : o campo da coleção de onde a operação de agregação
está sendo executada. Será comparado por igualdade com o campo especificado no parâmetro foreingField ;
3 - foreingField : o campo da coleção especificada no parâmetro from
que será comparado com o campo localField por igualdade simples;
4 - as : o nome do novo array que será adicionado.


Join com igualdade simples
Considere os seguintes documentos nas coleções orders e inventory :
*/

// orders
db.orders.insertMany([
  { _id: 1, item: "almonds", price: 12, quantity: 2 },
  { _id: 2, item: "pecans", price: 20, quantity: 1 },
  { _id: 3 }
]);

// inventory
db.inventory.insertMany([
  { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
  { _id: 2, sku: "bread", description: "product 2", instock: 80 },
  { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
  { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
  { _id: 5, sku: null, description: "Incomplete" },
  { _id: 6 }
]);

/**
 * Imagine que você queria retornar em uma única query os
 * documentos correspondentes das duas coleções mencionadas.
 *  A primeira coisa é encontrar um campo em comum entre elas.
 *  Nesse caso, seriam os campos item (coleção orders ) e sku (coleção inventory ).
 *  Quando cruzados na operação a seguir, um novo campo, chamado inventory_docs ,
 *  será adicionado ao resultado final:
 */

db.orders.aggregate([
  {$lookup:{
    from: "inventory",
    localFilder: "item",
    foreingField: "sku",
    as : "inventory_docs"
  }}
]);

db.orders.aggregate([
  {
lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);

/*
Como resultado do pipeline , os documentos abaixo serão retornados:

{
  "_id" : 1,
  "item" : "almonds",
  "price" : 12,
  "quantity" : 2,
  "inventory_docs" : [
    {
      "_id" : 1,
      "sku" : "almonds",
      "description" : "product 1",
      "instock" : 120
    }
  ]
}
{
  "_id" : 2,
  "item" : "pecans",
  "price" : 20,
  "quantity" : 1,
  "inventory_docs" : [
    {
      "_id" : 4,
      "sku" : "pecans",
      "description" : "product 4",
      "instock" : 70
    }
  ]
}
{
  "_id" : 3,
  "inventory_docs" : [
    {
      "_id" : 5,
      "sku" : null,
      "description" : "Incomplete"
    },
    {
      "_id" : 6
    }
  ]
}

SELECT * inventory_docs
FROM orders
WHERE inventory_docs IN (
  SELECT *
  FROM inventory
  WHERE sku = orders.item
);


use agg_example;
Selecione todos os clientes com as suas respectivas transações feitas;
Selecione quatro clientes com as suas respectivas transações recebidas;
Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);

*/
