const express = require('express');
const {Address, Employee} = require('./models');

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('listening on port',PORT))

module.exports = app;