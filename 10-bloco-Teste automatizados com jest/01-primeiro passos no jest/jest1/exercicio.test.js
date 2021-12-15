const sum = require("./exercicio")

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

// 1a A função .toBe(valor) testa se o valor passado é idêntico ao esperado em valor e tipo .
test("resultados devem ser idênticos",() => {
  let geladeira = produto.findGeladeiraById(12)
  expect(geladeira.modelo).toBe('Eletrolux')
})

// 1b A FUNÇÃO toEqual(value)  testa  recusivamente cada valor do objeto ou Array
test("resultado devem possuir os mesmo atributos",() => {
  let geladeira = produto.findGeladeirabyId(12)
  expect(geladeira).toEqual({preco: 1249.99, ano: 2021, modelo: 'Eletrolux'})
})

// 1c Para cada matcher de comparação  é possivel usar o  .not  para fazer uma comparação oposta.
test('o resultado nao deve possuir os mesmo atributos', () => {
  let geladeira = produto.findGeladeiraById(12)
  expect(geladeira).not.toEqual({preco: 1249.99, ano: 2021, modelo: 'Brastemp'})
})

// 2a a função toBenull() testa o resultado te valor igual a  null.
let id = "56e6dd2eb4494ed008d595bd"
test('resultado precisa se null',() => {
  expect(UserModel.findById(id, user => user.toObject() )).toBeNull()
})

// 2b a função toBeUndefined()  testa se o resultado passado tem valor igual a  undefined. ===
test('resultado precisa ser undefined', () => {
  expect(UserModel.findById(id, user => user.toObject() )).toBeUndefined()
})

// 2c a função toBeDefined() testa se o resultado nao tem valor undefined
test('resultado nao pode ser undefined', () => {
  expect(UserModel.findById(id, user => user.toObject() )).toBeDefined()
})

// 2d a função toBytruthy() testa se o resultado passado tem valor que pode ser passado como true em um if()
test('resultado precisa ser true', () => {
  expect(UserModel.findById(id, user => user.toObject() )).toBeTruthy()
})

// 2e a função toBeFalsy() testa se o resultado passado ,tem valor que pode ser  passado como false em um if()
test('resultado precisa ser false', () => {
  expect(UserModel.findById(id, user => user.toObject() )).toBefalsy()
})

// 3a Matchers usados para fazer  comparação numericas,
// a função toBeGreaterThan() testa se o resultado passado é maior que o esperado
test('Dolar deve ser maior que o Real', () => {
  expect(moedas.getDolar()).toBeGreaterthan(moedas.getReal())
})

// 3b A função toBeGreaterThanOrEqual testa se o resultado passado é maior ou igual ao esperado.
test('salario deve ser maior ou igual ao salario minimo', () =>{
  expect(funcionario.getSalario()).toBeGreaterthanOrEqual(api.salariominimo())
})

// 3c a função toBeLessThan() testa se o resultado passado é menor que o esperado.
tes('peso deve ser menor que libra', () => {
  expect(moedas.getPeso()).toBeLessThan(moedas.getLibra())
})

// 3d A função toBeLessThanOrEqual()  testa se o resultado passado é menor ou igual ao esperado
test('salario de nao comissionado deve ser menor ou  igual ao salario de comissionado', () => {
  expect(naoComissionado.getSalario()).toBeLessThanOrEqual(comissionado.getSario())
})

// Nota os matchers toBe() e toEqual sao usados para testar equidade numérica
// 4 É possivel verificar se uma  certa string esta dentro de uma expresão maior com o comando toMatch()
test('uma palavra dentro de outra', () => {
  expect('Inconstitucionalissimamente').toMatch(/constitucional/)
})

// 5 É possivel verificar se um array possui um elemento em especifico com toContain()
const verbosHttp = [
  'GET',
  'POST',
  'PUT',
  'DELETE'
]
test('o verbo PUT esta na lista', () => {
  expect(verboHttp).toContain('PUT')
})



