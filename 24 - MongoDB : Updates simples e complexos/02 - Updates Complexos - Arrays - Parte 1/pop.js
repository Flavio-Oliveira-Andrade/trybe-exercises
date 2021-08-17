
  use('conteudo_tryve')
  db.supplies.updateOne(
    { _id: 1 },
     { $pop: { items: -1 } }
  );

  use('conteudo_tryve')
  db.supplies.updateOne(
    { _id: 1 },
     { $pop: { items: 1 } }
  );