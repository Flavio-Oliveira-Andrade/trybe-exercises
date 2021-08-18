/*
Operador $regex
O operador $regex fornece os "poderes"
 das expressões regulares ( regular expressions )
 para seleção de strings . MongoDB utiliza
  expressões regulares compatíveis com Perl ( PCRE ),
   versão 8.42, e com suporte a UTF-8 .
Um uso muito comum para o operador $regex é
fazer consultas como o LIKE do SQL .

{ _id: 100, sku: "abc123", description: "Single line description." },
{ _id: 101, sku: "abc789", description: "First line\nSecond line" },
{ _id: 102, sku: "xyz456", description: "Many spaces before     line" },
{ _id: 103, sku: "xyz789", description: "Multiple\nline description" }

{ "_id" : 100, "sku" : "abc123", "description" : "Single line description." }
{ "_id" : 101, "sku" : "abc789", "description" : "First line\nSecond line" }

*/

db.products.find({ sku: { $regex: /789$/ } });
// SELECT * FROM products WHERE sku LIKE "%789";
// palavras "começando" com ABC:
db.products.find({ sku: { $regex: /^ABC/i } });