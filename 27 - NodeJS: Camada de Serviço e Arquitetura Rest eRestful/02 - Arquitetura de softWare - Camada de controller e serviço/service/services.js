// todas os Calculos, Validações, regra de negocio. serao feita no service

const modelVoos = require('../models/modelVoos')

const serviceGetAllVoos = async () => {
  const result = await modelVoos.getAll()
  return result;

}

const serviceCreateVoos = async () => {
  const result = await modelVoos.createVoos()
  return result;
}

module.exports = {
  serviceGetAllVoos,
  serviceCreateVoos,
}