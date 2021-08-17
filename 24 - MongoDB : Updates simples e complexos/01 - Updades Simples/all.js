use('dataFlights')
db.voos.updateOne(
  {
    "empresa.nome": "AZUL",
    _id: 744454,
  },
  {$push:{ }}

)