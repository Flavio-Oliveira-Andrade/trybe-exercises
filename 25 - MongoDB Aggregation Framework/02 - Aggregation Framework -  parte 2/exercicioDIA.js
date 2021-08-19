use('agg_example');
db.clients.aggregate([
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
match: {
expr: {
eq: ["$from", "$$user_name"],
            }
          }
        }
      ],
      as: "transactions"
    }
  }
]);

use('agg_example');
db.clients.aggregate([
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
match: {
expr: {
eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received_transactions"
    }
  },
  {
sort: { State: 1 }
  },
  {
limit: 4
  }
]);

use('agg_example');
db.clients.aggregate([
  {
match: { State: "Florida" }
  },
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name"},
      pipeline: [
        {
match: {
expr: {
eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received_transactions"
    }
  },
]);

use('storage');
db.products.aggregate([
  {
project: {
      _id: 0, name: 1, total_cost: { $add: ["$taxes", "$purchase_price"] }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      total_profit: {
subtract: [
          "$sale_price",
          { $add: ["$taxes", "$purchase_price"] }
        ]
      }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      floored_price: { $floor: "$sale_price" }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      ceiling_price: { $ceil: "$sale_price" }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      delta: {
abs: {
subtract: [
            "$sale_price",
            { $add: ["$taxes", "$purchase_price"] }
          ]
        }
      }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      total_profit: {
multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      total_profit: {
multiply: [
          {
subtract: [
              "$sale_price",
              { $add: ["$taxes", "$purchase_price"] }
            ]
          },
          "$quantity"
        ]
      }
    }
  }
]);


use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      new_price: {
subtract: [
          "$sale_price", {
multiply: [{ $divide: [50, 100] }, "$sale_price"
            ]
          }
        ]
      }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
addFields: {
      stock_total_value: {
multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);

db.clientes.aggregate([
  {
addFields: {
      idade: {
floor:{
divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  }
]);

db.clientes.aggregate([
  {
addFields: {
      idade: {
floor:{
divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
match: {
      idade: {
gte: 18, $lte: 25
      }
    }
  },
  {
count: 'totalClientes'
  }
]);

db.clientes.aggregate([
  {
addFields: {
      idade: {
floor:{
divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  }
]);

db.clientes.aggregate([
  {
addFields: {
      idade: {
floor:{
divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
match: {
      "compras.dataVenda": {
gte: ISODate('2019-06-01'),
lte: ISODate('2020-03-31')
      }
    }
  }
]);

db.clientes.aggregate([
  {
addFields: {
      idade: {
floor:{
divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
match: {
      "compras.dataVenda": {
gte: ISODate('2019-06-01'),
lte: ISODate('2020-03-31')
      }
    }
  }
]).itcount();

db.clientes.aggregate([
  {
addFields: {
      idade: {
floor:{
divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
match: {
      "compras.dataVenda": {
gte: ISODate('2019-06-01'),
lte: ISODate('2020-03-31')
      }
    }
  },
  {
addFields: {
      totalCompras: {
size: "$compras"
      }
    }
  },
  {
sort: {
      totalCompras: -1
    }
  },
  { $limit: 10 },
  { $unwind: "$compras" },
  {
addFields: {
      "compras.valorComDesconto": {
subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.10] }
        ]
      }
    }
  },
  {
group: {
      _id: "$endereco.uf",
      totalCompras: {
sum: 1
      }
    }
  },
  {
sort: {
      totalCompras: -1
    }
  },
  { $limit: 5 }
]);


db.vendas.aggregate([
  {
match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  { $unwind: "$itens" },
  {
match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
group: {
      _id: "$clienteId",
      totalConsumido: {
sum: "$itens.quantidade"
      }
    }
  },
  {
sort: { totalConsumido: -1 }
  },
  { $limit: 1 },
  {
lookup: { // Seleciona todos os clientes com as suas respectivas transações feitas;
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  { $unwind: "$cliente" },
  {
project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0
    }
  }
]);

db.vendas.aggregate([
  {
match: {
      dataVenda: {
gte: ISODate('2020-03-01'),
lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO"
    }
  },
  {
addFields: {
      dataEntregaPrevista: {
add: ["$dataVenda", 3 * 24 * 60 * 60000]
      }
    }
  },
  {
project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
]);

db.vendas.aggregate([
  {
match: {
      dataVenda: {
gte: ISODate('2020-03-01'),
lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO"
    }
  },
  {
addFields: {
      dataEntregaPrevista: {
add: ["$dataVenda", 3 * 24 * 60 * 60000]
      }
    }
  },
  {
project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  },
  {
group: {
      _id: null,
      maxDataEntrega: {
max: "$dataEntregaPrevista"
      },
      minDataEntrega: {
min: "$dataEntregaPrevista"
      }
    }
  },
  {
project: {
      _id: 0,
      diasDiferenca: {
ceil: {
abs: {
divide: [
              { $subtract: ["$maxDataEntrega", "$minDataEntrega"] },

            ]
          }
        }
      }
    }
  }
]);




