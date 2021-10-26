const express = require('express');
const {Address, Employee} = require('./models');
const { Book, User } =  require('./models')

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: {model: Address, as: 'addresses'},
    });
    return res.status(200).json({employees})
  } catch (error) {
    console.error(error);
    res.status(500).json({message: error})
  }
})

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where :{ id },
      include:[{model: Address, as: 'addresses'}],
      // model: Address, as: 'addresses', attributes: { exclude: ['number'] }, excluir campo
    });
    if(!employee){
      return res.status(400).json({message: error});
    }
    return res.status(200).json({employee})

  } catch (error) {
    console.log(error);
    return res.status(500).json({message: error})
  }
})

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where:{ userId: id },
      include: [{ model: Book, as: 'books', through:{ attributes:[]}}],
    })

    if (!user){
      return res.status(404).json({message: 'Usuario nao encontrado'});
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'algo deu errado'})
  };
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('listening on port',PORT))

module.exports = app;