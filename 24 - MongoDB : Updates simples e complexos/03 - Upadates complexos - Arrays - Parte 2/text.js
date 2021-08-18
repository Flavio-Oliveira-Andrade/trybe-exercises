/*
O operador $text faz uma busca "textual" em um campo indexado por um text index. A expressão para utilizar o $text tem a seguinte sintaxe:

{
text:
    {
search: <string>,
language: <string>,
caseSensitive: <boolean>,
diacriticSensitive: <boolean>
    }
}

$search : Uma string com os termos que o MongoDB utilizará para fazer o parse e utilizará como filtro. Internamente, o MongoDB faz uma busca lógica ( OR ) sobre os termos, a menos que seja especificado como uma frase inteira;

$language : Opcional. Esse campo determina a lista de stop words que será utilizada na tokenização da busca. Veja a lista de idiomas suportados. Se você passar o valor none , a busca utilizará uma tokenização simples sem utilizar nenhuma lista de stop words ;
Stop word: Também conhecido como palavra vazia , é uma palavra que é removida antes ou após o processamento de um texto em linguagem natural.

$caseSensitive : Opcional. Recebe um valor booleano para habilitar ou desabilitar buscas case sensitive . O valor default é false , o que faz com que as buscas sejam case-insensitive . Veja mais informações sobre case-insensitive aqui;

$diacriticSensitive : Opcional. Recebe um valor booleano para habilitar ou desabilitar busca diacritic sensitive . O valor default também é false


{ _id: 1, subject: "coffee", author: "xyz", views: 50 },
{ _id: 2, subject: "Coffee Shopping", author: "efg", views: 5 },
{ _id: 3, subject: "Baking a cake", author: "abc", views: 90  },
{ _id: 4, subject: "baking", author: "xyz", views: 100 },
{ _id: 5, subject: "Café Com Leite", author: "abc", views: 200 },
{ _id: 6, subject: "Сырники", author: "jkl", views: 80 },
{ _id: 7, subject: "coffee and cream", author: "efg", views: 10 },
{ _id: 8, subject: "Cafe com Leite", author: "xyz", views: 10 }

*/

db.articles.createIndex({ subject: "text" });

db.articles.find({ $text: { $search: "coffee" } });

db.articles.find({ $text: { $search: "bake coffee cake" } });

db.articles.find({ $text: { $search: "\"coffee shop\"" } });