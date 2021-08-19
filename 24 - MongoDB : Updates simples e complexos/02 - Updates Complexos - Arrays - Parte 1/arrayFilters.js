db.recipes.insertMany([
  {
    title: "Panqueca Simples",
    ingredients: [
      { name: "Farinha", quantity: 2},
      { name: "Oleo", quantity: 4 },
      { name: "Leite", quantity: 1 },
    ],
  },
  {
    title: "Bolo de Cenoura",
    ingredients: [
      { name: "Farinha", quantity: 2},
      { name: "Oleo", quantity: 1, unit: "xícara" },
      { name: "Ovo", quantity: 3},
      { name: "Cenoura", quantity: 3},
      { name: "Fermento", quantity: 1},
    ],
  },
]);

db.recipes.updateOne( { title: "Panqueca Simples" }, { $set: { "ingredients.1.unit": "xícara" } } );
db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
set : {
      "ingredients.$[elemento].name": "Farinha Integral",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] },
);


use('conteudo_tryve')
db.recipes.updateOne(
  {title: "Panqueca Simples"},
  {$set:{"ingredients.$[elemento].name": "LeiteNinho",
  }},
  { arrayFilters: [ { "elemento.name": "Leite" } ] },
)

db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
    $set : {
      "ingredients.$[elemento].unit": "xícara",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha Integral" } ] },
);

use('conteudo_tryve')
db.recipes.updateOne(
  {title: "Panqueca Simples"},
  {$set:{"ingredients.$[elemento].unico": "Xícara",
  }},
  { arrayFilters: [ { "elemento.name": "LeiteNinho" } ] },
)


db.recipes.updateMany( // Passamos de updateOne para updateMany.
  {}, // Retiramos a restrição do título.
  {
    $set : {
      "ingredients.$[elemento].unit": "xícara", // Setamos `unit` como "xícara",
      "ingredients.$[elemento].name": "Farinha Integral", // `name` como "Farinha Integral".
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] }, // Filtramos os arrays que o valor da propriedade `name` seja "Farinha".
);