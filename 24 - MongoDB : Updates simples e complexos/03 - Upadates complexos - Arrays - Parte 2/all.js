db.recipes.updateOne(
  {title: "Panqueca Simples"},
  {$set:{"ingredients.$[elemento].name": "LeiteNinho",
  }},
  { arrayFilters: [ { "elemento.name": "Leite" } ] },
)

db.inventory.find(
  { tags: { $all: [ "ssl", "security" ] } }
);

db.inventory.find(
  {
    $and: [
      { tags: "ssl" },
      { tags: "security" }
    ]
  }
);

use('conteudo_tryve')
db.products.find();

use('conteudo_tryve')
db.products.find({ tags: ["coatss", "outerwearr","clothingg"] });

use('conteudo_tryve')
db.products.find({ tags: { $all: ["coatss", "outerwearr"] } });
