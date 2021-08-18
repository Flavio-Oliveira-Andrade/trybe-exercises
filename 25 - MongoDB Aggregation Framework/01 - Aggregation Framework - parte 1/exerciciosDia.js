// Operador $limit

use('agg_example');
db.transactions.aggregate([
  {
match: {
      from: 'Dave America',
    },
  },
]);

use('agg_example');
db.transactions.aggregate([
  {
match: {
or: [
        { value: { $gt: 700, $lt: 6000 }},
        { to: 'Lisa Simpson' },
      ]
    }
  },
]);

use('agg_example');
db.transactions.aggregate([
  {
match: {
      value: { $gt: 1000 },
    },
  },
  {
limit: 3,
  },
]);

// Operador $group

use('agg_example');
db.transactions.aggregate([
  {
group: {
      _id: '$bank',
      bank: { $sum: 1 }
    }
  }
]);

use('agg_example');
db.transactions.aggregate([
  {
    {
group: {
      _id: '$bank',
      total: { $sum: '$value' },
      transações: { $sum: 1},
    }
  }
]);

use('agg_example');
db.transactions.aggregate([
  {
    {
group: {
      _id: '$bank',
      total: { $sum: '$value' },
    }
  }
]);

use('agg_example');
db.transactions.aggregate([
  {
match: {
      value: { $gt: 1000 },
    },
  },
  {
group: {
      _id: '$bank',
      total: { $sum: '$value' },
    }
  }
]);

// Operador $lookup

db.clients.aggregate([
  {
lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_history"
    },
  },
]);

db.clients.aggregate([
  {
lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
  {
limit: 4,
  },
]);

db.clients.aggregate([
  {
match: { State: 'Florida' },
  },
  {
lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
]);

db.clientes.aggregate([
  {
match: {
      sexo: "MASCULINO"
    }
  }
]);

db.clientes.aggregate([
  {
match: {
      sexo: "FEMININO",
      dataNascimento: {
gte: ISODate('1995-01-01'),
lte: ISODate('2005-12-31')
      }
    }
  }
]);

db.clientes.aggregate([
  {
match: {
      sexo: "FEMININO",
      dataNascimento: {
gte: ISODate('1995-01-01'),
lte: ISODate('2005-12-31')
      }
    }
  },
  {
limit: 5
  }
]);

db.clientes.aggregate([
  {
match: {
      "endereco.uf": "SC"
    }
  },
  {
group: {
      _id: "SC",
      total: { $sum: 1 }
    }
  }
]);

db.clientes.aggregate([
  {
group: {
      _id: "$sexo",
      total: {
sum: 1
      }
    }
  }
]);

db.clientes.aggregate([
  {
group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: { $sum: 1 }
    }
  }
]);

db.clientes.aggregate([
  {
group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: {
sum: 1
      }
    }
  },
  {
project: {
      _id: 0,
      "estado": "$_id.uf",
      "sexo": "$_id.sexo",
      "total": 1
    }
  }
]);

db.vendas.aggregate([
  {
match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] }
    }
  },
  {
group: {
       _id: "$clienteId",
       valorTotal: {
sum: "$valorTotal"
       }
    }
  },
  {
sort: {
      valorTotal: -1
    }
  },
  {
limit: 5
  }
]);

db.vendas.aggregate([
  {
match: {
      dataVenda: {
gte: ISODate('2019-01-01'),
lte: ISODate('2019-12-31')
      }
    }
  },
  {
group: {
      _id: "$clienteId",
      valorTotal: {
sum: "$valorTotal"
      }
    }
  },
  {
sort: {
      valotTotal: -1
    }
  },
  {
limit: 10
  }
]);

// Utilizando $group e $project :

db.vendas.aggregate([
  {
group: {
      _id: "$clienteId",
      totalCompras: {
sum: 1
      }
    }
  },
  {
match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
group: {
      _id: null,
      clientes: { $sum: 1 }
    }
  },
  { $project: { _id: 0 } }
]);

db.vendas.aggregate([
  {
group: {
      _id: "$clienteId",
      totalCompras: {
sum: 1
      }
    }
  },
  {
match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
count: 'clientes'
  },
]);

db.vendas.aggregate([
  {
match: {
      dataVenda: {
gte: ISODate('2020-01-01'),
lte: ISODate('2020-03-31')
      }
    }
  },
  {
group: {
      _id: "$clienteId",
      totalCompras: {
sum: 1
      }
    }
  },
  {
match: {
      totalCompras: { $lt: 3 }
    }
  },
  {
count: 'clientes'
  }
]);

db.vendas.aggregate([
  {
match: {
      dataVenda: {
gte: ISODate('2020-01-01')
      }
    }
  },
  {
lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
unwind: "$dadosCliente"
  },
  {
group: {
      _id: "$dadosCliente.endereco.uf",
      totalVendas: {
sum: 1
      }
    }
  },
  {
sort: {
      totalVendas: -1
    }
  },
  { $limit: 3 },
  {
project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]);

db.vendas.aggregate([
  {
match: {
      dataVenda: {
gte: ISODate('2019-01-01'),
lte: ISODate('2019-12-31')
      }
    }
  },
  {
lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  {
unwind: "$cliente"
  },
  {
group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  {
project: {
      _id: 0,
      uf: "$_id",
      mediaVendas: 1,
      totalVendas: 1
    }
  },
  {
sort: {
      uf: 1
    }
  }
]);



