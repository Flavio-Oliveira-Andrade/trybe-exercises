use('myDB')
db.products.update(
  {_id:100},
  {
    $set:{
      "tags.[1]":"rain gear",
      "rating.[0].rating":2
    }
  }
)

use('conteudo_tryve');
db.getCollection('products')
  .find(
    {
      /*
      * Filter
      * fieldA: value or expression
      */
    },
    {
      /*
      * Projection
      * _id: 0, // exclude _id
      * fieldA: 1 // include field
      */
    }
  )
  .sort({
    /*
    * fieldA: 1 // ascending
    * fieldB: -1 // descending
    */
  });

  {$type:"timestamp"} {$type:"date"}
  use('conteudo_tryve');
  db.products.find();

use('conteudo_tryve');
db.products.insertOne(
  {_id:101, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z")}
)

use('conteudo_tryve');
db.products.updateOne(
  { _id: 101 },
  { $currentDate: {
      lastModified: true,
      "cancellation.date": { $type: "timestamp" }
    }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
);