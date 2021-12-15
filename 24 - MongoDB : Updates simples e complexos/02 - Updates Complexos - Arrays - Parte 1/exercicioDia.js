db.movies.updateOne(
  { title: "Batman" },
  {
push: { category: "superhero" },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  {
push: {
      category: {
each: ["villain", "comic-based"],
      },
    },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  {
pull: { category: "action" },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  {
pop: { category: -1 },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  {
pop: { category: 1 },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  {
addToSet: { category: "action" },
  },
);

db.movies.updateMany(
  {
    title: {
in: ["Batman", "Home Alone"],
    },
  },
  {
push: { category: "90's" },
  },
);

/*
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
*/

db.movies.updateOne(
  { title: "Home Alone" },
  {
push: {
      cast: {
each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin",
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry",
          },
          {
            "actor": "Daniel Stern",
          },
        ],
      },
    },
  },
);

db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
set: { "cast.$.character": "Marv" },
  },
);

/*
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
*/

db.movies.updateOne(
  { title: "Batman" },
  {
push: {
      cast: {
each: [
          {
            "character": "Batman",
          },
          {
            "character": "Alfred",
          },
          {
            "character": "Coringa",
          },
        ],
      },
    },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
push: { "cast.$.actor": "Christian Bale" },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  {
push: { "cast.$.actor": "Michael Caine" },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  {
push: { "cast.$.actor": "Heath Ledger" },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
push: {
      "cast.$.actor": {
each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
sort: 1,
      },
    },
  },
);