const valid =(req, res, next) => {
  const {username, email, password} = req.body
  const pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

  if(!username || username.length <= 3
     || !email || !email.match(pattern)
     || !password || (password.length< 4 || password.length > 8)){
    return res.status(400).json({message: 'Invalid data'})
  }
  next();
};


module.exports = {
  valid
}