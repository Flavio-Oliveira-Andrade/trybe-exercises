const Model = require('../models/Model');

const createUser = async(req, res) => {
  try {
    const userName = await Model.registerUser(
      req.body.userName,
      req.body.password,
    );
    if (!userName) throw  Error;

    res.status(201).json({ message: "Novo ususrio criado com sucesso"})


  } catch (error) {
    res.status(500).json({ message:"Erro ao salvar o ussuario no banco de dados"})
  }
}



module.exports = createUser;