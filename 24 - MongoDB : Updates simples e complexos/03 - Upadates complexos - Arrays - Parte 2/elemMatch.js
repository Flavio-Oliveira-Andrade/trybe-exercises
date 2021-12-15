db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);

/*
{ _id: 1, results: [82, 85, 88] },
{ _id: 2, results: [75, 88, 89] }
{
  _id: 1,
  results: [
    { product: "abc", score: 10 },
    { product: "xyz", score: 5 }
  ]
},
{
  _id: 2,
  results: [
    { product: "abc", score: 8 },
    { product: "xyz", score: 7 }
  ]
},
{
  _id: 3,
  results: [
    { product: "abc", score: 7 },
    { product: "xyz", score: 8 }
  ]
}
*/
db.survey.find(
  { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
);

db.survey.find(
  { results: { $elemMatch: { product: "xyz" } } }
);
db.survey.find(
  { "results.product": "xyz" }
);
