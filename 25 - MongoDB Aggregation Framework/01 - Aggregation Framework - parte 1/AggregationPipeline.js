/*
para que serve e como utilizar o Aggregation Framework .
Filtrar documentos com o estágio $match ;
Limitar os resultados com $limit ;
Fazer agrupamentos com o $group
Controlar a exibição de campos com o $project .
Trabalhar com arrays com o $unwind ;
Juntar dados de uma ou mais coleções com o $lookup ;

O MongoDB fornece três caminhos para executar operações de agregação:
aggregation pipeline , map-reduce function e single purpose aggregation methods

Primeiro Estágio : O estágio $match filtra os documentos pelo campo status , e passam para o próximo estágio somente os documentos que têm status igual a "A" .
Segundo Estágio : O estágio $group agrupa os documentos pelo campo cust_id para calcular a soma dos valores do campo amount para cada cust_id único.

{ <operator>: [ <argument1>, <argument2> ... ] }
*/

db.orders.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
]);