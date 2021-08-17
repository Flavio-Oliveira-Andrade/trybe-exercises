{ $mul: multiplica }
{ $inc: incrementar  + ou - n }
{ $min: valorMinimo }
{ $max: valorMaximo }
{ $currentDate : true, "dataatual"}
{ $rename : "renomeia a key"}
{ $set: adicionaAlgo, value }
{ $unset: removeAlgo, atributo , key  }

db.voos.updateOne({},
  {$mul: { decolagens : 2 }}
)

db.voos.updateOne({},
  {$inc: { decolagens : 2 }}
)

db.voos.updateOne({},
  {$min: { decolagens : 2 }}
)

db.voos.updateOne({},
  {$max: { decolagens : 2 }}
)

db.voos.updateOne({},
  {$currentDate: { "ultimaAlteração.data": true }},
  {$set: {"ultimaAlteração.razão":"add acentos"}}
)

db.voos.updateOne({},
  {$rename: { ultimaAlteração : "newName" }}
)

db.voos.updateOne({},
  {$unset: { ultimaAlteração : "" }}
)



