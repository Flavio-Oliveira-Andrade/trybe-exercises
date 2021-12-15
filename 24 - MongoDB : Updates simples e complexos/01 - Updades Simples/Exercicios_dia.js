use('tryve');
db.movies.insertMany()

use('conteudo_tryve');
db.Movies.find()
db.Movies.insertMany([
{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
},
]);

use('conteudo_tryve');
db.Movies.count();


use('conteudo_tryve');
db.Movies.updateOne(
  { title: "Batman" },
  { $set: { imdbRating: 7.7 } },
);

db.movies.updateOne(
  { title: "Godzilla" },
  { $set: { budget: 1 } },
);

db.movies.updateOne(
  { title: "Home Alone"},
  {
set: {
      budget: 15,
      imdbRating: 5.5,
    },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  { $inc: { imdbRating: 2 } },
);

db.movies.updateOne(
  { title: "Home Alone" },
  { $inc: { budget: 5 } },
);

use('conteudo_tryve');
db.Movies.updateOne(
  { title: "Batman" },
  { $mul: { imdbRating: 4 } },
);

db.movies.updateOne(
  { title: "Batman" },
  { $rename: { budget: "estimatedBudget" } },
);

db.movies.updateOne(
  { title: "Home Alone" },
  { $min: { budget: 5 } },
);

db.movies.updateOne(
  { title: "Godzilla" },
  {
max: { imdbRating: 8.6 },
set: { "category.1": "thriller" },
  },
);

db.movies.updateOne(
  { title: "Home Alone" },
  {
currentDate: {
      lastUpdated: { $type: "timestamp" },
    },
  },
);

db.movies.updateMany(
  {},
  { $set: { sequels: 0 } },
);

db.movies.updateMany(
  {},
  {
unset: {
      budget: "",
      estimatedBudget: "",
    },
  },
);

db.movies.updateMany(
  {
or: [
      { title: "Batman" },
      { title: "Home Alone" },
    ],
  },
  {
max: {
      imdbRating: 17,
    },
  },
);

use('conteudo_tryve');
db.xmen.updateMany(
    { class: "unknown" },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $unset: { class: "" },
    },
  );


  db.xmen.updateMany(
    {},
    {
currentDate: { lastUpdate: { $type: "timestamp" } },
rename: {
        name: "hero_name",
        true_name: "full_name",
      },
set:{ power: 100 },
    },
  );

    db.xmen.updateMany(
    { class: { $in: ["omega", "gama"] } },
    {
currentDate: { lastUpdate: { $type: "timestamp" } },
max: { power: 500 },
    },
  );

    db.xmen.updateMany(
    { class: "gama" },
    {
currentDate: { lastUpdate: { $type: "timestamp" } },
min: { power: 300 },
    },
  );

    db.xmen.updateMany(
    { class: { $exists: false } },
    {
currentDate: { lastUpdate: { $type: "timestamp" } },
inc: { power: -100 },
    },
  );

    db.xmen.updateMany(
    {
or: [
        { occupation: "Senior Staff", power: { $gt: 100 } },
        { occupation: "Junior Staff", power: { $gt: 200 } },
      ],
    },
    {
currentDate: { lastUpdate: { $type: "timestamp" } },
set: { areas: ["Students Room"] },
    },
  );

    db.xmen.updateMany(
    { areas: { $exists: false }, occupation: "Junior Staff" },
    {
currentDate: { lastUpdate: { $type: "timestamp" } },
set: { areas: ["Outside"] },
    },
  );
