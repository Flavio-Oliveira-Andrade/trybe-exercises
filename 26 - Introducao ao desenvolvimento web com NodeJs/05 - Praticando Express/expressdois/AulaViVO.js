/* conceitos de Middlewares

o que vamos aprender
Melhorar a qualidasde do nosso codigo
para que serve o Middlewares
Como Usar
Middlewarer de error
organizando casa com o Routers

fazendo validações com middleware
validar tokem next(), validar parans next(), insertBooks


tratar erros erros
podemos estalar a biblioteca rescue    npm install express-rescue

Rotas no express

clientesRouter.js,
booksRouter.js,
storeRouters.js

extrutura de uma requisiçao  HTTP.

Requst URl  endereço
HTTP Method. metodo Get Post Put Delete
Request Headers. cabeçalho
Request Body. corpo

*/
app.use(bodyParser.json());

// sempre que eu chamar next(error) e passar um paramento eu serei passado para o middleware de error
app.use((error, req, res, next) => {
  return res.status(500).json({ message:"Erro desconhecido"})
})

app.post('/', (req, res)=>{
  const {token} = req.headers.authorization;
  const { id, title, author}= req.body
  books.push({id,title, author});

  return res.status(201).json({messahe: "book created!"})

})

// usando o rescue
app.get('/lerArquivo', rescue(async (req, res, nest)=>{
  const { filename } = req.query

  const content = await fs.readFile(filename, 'utf8');
  res.status(200).json({content: content.toString()})
}))
