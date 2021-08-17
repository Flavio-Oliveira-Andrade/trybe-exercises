use('myDB')
db.studentes.insertMany(
  [
    {name:"Estudante 1", school:Trybe },
    {name:"Estudante 2", school:Trybe },
  ]
)

use('myDB')
db.studentes.updateOne({name:"Estudante 2"},
{$set:{name: "Erick"}}
)


use('myDB')
db.products.insertOne(
  {
    _id: 100,
    sku: "abc123",
    quantity: 250,
    instock: true,
    details:{model: "1402", make: "xyz"},
    tags: ["apparel","clothing"],
    ratings: [{by:"ijk", rating: 4}]

  }
);

use('dataFlights');
db.voos.findOne(
  {
    "empresa.nome": "GOL",
    "aeroportoOrigem.sigla": "SBRJ",
    "aeroportoDestino.sigla": "SBSP",
    "grupoVoo": "Regular"
  }
);

use('myDB')
db.studentes.find();

use('myDB')
db.studentes.updateOne({name:"Estudante 2"},
{$set:{name: "Erick"}}
)

use('myDB')
db.studentes.updateMany({school:"Trybe"},
{$set:{school: "beTrybe"}},
{ upsert: true }
)

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
  {
    _id: 100,
    sku: "abc123",
    quantity: 250,
    instock: true,
    details:{model: "1402", make: "xyz"},
    tags: ["apparel","clothing"],
    ratings: [{by:"ijk", rating: 4}]

  }
);


use('myDB')
db.products.update(
  {_id:100},
  {
    $set:{
      "tags.1":"rain gear",
      "rating.0.rating":2
    }
  }
)


use('dataFlights')
//db.studentes.find();
db.voos.find({vooId: 757522});



