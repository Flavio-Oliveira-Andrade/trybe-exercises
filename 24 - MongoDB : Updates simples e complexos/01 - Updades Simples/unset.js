use('conteudo_tryve');
db.fruits.insertOne(
  {
    _id:100,
    name:"Banana",
    Qty:100,
    instock: true,
  }
);
use('conteudo_tryve');
db.fruits.find();

use('conteudo_tryve');
db.fruits.updateOne(
  {
    _id:100,
    name:"Banana",
    Qty:100,
    instock: true,
  },
  { $rename:{name:"ProductoName" } }
);

use('conteudo_tryve');
db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } }
);

use('conteudo_tryve');
db.fruits.insertOne(
  {
    _id:100,
    name:"Banana",
    Qty:100,
    instock: true,
  }
);
use('conteudo_tryve');
db.fruits.find();

use('conteudo_tryve');
db.fruits.updateOne(
  {
    _id:100,
    name:"Banana",
    Qty:100,
    instock: true,
  },
  { $rename:{name:"ProductoName"}}
);

use('conteudo_tryve');
db.fruits.updateMany(
  { "ProductoName": "Banana"},
  { $unset: { Qty: "" } }
);