// 6a Para testar se uma função em particular gera uma exceção, basta usar toThrow()
function conectaBancoDeDados(){
  throw new Error('Não foi possível conectar ao banco de dados')
}

test('conexão com o banco de dados falha como esperado' ,()=>{
  expect(conectaBancoDeDados).toThrow(Error)
})

// 6b Tambem é possivel verificar a mensagem  de erro, como demostrado abaixo.
function conectaBancoDeDados(){
  throw new Error('Não foi possível conectar ao banco de dados')
}

test('conexão com o banco de dados falha como esperado' ,()=>{
  expect(conectaBancoDeDados).toThrow('Não foi possível conectar ao banco de dados')
  expect(conectaBancoDeDados).toThrow(/dados/)
})

// Funções Mock()
// São funções que permitem criar modulos e funções FALSA, para simular uma depedencia
// Elas facilitam testar as ligações no codigo por subistuir uma depedencia  cuja a
// implementação seria inviavel dentro do teste.

// Funções mock são criadas a partir da
// função jest.fn()
//e podem ser configuradas para reproduzir o comportamento desejado.

/*
Exemplo 1
Para ilustrar uma função mock vamos tomar de exemplo
a função pagamentoMoedaEstrangeira que converte o valor da moeda de real
para a desejada de acordo com o valor atualizado
provido em uma API que é injetada na função,
a API retorna o valor da moeda em relação ao real de acordo com o parâmetro passado:
*/

function pagamentoMoedaEstrangeira (tipoMoeda, valor, currency) {
  if (tipoMoeda === Currency.QUOTACAO_DOLAR) {
    valor *= currency.getQuotacaoDolar()
  } else if (tipoMoeda === Currency.QUOTACAO_EURO) {
    valor *= currency.getQuotacaoEuro()
  } else if (tipoMoeda === Currency.QUOTACAO_LIBRA) {
    valor *= currency.getQuotacaoLibra()
  } else {
    throw Error('moeda não disponível')
  }
  return valor
}

// module.exports = { pagamentoMoedaEstrangeira }

const { pagamentoMoedaEstrangeira } = require('../src/operacoes.js')

const mockCurrency = {}
mockCurrency.getQuotacaoDolar = jest.fn()
mockCurrency.getQuotacaoDolar.mockReturnValue(3)

test('chamar getQuotacaoDolar uma vez', () => {
  expect(pagamentoMoedaEstrangeira('dolar', 300, mockCurrency)).toBe(900)
})

// Linha 3: Criamos o objeto que irá portar a função mock a ser criada.
// Linha 4: É criada efetivamente a função mock que ira ser usada dentro do teste.
// Linha 5: Definido o valor de retorno que a função getQuotacaoDolar irá retornar quando for chamada, no caso 3

est('chamar getCurrency uma vez', () => {
  expect(pagamentoMoedaEstrangeira('dolar', 300, mockCurrency)).toBe(900)
  // verifica se a função foi chamada 1 vez
  expect(mockCurrency.getCurrency.mock.calls.length).toBe(1)

  // verifica se o primeiro argumento passado na primeira chamada foi zero
  expect(mockCurrency.getCurrency.mock.calls[0][0]).toBe(0)

  // verifica se o resultado da primeira chamada foi 3
  expect(mockCurrency.getCurrency.mock.results[0].value).toBe(3)
})

// A propriedade .mock também registra o valor de this para cada chamada.

// A propriedade .calls de .mock possui uma matriz com as informações de quantas vezes o mock foi chamado e quais atributos foram passados em cada chamada.

// Linha 4: ilustra como é possível saber quantas vezes a função foi chamada pelo tamanho de calls.

expect(mockCurrency.getCurrency.mock.calls.length).toBe(1)

// podemos verificar qual atributo foi passado em uma chamada específica
// de acordo com a posição passada na matriz.

expect(mockCurrency.getCurrency.mock.calls[0][0]).toBe(0)

// podemos certificar qual foi o retorno da função mock.

expect(mockCurrency.getCurrency.mock.results[0].value).toBe(3)

