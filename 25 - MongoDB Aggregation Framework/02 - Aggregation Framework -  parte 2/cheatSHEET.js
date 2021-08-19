/*
Cheat Sheet
A intenção deste conteúdo é fornecer uma base da sintaxe e proporcionar uma consulta rápida
da estrutura para realização dos exercícios.


// $lookup (let/pipeline)
// Template

db.collection.aggregate([
  {
    lookup:
    {
      from: <coleção para unir>,
      let: { <var_1>: <expressão>, …, <var_n>: <expressão> },
      pipeline: [ <pipeline a ser executada na coleção unida> ],
      as: <campo do array de saída>
    }
  }
]);

Exemplo
*/

db.orders.aggregate([
  {
lookup:
        {
          from: "warehouses",
          let: { order_item: "$item", order_qty: "$ordered" },
          pipeline: [
             { $match:
                { $expr:
                   { $and:
                      [
                        { $eq: [ "$stock_item",  "$$order_item" ] },
                        { $gte: [ "$instock", "$$order_qty" ] }
                      ]
                   }
                }
             },
             { $project: { stock_item: 0, _id: 0 } }
          ],
          as: "stockdata"
        }
   }
])

/*
$add
Template
db.collection.aggregate([
  {
project: {
      <campo>: {
add: [ <expressão1>, <expressão2>, ... ]
      },
    },
  },
]);
Exemplo
*/

db.products.aggregate([
  {
project: {
      item: 1,
      total: {
add: ["$price", "$fee"]
      },
    },
  },
]);

/*
$subtract
Template

db.collection.aggregate([
  {
project: {
      <campo>: {
subtract: [
          <expression1>,
          <expression2>
        ]
      },
    },
  },
]);

Exemplo:
*/

db.products.aggregate([
  {
project: {
      item: 1,
      total: {
subtract: [
          { $add: ["$price", "$fee"] },
          "$discount"
        ]
      },
    },
  },
]);

/*
$ceil
Template
db.collection.aggregate([
  {
project: {
      roundedNumber: {
ceil: <numero>,
      },
    },
  },
]);

exemplo:
*/

db.movies.aggregate([
  {
project: {
      value: 1,
      ceilingValue: {
ceil: "$rating",
      },
    },
  },
]);

/*
$floor
Template

db.collection.aggregate([
  {
project: {
      value: 1,
      roundedNumber: {
floor: <numero>,
      },
    },
  },
]);

exemplo:
*/

db.movies.aggregate([
  {
project: {
      value: 1,
      floorValue: {
floor: "$value",
      },
    },
  },
]);

/*
$abs
Template

db.collection.aggregate([
  {
    project: {
      <campo>: {
abs: <numero>,
      },
    },
  },
]);

exemplo:
*/

db.operations.aggregate([
  {
    project: {
      delta: {
abs: { $subtract: ["$start", "$end"] },
      },
    },
  },
]);

/*
$multiply
Template

db.collection.aggregate([
  {
project: {
      <campo>: {
multiply: [ <expressão1>, <expressão2>, ... ]
      },
    },
  },
]);

exemplo:
*/

db.operations.aggregate([
  {
project: {
      date: 1,
      item: 1,
      total: {
multiply: [
          "$price",
          "$quantity"
        ]
      },
    },
  },
]);

/*
$divide
Template

db.collection.aggregate([
  {
project: {
      <campo>: {
divide: [ <expressão1>, <expressão2> ]
      },
    },
  },
]);

exemplo:
*/

db.employees.aggregate([
  {
project: {
      name: 1,
      workdays: {
divide: ["$hours", 8]
      },
    },
  },
]);

/*
$addFields
Template

db.collection.aggregate([
  {
addFields: {
      <novoCampo1>: <valor> ,
      <novoCampo2>: <valor> ,
      ...
    },
  },
]);

Exemplo:
*/

db.school.aggregate([
  {
addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    },
  },
  {
addFields: {
      totalScore: {
add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      },
    },
  },
]);
