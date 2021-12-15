use('conteudo_tryve')
db.recipes.updateOne(
  {title: "Panqueca Simples"},
  {$set:{"ingredients.$[elemento].name": "LeiteNinho",
  }},
  { arrayFilters: [ { "elemento.name": "Leite" } ] },
)