funcaoMock.mock.calls[call][arg]

//Onde call é a vez em que a função foi chamada e arg é o parâmetro que foi passado naquela chamada.


// Exemplo 3
// Funções mock podem ser configuradas para injetar valores de teste
// dentro do código sendo executado durante o teste:

const falso = jest.fn()

falso
  .mockReturnValueOnce('primeiro')
  .mockReturnValueOnce('segundo')
  .mockReturnValue('mais de uma vez')

console.log(falso(), falso(), falso(), falso())

/*
// > 'primeiro', 'segundo', 'mais de uma vez', 'mais de uma vez'
Os valores de retorno de uma função mock são definidos pelos métodos
.mockReturnValue() e .mockReturnValueOnce(),
com a diferença que o segundo retorno só será chamado uma vez.
Métodos de retorno de valor irão seguir em execução a ordem com a qual foram declaradas.
Linha 1: Criando o Mock
Linha 4: Definindo o valor que falso irá retornar quando for executado na primeira vez
Linha 5: Definindo o valor que falso irá retornar quando for executado na segunda vez
Linha 6: Definindo o valor de retorno que falso irá retornar todas as outras vezes em que
for chamado
Exemplo 4
Em certas situações é necessário passar um módulo como dependência
para uma função sendo testada mas não queremos que ela de fato execute essa dependência
toda vez que o teste for feito, como no caso de testar uma função que
interage com uma API por exemplo.

Nestes casos é possível criar um módulo mock bem como definir resultados para
funções desse módulo. A sintaxe para mockar um módulo e definir uma função com retorno é:
*/
// const { modulo } = require('arquivo')

jest.mock('modulo')

//modulo.funcao.mockResolvedValue("qualquer tipo de retorno")
//Abaixo vemos um exemplo com uma função de busca de usuário enviando um id
//para uma API e retorna o usuário encontrado:

// const { api } = require('../helpers/usuarioAPI')
const buscarUsuario = id => api.encontrarPorId(id).then(resp => resp.data)

const usuarioRepository = {
  buscarUsuario: buscarUsuario
  // ... outras funções
}
/*
//module.exports = { usuarioRepository }
Para testar esse método sem contatar diretamente a API
(e portanto evitando um teste com uma dependência externa)
usamos a função jest.mock() para automaticamente mockar o módulo
usuarioRepository.

Em seguida declaramos um mockResolvedValue na função encontrarPorId
para que retorne sempre o mesmo valor quando for executada pela função
que estamos testando, nesse caso a função buscarUsuario:

const { api } = require('../helpers/usuarioAPI')
const { usuarioRepository } = require('../src/usuarioRepository')

jest.mock('../helpers/usuarioAPI')
*/

test('qualquer coisa', () => {
  const resposta = {data: {id: 1, nome: 'José', idade: 42}}
  api.encontrarPorId.mockResolvedValue(resposta)
  usuarioRepository.buscarUsuario(12).then(
    usuario => expect(usuario).toEqual(resposta.data)
  )
})
/*
Na Linha 1 requirimos o módulo usuarioAPI para a constante api. Na Linha
4 definimos que este módulo será substituído por um mock quando implementado dentro
do contexto de teste. Na Linha 8 definimos um valor de retorno para quando
entrarPorId resolver.

Exemplo 5
Existem casos em que é necessário ir além de especificar valores de retorno,
sendo preciso substituir completamente a implementação da função mock. Isso pode
se feito através de jest.fn:
*/

UserModel.createUser = jest.fn( parametros => {
  console.log('um mock substituiu uma implementacao')
  return parametros
})
/*
Com isso podemos simular comportamentos complexos de
uma dependência e realizar testes outrora inviáveis.

Outra forma de fazer mockar uma implementação é através
do método mockImplementation em uma função mock:
*/
UserModel.createUser.mockImplementacion( parametros => {
  console.log('um mock substituiu uma implementacao')
  return parametros
})
//Caso seja necessário recriar uma função sendo chamada múltiplas
//vezes e produzir resultados diferentes, use mockImplementationOnce:

