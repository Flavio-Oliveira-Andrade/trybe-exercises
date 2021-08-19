/*
Com a expressão $add , é possível somar valores numéricos ou datas. Se um dos argumentos for do tipo date , o outro argumento será tratado como milissegundos e adicionado à data.
{ _id: 1, item: "abc", price: 10, fee: 2, date: ISODate("2014-03-01T08:00:00Z") },
{ _id: 2, item: "jkl", price: 20, fee: 1, date: ISODate("2014-03-01T09:00:00Z") },
{ _id: 3, item: "xyz", price: 5,  fee: 0, date: ISODate("2014-03-15T09:00:00Z") },
expressão $add no estágio $project, pode criar um novo campo com o valor total somando os campos price e fee :

Para valores do tipo date , um dos argumentos sempre será tratado como milissegundos.
Imagine que você queira adicionar 3 dias ao valor do campo date .
Você consegue fazer de duas maneiras. A primeira é passar em um dos argumentos
o número equivalente a 3 dias em milissegundos ( 2,592e+8 ).
A segunda é criar uma expressão que devolva esse número:


*/
db.sales.aggregate([
  { $project: { item: 1, total: { $add: ["$price", "$fee"] } } }
]);

// { "_id" : 1, "item" : "abc", "total" : 12 }
// { "_id" : 2, "item" : "jkl", "total" : 21 }
// { "_id" : 3, "item" : "xyz", "total" : 5 }

db.sales.aggregate([
  { $project: { item: 1, billing_date: { $add: ["$date", 2.592e+8] } } }
]);

db.sales.aggregate([
  { $project: { item: 1, billing_date: { $add: ["$date", 3 * 24 * 60 * 60000] } } }
]);

// Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.



