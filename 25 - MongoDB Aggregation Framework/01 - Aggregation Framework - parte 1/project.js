/*
O operador $project tem como uma de suas funções passar adiante no pipeline apenas alguns campos dos documentos vindos do estágio anterior
find({}, { $project }) .
*/

db.books.insertOne(
  {
    _id: 1,
    title: "A Fundação",
    isbn: "0001122223334",
    author: { last: "Asimov", first: "Isaac" },
    copies: 5
  }
);

db.books.aggregate(
  [
    {
project : {
        title : 1,
        author : 1
      }
    }
  ]
);

db.books.aggregate(
  [ { $project: { _id:false, title: false, author: true } }]
);

db.books.aggregate([
  {
    $project : {
      copies: 0
    }
  }
]);

// Excluindo campos em subdocumentos
db.books.aggregate([
  {
project : {
      "author.first": 0,
      copies: 0
    }
  }
]);

// Podemos usar uma string iniciada com o caractere $ para indicar que queremos projetar um campo, assim: "$nomeDoCampo".
// A operação a seguir adiciona os novos campos isbn , lastname e copiesSold :

db.books.aggregate([
  {
project: {
      title: 1,
      isbn: {
        prefix: { $substr: ["$isbn", 0, 3] },
        group: { $substr: ["$isbn", 3, 2] },
        publisher: { $substr: ["$isbn", 5, 4] },
        title: { $substr: ["$isbn", 9, 3] },
        checkDigit: { $substr: ["$isbn", 12, 1] }
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);

/*
Lembre-se: esses novos campos são apenas adicionados para a visualização final, não serão salvos no banco.
{
  "_id" : 1,
  "title" : "A Fundação",
  "isbn" : {
    "prefix" : "000",
    "group" : "11",
    "publisher" : "2222",
    "title" : "333",
    "checkDigit" : "4"
  },
  "lastName" : "Asimov",
  "copiesSold" : 5
}
*/
