const User = require('models/user')
const jwt = require('jsonwebtoken')

const secretJWT = "SECRET8sdewd876565%$&%$&&$#&*("

const jwtConfig = {
  expiresIn:'1h',
  algorithm:'HS256',
}

const userBD ={
  id:'user._id',
  username: user.username
}

const loginUser = async (req, res) => {
  try {
    const userName = req.body.user;
    const passWord = req.body.passWord;

    if(!userName || !passWord) {
      return res.status(401).json({message: "é necessario uma senha e um usuario"})
    }
    const user = await User.findOne(userName)

    if (!user || user.password === password) {
      return res.status(401).json({message:"senha ou user invalidos"})
    }

    // create token
    const token = jwt.sign({ data: userBD },secretJWT,jwtConfig)


    return res.status(200).json(token);

  } catch (error) {
    return res.status(500).json({message: "erro interno", error: error})
  }
};

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token){
    res.status(401).json({message: "Token nao informado"})
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET)
    next();

  } catch (error) {
    res.status(401).json({message:"Erro seu token é invalido  "})
  }
}

module.exports = loginUser