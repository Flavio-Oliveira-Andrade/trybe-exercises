instalando o nodemon
### sudo install nodemon -G

### npm install express
## https://www.npmjs.com/package/express

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));

npm init --
Assincronismo