const UserModelCreateUser = jest
  .fn()
  .mockImplementationOnce(param => param)
  .mockImplementationOnce(param => {})
/*
Testes de Código Assíncrono
Quando há código rodando de forma assíncrona dentro de um teste,
o Jest precisa saber quando o código termina de ser testado antes de
poder começar o próximo teste. Jest possui diversas formas de fazer isso.

Visão geral
Por padrão os testes em Jest completam assim que chegam ao
fim de sua execução, ou seja, se uma função chamar uma callback,
o teste completará ao fim da execução de dita função, antes mesmo
de chamar a callback.

O exemplo abaixo não funcionará:
*/
function buscarResultado (param) {
      return param('resultado')
    }

    test('callback da forma errada', () => {
      const callback = (dados) => {
        expect(dados).toBe('resultado')
      }

      buscarResultado(callback)
    })
/*
Para garantir que o teste seja feito de forma adequada basta passar done como argumento
da callback ao invés de passar uma função com argumento vazio.
Jest aguardará até que done seja chamado antes do fim de concluir o teste.

Abaixo a forma correta de testar callbacks:
*/
function buscarResultado (param) {
      return param('resultado')
    }

    test('callback da forma certa', done => {
      const callback = (dados) => {
        expect(dados).toBe('resultado')
        done()
      }

      buscarResultado(callback)
    })
/*
O código acima é praticamente idêntico ao anterior exceto na Linha 5
onde é passado done como parâmetro e na Linha 8 com sua chamada.

Na prática
Exemplo 1
Caso seu código possua promises, há uma forma mais simples de
manejar testes assíncronos. Basta retornar uma promise de seu teste
e o Jest irá aguardar que essa promise resolva. Caso a promise seja
rejeitada o teste falhará.

Por exemplo, a função lerArquivo importa a função readFile e
a transforma em uma promise após uma rápida validação:
*/
const { readFile } = require('fs')
    const { promisify } = require('util')

    function lerArquivo (path, options = {}) {
      if (!path || typeof path !== 'string') {
        return Promise.reject(new Error('path is incorrect or not defined'))
      }

      return promisify(readFile)(path, options)
    }

/*   module.exports = { lerArquivo }

Para testá-la criamos um pequeno index.html
dentro da pasta files apenas com
"hello world" escrito. Criamos o teste para a função lerArquivo
e implementamos um segundo .then com o nosso expect:

const { lerArquivo } = require('../helpers/arquivosManager')
*/
    test('testando leitura de arquivo', () => {
      lerArquivo('./files/index.html')
        .then(buffer => buffer.toString('utf8'))
        .then(conteudo => expect(conteudo).toBe('hello world\n'))
    })
/*
Na Linha 5 é feita a chamada da promise lerArquivo, na Linha 6 é feito a
conversão do resultado da promise para UTF-8 e na Linha 7 o teste é feito
com o resultado dessa conversão, que deve ser igual a 'hello world\n'.

Exemplo 2
Também é possível usar o matcher .resolves e o Jest irá esperar
que a promise resolva. Se a promise for rejeitada o teste falhará.

const { lerArquivo } = require('../helpers/arquivosManager')
*/
    test('lendo arquivo', () => {
      expect(lerArquivo('./files/index.html')
        .then(buffer => buffer.toString('utf8')))
        .resolves.toEqual('hello world\n')
    })
/*
Observe na Linha 5 que neste exemplo a promise é feita dentro do expect ao contrário
do que foi feito no exemplo anterior. Na Linha 7 indicamos ao jest que a promise ira
retornar 'hello world\n' quando resolver

Exemplo 5
Caso o esperado seja que a promise seja rejeitada basta usar o matcher
.rejects. De forma análoga ao .resolves, se a promise resolver o teste falhará
*/
const { lerArquivo } = require('../helpers/arquivosManager')

    test('lendo arquivo', () => {
      expect(lerArquivo('')).rejects.toBeDefined()
    })
