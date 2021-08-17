use('myDB')
db.studentes.updateMany(
  {name:"Estudante 3"},
  {$set:{
    School: "beTrybe",
    bestScore: 8.8,
    }
  },
  {upsert: true }
)

use('myDB')
db.products.insertOne(
  {_id: 100 },
  {$set:
    {
      _id: 100,
      sku: "abc123",
      quantity: 250,
      instock: true,
      details:{model: "1402", make: "xyz"},
      tags: ["apparel","clothing"],
      ratings: [{by:"ijk", rating: 4}]

    },
  }
);

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

use('myDB')
db.products.update(
  {_id:100},
  {
    $set:{ }
  }
)

use('myDB')
db.products.find();




/* hooks
css3
 reactjs
  css3-animations
   context-api
    usereducer
    react-lottie
*/