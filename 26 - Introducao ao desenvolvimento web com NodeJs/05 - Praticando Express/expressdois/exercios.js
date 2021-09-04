// middlewares/validations.js
const isValidUsername = (req, res, next) => {
  const { username } = req.body;

  if(!username || username.length < 3)
    return res.status(400).json({ message: 'invalid data' });

    next();
  };

  const isValidEmail = (req, res, next) => {
    const { email } = req.body

    if(
      !email ||
      !email.includes('@') ||
      !email.includes('.com')
    )
      return res.status(400).json({ message: 'invalid data' });

    next();
  };

  const isValidPassword = (req, res, next) => {
    const { password } = req.body;
    const passwordRegex = /^[0-9]*$/;

    if(
      password.length < 3 ||
      password.length > 8 ||
      !password.match(passwordRegex)
    )
      return res.status(400).json({ message: 'invalid data' });

    next();
  };

  module.exports = {
    isValidUsername,
    isValidEmail,
    isValidPassword,
  };


  // routers/userRouter.js
const router = require('express').Router();
const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} = require('../middlewares/validations');

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(201).json({ message: 'user created' }),
);

router.post(
  '/login',
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(200).json({ token: '86567349784e' })
);

module.exports = router;

// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/userRouter');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));

// middlewares/validations.js

const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;

  if (!token || tokenRegex.test(token))
    return res.status(401).json({ message: 'invalid token' });

    next();
  };

  module.exports = { isValidToken };


  // index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { isValidToken } = require('./middleware/validation');
const PORT = 3000;
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get(
  '/btc',
  isValidToken,
  async (_req, res) => {
    const result = await axios.get(ENDPOINTEXTERNALAPI);

    res.status(200).json(result.data);
  }
);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));

// middlewares/routerNotFound.js

const routerNotFound = (err, _req, res, _next) =>
  res.status(err.statusCode).json({ message: err.message })

module.exports = { routerNotFound };

// routers/postRouter.js

const router = require('express').Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

router.get('/', (_req, res) => res.status(200).json({ posts }));

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
    const post = posts.find((item) => item.id === parseInt(id));

    if (!post)
    return next({ statusCode: 404, message: 'post not found' });

    res.status(200).json(post);
});

module.exports = router;


// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRouter = require('./routers/postRouter');
const errors = require('./middlewares/routerNotFound');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));






// middlewares/validations.js
const isValid = (req, res, next) => {
  const { name, initials, country } = req.body;

  if(
    !name || name.length < 5 ||
    !initials || initials.length > 3 ||
    !country || country.length < 3
  )
    return res.status(400).json({ message: 'invalid data' });

  next();
};

module.exports = { isValid };


// routers/teamRouter.js

const router = require('express').Router();
const {
    readContentFile,
  writeContentFile,
} = require('../helpers/readWriteFile');
const validations = require('../middlewares/validations');
const PATH_FILE = './teams.json';

router.get('/', async(_req, res) => {
    const teams = await readContentFile(PATH_FILE) || [];

    res.status(200).json({ teams });
});

router.post('/', validations.isValid, async(req, res,) => {
    const newTeam = {
        ...req.body,
        initials: req.body.initials.toUpperCase(),
    };
    const team = await writeContentFile(PATH_FILE, newTeam);

    res.status(200).json(team);
});

module.exports = router;


// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teamRouter = require('./routers/teamRouter');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));