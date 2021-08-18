/*
Operador $group
Este é provavelmente o operador que você mais utilizará nas operações de agregação. Com ele é possível agrupar valores de diversas formas, desde um "distinct" simples até cálculos mais elaborados com a ajuda de outros operadores.

$addToSet : retorna um array com os valores únicos da expressão para cada grupo;
$avg : retorna a média de valores numéricos. Valores não numéricos são ignorados;
$first : retorna um valor do primeiro documento de cada grupo;
$last : retorna um valor do último documento de cada grupo;
$max : retorna o maior valor de cada grupo;
$sum : retorna a soma de valores numéricos. Valores não numéricos são ignorados.

*/

db.sales.insertMany([
  {
    _id: 1,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("2"),
    date: ISODate("2014-03-01T08:00:00Z")
  },
  {
    _id: 2,
    item: "O Homem e Seus Símbolos",
    price: NumberDecimal("20"),
    quantity: NumberInt("1"),
    date: ISODate("2014-03-01T09:00:00Z")
  },
  {
    _id: 3,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity: NumberInt( "10"),
    date: ISODate("2014-03-15T09:00:00Z")
  },
  {
    _id: 4,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity:  NumberInt("20"),
    date: ISODate("2014-04-04T11:21:39.736Z")
  },
  {
    _id: 5,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("10"),
    date: ISODate("2014-04-04T21:23:13.331Z")
  },
  {
    _id: 6,
    item:"A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("5" ),
    date: ISODate("2015-06-04T05:08:13Z")
  },
  {
    _id: 7,
    item: "A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("10"),
    date: ISODate("2015-09-10T08:43:00Z")
  },
  {
    _id: 8,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("5" ),
    date: ISODate("2016-02-06T20:20:13Z")
  }
]);

// Exemplo 1: Contando o número de documentos
// Note que o _id está setado como null , porque nesse caso queremos todos os documentos. O retorno dessa operação é:
// { "_id" : null, "count" : 8 }

db.sales.aggregate(
  [ { $group: {_id : null, count:{ sum: 1 } } }]
);

db.sales.aggregate([
  {
    group: {
    _id: null,
    count: { $sum: 1 }
    }
  }
]);

db.sales.count();
// SELECT COUNT(*) AS count FROM sales;

// 2: Retornando valores distintos
// O operador $group também pode ser utilizado para encontrar os valores distintos de um campo.
// Note que o campo deve ser precedido de $ . O resultado da operação é:
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      count: { $sum: 1}
    }
  }
]);

// Para saber o valor das vendas, você deve utilizar o operador $sum , que, por sua vez, aceita mais modificadores. No exemplo que se segue, multiplica-se o valor do campo price pelo valor do campo quantity :
db.sales.aggregate([
  {
group : {
      _id : "$item",
      totalSaleAmount: {
sum: {
multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

/*
SELECT item, SUM(price * quantity) AS totalSaleAmount
FROM sales
GROUP BY item;

Exemplo 4: Having (do Mysql), combinando estágios no aggregate
Também é possível realizar operações equivalentes ao HAVING do SQL , que nada mais é que um filtro depois de um agrupamento. Por exemplo, se você quiser manter o agrupamento anterior, mas saber apenas as vendas que possuem valores maiores do que 100 , é só adicionar mais um estágio no pipeline :
*/

db.sales.aggregate([
  // Primeiro Estágio
  {
    $group: {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  // Segundo Estágio
  {
    $match: { "totalSaleAmount": { $gte: 100 } }
  }
]);

/**
SELECT item, SUM(price * quantity) AS totalSaleAmount
FROM sales
GROUP BY item
HAVING totalSaleAmount >= 100;
 */

/* 5: Agrupando por null
Você pode executar operações matemáticas em todos os documentos de uma coleção. Basta passar null no _id e seguir com os operadores de acumulação.
No exemplo a seguir, a operação de agregação retornará um documento com o valor total da venda, a quantidade média de itens vendidos e o total de vendas:


SELECT SUM(price * quantity) AS totalSaleAmount,
       AVG(quantity)         AS averageQuantity,
       COUNT(*)              AS count
FROM sales;

Selecione todos os bancos, ou seja, valores do campo bank ;
Selecione o valor total das transações em cada banco e quantas são;
Selecione o valor total de transações;
Selecione os bancos que têm o valor total de transações maior que 1000.
*/

db.sales.aggregate([
  {
group : {
      _id : null,
      totalSaleAmount: {
sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);
