
  use('conteudo_tryve')
  db.supplies.updateMany(
  {},
    {
  pull: {
        items: {
          name: { $in: ["pens", "envelopes"] },
        },
      },
    },
  );

  use('conteudo_tryve')
  db.supplies.updateMany(
  {_id: 1},
    {
  pull: {
        items: {
          name: { $in: ["pens", "envelopes"] },
        },
      },
    },
  );

db.profiles.updateOne(
  { _id: 1 },
  {
    $pull: {
      votes: { $gte: 6 },
    },
  },
);

db.survey.updateMany(
  {},
  {
    $pull: {
      results: { score: 8 , item: "B" },
    },
  },
);


