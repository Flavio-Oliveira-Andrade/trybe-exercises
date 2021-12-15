use('conteudo_tryve');
db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 1002,
      details: { model: "This", make: "B" },
      tags: [ "coatss", "outerwearr", "clothingg" ],
      "ratings.0.by": "B",
       "ratings.0.rating": 4,
    }
  }
);
use('conteudo_tryve');
db.products.update(
  { _id: 100 },
  {$set: { "details.make":"aaaaa" }},
);

use('conteudo_trybe');
db.products.insertOne(
  {"_id":101, "item1": "ABC", "item2": "DFG", "price": NumberDecimal(10.89),"qty": 25},
);
//
use('conteudo_trybe');
db.products.updateOne(
  { _id:101 },
  { $mul:{ price:NumberDecimal("1.50"), qty : 4 }}
);


use('conteudo_trybe');
db.increment.insertOne(
  { "_id": 102, "sku":"abcfd", "qty": 10, "metrics":{"orders": 2, "ratings":3.5}});


use('conteudo_trybe');
db.increment.updateOne(
  { "_id": 102},
  {$inc:{ qty:3.5, "metrics.orders":1.5 , "metrics.ratings":-1.5 } }
)


use('conteudo_trybe');
db.products.find();
//db.increment.find();
//db.score.find();
//db.tags.find();

db.collections.find();
[
  { _id: 1, campo: 25 }, collections1
  { _id: 2, campo: 50 }, collections2
  { _id: 3, campo: 100 } collections3
]
db.collections.updateMany(
  {},
  {$max:{ campo: 75}}
)

use('conteudo_trybe');
db.collections.updateMany(
  {},
  {$min:{ campo: 75}}
)


use('conteudo_trybe');
db.score.insertOne(
  { _id: 103, highScore: 800, lowScore: 200 }
);

db.scores.update({ _id: 1 }, { $min: { lowScore: 150 } });
{ _id: 1, highScore: 800, lowScore: 150 }
db.scores.update({ _id: 1 }, { $min: { lowScore: 250 } })
db.scores.update({ _id: 1 }, { $max: { highScore: 950 } });
{ _id: 1, highScore: 950, lowScore: 150 }
db.scores.update({ _id: 1 }, { $max: { highScore: 870 } });

datas
use('conteudo_trybe');
db.tags.insertOne(
  {
    _id: 1,
    desc: "crafts",
    dateEntered: ISODate("2019-10-01T05:00:00Z"),
    dateExpired: ISODate("2019-10-01T16:38:16Z")
  }
);

use('conteudo_trybe');
db.tags.updateOne(
  { _id: 1 },
  {
    $min: { dateEntered: new Date("2019-09-25") },
    $max: { dateExpired: new Date("2019-10-02") }
  }
);




