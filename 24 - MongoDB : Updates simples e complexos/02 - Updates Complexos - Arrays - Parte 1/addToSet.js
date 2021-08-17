use('conteudo_tryve')
db.supplies.updateMany(
  { _id: 1 },
  { $addToSet: { items: "accessoriesss" } },
);

db.inventory.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "electronics", "accessories"],
      },
    },
  },
);

use('conteudo_tryve')
db.supplies.updateMany(
  { _id: 1 },
  { $addToSet:
  { items:
  {$each:
  ["cameras", "electronicss", "accessoriess"]} } },
);

use('conteudo_tryve')
db.supplies.updateMany(
  { _id: 1 },
  { $addToSet: { items: {$each: ["camera", "electronics", "accessories"]} } },
);
