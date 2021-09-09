// Busca todos os voos do banco.
// a unica parte que deve saber sobre o req e o res é o controller
const serviceVoos = require('../service/services')

const getAllVoos = async (_req, res) => {
  try {
    const voos = await serviceVoos.serviceGetAllVoos()
    return res.status(200).json(voos)
  } catch (error) {
    return res.status(500).json({ message: "Ops, algo deu errado "})
  }
}
// ...

const controllerCreateVoos = async (req, res) => {
  try {
    const { name, content } = req.body
    const result = await service.serviceCreateVoos({ name, content })
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: "Ops, algo deu errado "})
  }
}

const controllerupdateVoos = async (req, res) => {
  try {
    const { name, content } = req.body
    const { id } = req.params;
    const result = await service.update({id, name, content})

      if(!result)
        return res.status(400).json({ message: "Nao foi possivel..."})

      return res.status(204).json({ message: "atualizado" })

  } catch (error) {
    return res.status(500).json({ message: "Ops, algo deu errado "})
  }
}

const controllerDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await service.exclude(id)

      if(!result)
        return res.status(400).json({ message: "Nao foi possivel..."})

      return res.status(204).json({ message: "excluido" })

  } catch (error) {
    return res.status(500).json({ message: "Ops, algo deu errado "})
  }
}

module.exports = {getAllVoos,}