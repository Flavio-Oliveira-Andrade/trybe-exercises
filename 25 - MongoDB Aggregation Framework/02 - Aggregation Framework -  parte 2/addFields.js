/*
Estágio $addFields
Você pode incluir subdocumentos ou arrays de subdocumentos, utilizando o
conceito de dot notation. Um pipeline pode conter mais de um estágio $addFields .

{
  _id: 1,
  student: "Maya",
  homework: [10, 5, 10],
  quiz: [10, 8],
  extraCredit: 0
},
{
  _id: 2,
  student: "Ryan",
  homework: [5, 6, 5],
  quiz: [8, 8],
  extraCredit: 8
}

A operação de agregação abaixo utiliza o $addFields duas vezes para incluir três novos campos nos documentos de saída:

*/

db.scores.aggregate([
  {
addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
addFields: {
      totalScore: {
add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      }
    }
  }
]);

/*
{
  "_id" : 1,
  "student" : "Maya",
  "homework" : [ 10, 5, 10 ],
  "quiz" : [ 10, 8 ],
  "extraCredit" : 0,
  "totalHomework" : 25,
  "totalQuiz" : 18,
  "totalScore" : 43
}
{
  "_id" : 2,
  "student" : "Ryan",
  "homework" : [ 5, 6, 5 ],
  "quiz" : [ 8, 8 ],
  "extraCredit" : 8,
  "totalHomework" : 16,
  "totalQuiz" : 16,
  "totalScore" : 40
}

1 - Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.

*/