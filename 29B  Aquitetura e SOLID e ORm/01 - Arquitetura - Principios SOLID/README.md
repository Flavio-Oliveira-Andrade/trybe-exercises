O que vamopa Aprender?
Hoje vamos começar a aprender sobre os cincos principios que abragem o SOLID
Esses Principios, ou boas praticas, ditam como seu codigo deve ser escrito e como ele deve ser organizado para otimizar manutenção, legibilidade e testabilidade

S  = singou responsabi principo
O  = open/close  principo
L  =
I  =
D  = Dependice inversible principo

## Orientação a Objeto

Você será capaz de:
Escrever funções que tenham uma única responsabilidade no escopo da sua aplicação.
Escrever classes com funções que estão abertas para extensão e fechadas para modificação.
Injetar dependências para dar a quem chama o controle sobre como uma função faz o que precisa.

## Por que isso é importante?

Falar de Solid significa falar de qualidade de codigo. Desde o começo do curso  voce vê que, na Trybe, reforçamos muito

Por que isso é importante?
Falar de SOLID significa falar de qualidade de código . Desde o começo do curso você vê que, na Trybe, reforçamos muito a necessidade de se escrever um bom código. Desde o começo o ESLint está aí para ajudar nisso. A arquitetura SOLID é vastamente usada pelo mundo para criar aplicações de software fáceis de se manter e alterar ao longo do tempo. Embora parte dos princípios seja voltada especificamente para Programação Orientada a Objeto (POO)__, que nem sempre praticamos em JavaScript, parte do que eles propõem é aplicável em qualquer cenário! Sabe quando você lê um código _bonito ? Um código simples, que faz o que precisa, aquele de bater o olho e entender tudo? Muitas vezes nos vem o pensamento de que "eu nunca conseguiria bolar um código assim". Isso é exatamente o que as lições do SOLID nos ajudam a conseguir!
Criar e manter um código de excelência durante todo o processo de desenvolvimento de um produto é o principal objetivo de um desenvolvedor de software que preza pela qualidade no longo prazo . Ao aplicar um bom padrão de design no seu código, você:
Facilita a manutenção do código;
Facilita a escrita de testes;
Melhora a legibilidade e a navegação;
Evita trechos de código muito complexos ou duplicados.
Escrever código complexo é uma tarefa simples, mas escrever código simples é uma tarefa muito complexa. Manter o código simples e limpo, requer muita prática. Como Sandy Metz diz, aplicações bem-sucedidas evoluem e mudam com o tempo sempre. Sem seguir bons princípios, seu código fica uma bagunça e fica impossível "encostar nele" sem alguma coisa parar de funcionar. A arquitetura SOLID existe para que as partes do seu código sejam tão independentes umas das outras quanto possível, para facilitar sua evolução no futuro.
Em outras palavras: qualidade de código é mais do que respeitar o ESLint ! Vamos começar a ver isso aqui e agora! 🚀

# O que exatamente é SOLID?
A palavra solid (sólido) no contexto de programação, é um acrônimo para cinco princípios e que de fato, se aplicados de maneira conjunta e inteligente, geram solidez e durabilidade para sua arquitetura como um todo. Ele é mais focado em programação orientada a objetos (POO) , mas também é aplicável em outros cenários similares. É importante ressaltar, no entanto, que o conceito de SOLID ao pé da letra é bem complicado de ser entendido. Se definirmos todos os princípios como propostos no artigo científico escrito por Robert C. Martin, nos arriscamos a criar mais confusão do que qualquer coisa. Portanto, ensinaremos aqui uma versão de SOLID mais adequada à nossa realidade. Posteriormente no curso, no módulo de Ciência da Computação, vamos estudar SOLID novamente com mais detalhes, então não se preocupe! Dito isso, nas definições originais, SOLID significa o seguinte (se prepare para ter dúvidas):
S ingle responsibility principle ( Princípio da responsabilidade única ): uma classe deve ter apenas uma única responsabilidade;
O pen/Closed principle ( Princípio aberto/fechado ): entidades de software devem ser abertas para extensão, mas fechadas para modificação;
L iskov substitution principle ( Princípio de substituição de Liskov ): objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa;
I nterface segregation principle ( Princípio da segregação da interface ): muitas interfaces de clientes específicas são melhores do que uma para todos os propósitos;
D ependency inversion principle ( Princípio da inversão da dependência ): deve-se depender de abstrações, não de objetos concretos.
Primeiramente, é importante esclarecer que os princípios L e I não serão abordados hoje! Eles funcionam melhor quando aplicados à orientação por objeto, então falaremos mais deles futuramente, no módulo de Ciência da Computação. Os demais nos são úteis mesmo em JavaScript! Primeiramente, vamos traduzir as definições deles para português legível:
S ingle responsibility principle ( Princípio da responsabilidade única ): uma classe ou função deve ter uma, e apenas uma, tarefa a realizar dentro do seu código;
O pen/Closed principle ( Princípio aberto/fechado ): você deve ser capaz de estender um comportamento de uma função sem modificar seus comportamentos já existentes;
L iskov substitution principle ( Princípio de substituição de Liskov ): Não se aplica. Estudaremos este depois!
I nterface segregation principle ( Princípio da segregação da interface ): Não se aplica. Estudaremos este depois!
D ependency inversion principle ( Princípio da inversão da dependência ): quem usa uma função deve ser capaz de determinar quais outros módulos ela usa em sua lógica.
Uma palavra bastante importante e que deve ser ressaltada é a "Princípio" . Isso quer dizer que nada do que está aqui pode ser taxado de sempre bom ou sempre ruim , mas sim como recomendado ou não recomendado . Ou seja, são boas práticas. Existem situações em que pode fazer sentido ignorar um desses princípios. Por isso, não seja radical. Sempre reflita sobre o porquê de estar usando/fazendo algo. Nunca se esqueça: ao escrever um código, o objetivo é torná-lo fácil de ser entendido e fácil de ser mantido . Regra nenhuma, princípio nenhum e caso especial nenhum deve piorar a legibilidade do seu código.
Dito isso, princípios como o SOLID e regras como as do ESLint geralmente vêm para o bem. Escrever código realmente bom é difícil! Seguir as regras, e confiar nelas, nos coloca num caminho que, quando concluído, vai nos dar um bom código! O objetivo da aula de hoje é entender como isso acontece e por quê.
Não se preocupe se não tiver entendido os princípios ainda. A seguir vamos nos aprofundar com mais detalhes em cada um deles.

# Single responsibility principle

Há uma regra do ESLint (Provida pelo plugin sonarjs ) que certamente já te assombrou no passado: a regra de Complexidade Cognitiva ( sonarjs/cognitive-complexity ) . Em poucas palavras, essa regra, como outras em conjunto ( Complexidade Ciclomática , Número máximo de linhas por função Número máximo de caracteres por linha , entre outros) garante que nenhuma de suas funções é complicada demais. Se ela é muito grande e/ou muito confusa, a regra te alerta para que deixe seu código menor e mais simples.
Mas muitas vezes isso é meio desafiador, certo? "Como raios eu deixo essa função do tamanho que se pede?!". Uma forma de se orientar a fazer isso é justamente o princípio da responsabilidade única .

// ./tests/unit/getLetterGrades.test.js

const { expect } = require('chai');

const { getLetterGrades } = require('../../index');

const disciplinesDict = {
  mathematics: 'matemática',
};

describe('Testando a função "getLetterGrades"', function () {
  describe('quando a nota é maior ou igual a 0.9', function () {
    it('retorna "A"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.9 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('A');
    });
  });

  describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', function () {
    it('retorna "B"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.8 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('B');
    });
  });

  describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', function () {
    it('retorna "C"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.7 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('C');
    });
  });

  describe('quando a nota é maior ou igual a 0.6 e menor que 0.7', function () {
    it('retorna "D"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.6 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('D');
    });
  });

  describe('quando a nota é maior ou igual a 0.1 e menor que 0.6', function () {
    it('retorna "E"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.1 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('E');
    });
  });

  describe('quando a nota é menor que 0.1', function () {
    it('retorna "F"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.05 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('F');
    });
  });
});

## Open/close principle
Imagine, para o nosso exemplo, o seguinte cenário: somos uma empresa que administra notas de escolas. Cada escola tem seu corte aprovação ( no nosso caso, 0,7). Otimo Fizemos nosso produto, ele funcionou,e agora uma segunda escola quer ser nossa cliente! Mas o corte de aprovação dela é 0,8. Precisamos que nosso sistema contemple essa nova realidade Aí fazemos assim:

// ./index.js

// ...

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
  school});

/* "Determinar" */
const approvedStudents = ({ school, disciplines }) =>
  disciplines.every(({ grade }) =>
    (school === 'Standard' ? grade >= 0.7 : grade >= 0.8));

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

// ...

/* Abaixo temos o exemplo de execução com algumas adições */
const students = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: 'Hogwarts',
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

// setApproved(students);

Essa Solução funciona, mas não esta boa! Nós tivemos que mudar nossa função para acrescentar o novo comportamento a ela! O que acontecerá quando surgi uma terceira escola? Talvez uma quarta, quinta e assim por diante.

Pois bem! Comforma estabelecemos no inicio, o que esse principio nos diz é o seguinte:
  Você deve ser capaz de entender um compoirtamento de uma função sem modificar seus comportamentos ja existentes.

Beleza, mas o que isso significa? Significa que, caso você precise acrescentar um comportamento ao seu código e isso não for possivel sem mudar trechos de codigos que ja existam, temos um problema. veja bem: quando um codigo funciona e esta em produção numa aplicação enorme, queremos evitar mudaro que ja existe e funciona.

Mas todo código precisa ser atualizado com o tempo. Cmomo podemos , então atualizar o nosso codigo sem alterar o que ja existe ? O que se deve ser buscar fazer  é escrever o çodigo de modo que, no futuro, você , você poissa  acrescentar comportamento sem mudar os que ja existem.

No nosso caso, seria ser capaz de aobter o corte de aprovação os nomes conceitos de quaisquer escolas sem alterar a lógica da nossa aplicação! isso requer que refatoremos o nosso código para deixa-lo aberto para extensões, mamtendo-o fechado para modificações

// ./index.js

/* Apoio para a função `setApproved` */
const SCHOOL_DATA = {
  Standard: {
    approvalGrade: 0.7
  },
  Hogwarts: {
    approvalGrade: 0.8
  }
};

// ...

/* "Determinar" */
const approvedStudents = (disciplines, { approvalGrade }) =>
  disciplines.every(({ grade }) => grade > approvalGrade);

// ...

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(({ disciplines, school }) => approvedStudents(disciplines, SCHOOL_DATA[school]))
    .map(updateApprovalData);
}


Observe que, agora, a nossa função approvedStudents está totalmente genérica . Quando quisermos acrescentar mais uma escola, ou duas, ou cem, basta adicionar os dados dela à nossa "base". Aqui, simulamos com o objeto SCHOOL_DATA , assim como o fizemos com o objeto GRADE_DICT , onde também estávamos com um problema com o "engessamento" da função getGradeLetter . Conseguiremos, assim, estender o nosso comportamento sem modificar a função mais. Agora ela respeita o Open/Closed !
Nossos testes também ficarão muito mais legíveis e genéricos quanto ao critério de aprovação:

// ./tests/unit/approvedStudents.test.js

const { expect } = require('chai');

const { approvedStudents } = require('../../index');

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testando a função "approvedStudents"', function () {
  const APPROVAL_GRADE = { approvalGrade: 0.7 };

  describe('quando todas as notas são maiores que o critério de aprovação', function () {
    it('retorna "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(true);
    });
  });

  describe('quando todas as notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(false);
    });
  });

  describe('quando parte das notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(false);
    });
  });
});

Dessa forma, no momento em que você está escrevendo uma função para resolver um problema, é importante se perguntar se é possível que, futuramente, essa função seja usada para resolver outros problemas similares ao atual. Se sim, se esforce para deixá-la aberta a extensões para poder mantê-la fechada a modificações . Como em qualquer princípio, não há necessidade de radicalismo aqui: se uma função não deve ser usada em outros contextos, ela não precisa estar aberta a extensão. Se no futuro isso mudar, você faz uma refatoração. Mas pense com cuidado! A função deixada aberta hoje é uma refatoração a menos para amanhã!

# Dependency Inversion Principle

Aqui não necessitaremos de nenhum arquivo das seções anteriores.

Para este exemplo iremos usar novas dependências, execute o seguinte comando para adicionar os pacotes:npm
## install node-fetch@2.6.5 axios

Suponha que você quer escrever um programa em JavaScript que faz uma requisição para a API de dad jokes . Assim sendo, você escreve o seguinte código:

Copiar
// ./dipExample.js

const fetch = require('node-fetch');

const url = 'https://icanhazdadjoke.com';

const requestWithFetch = () => {
  fetch(url, {
    headers: new fetch.Headers({
      Accept: 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((err) => console.log(err));
};

const getJokes = (numberOfJokes) => {
  for (let i = 0; i < numberOfJokes; i += 1) requestWithFetch();
};

getJokes(5);

module.exports = { getJokes };
Problema resolvido! Mas agora vamos pensar na questão que está nos acompanhando por todo o dia de hoje: como podemos reusar esse código no futuro para outros contextos sem alterar o código que já existe? Olhe para esse nosso exemplo: aí, estamos usando o fetch para fazer uma requisição à API. A função depende do fetch para funcionar. O fetch , portanto, é uma dependência da função! E o que seria, então, a inversão de dependência? Conforme foi dito lá em cima
Quem usa uma função deve ser capaz de determinar quais outros módulos ela usa em sua lógica.
Em outras palavras, "quem usa decide como se usa". Como assim? Imagine que, no futuro, decide-se abolir o uso de fetch no seu projeto em favor do axios . Não queremos alterar o nosso código antigo (vai que ele quebra 😬), mas código novo deve vir com a API nova.
Só que nós queremos usar a nossa função getJokes numa funcionalidade nova que estamos fazendo, mas sem utilizar o fetch ! Como fazemos? Assim:
Copiar
// ./dipExample.js

const axios = require('axios').default;
const fetch = require('node-fetch');

const url = 'https://icanhazdadjoke.com';

const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data));
};

// const requestWithFetch = () => {
// ...

const getJokes = (numberOfJokes, jokeRequester = requestWithFetch) => {
  for (let i = 0; i < numberOfJokes; i += 1) jokeRequester();
};

getJokes(5, requestWithAxios);

module.exports = { getJokes };
Repare que, agora, quem chama a função decide qual dependência a função terá , seja o Axios ou o Fetch. E ao colocarmos a requestWithFetch como valor padrão para o parâmetro que acrescentamos à função, garantimos que, em todos os lugares onde essa função já era usada, tudo continuará funcionando.
Isso que fizemos foi a chamada inversão de dependência . Quem usa decide qual dependência a função terá.
Mais uma vez olhando pela perspectiva de testes, conseguimos perceber uma grande melhoria na testabilidade aplicando inversão de dependência . Podemos escrever testes para a função da seguinte maneira:
Copiar
// ./tests/unit/getJokes.test.js

const { stub } = require('sinon');
const { expect } = require('chai');

const { getJokes } = require('../../dipExample');

const requesterStub = stub();

describe('Testando a função "getJokes"', function () {
  it('"requester stub" é chamado uma vez', function () {
    getJokes(1, requesterStub);

    expect(requesterStub.calledOnce).to.be.equals(true);
  });
});
Rode com NAME=getJokes npm test para validar seu teste.
Perceba que como a função responsável por realizar a chamada é passada via parâmetro, podemos facilmente criar um stub e passá-lo. Sem a inversão, teríamos que criar um stub de acordo com a implementação do jokeRequester , tendo que entender a lógica do código para encontrar qual a função seria utilizada (a com axios ou com fetch ) e então interceptar tal chamada para conseguir fazer o stub .
Além disso, se for adicionado um novo jokeRequester ou alterado qual deles seria chamado, nosso teste não precisará ser alterado.
Outro ponto é que conseguimos testar de maneira unitária cada implementação de jokeRequester , com fetch , com axios ou qualquer outra implementação. No nosso exemplo tais implementações são chamadas simples de API, mas é muito comum situações em que tais dependências possuem diversas lógicas internas e comportamentos, onde esse princípio ajudará muito.
Agora veremos na prática como funcionam os 3 princípios que vimos até o momento.

## Conclusão
hoje Nós começamos a entender três dos cincos principios de qualidade de codigos do SOLID: o principio da responsabilidade ùnica, o princio aberto fechado e o principio da inversão de responsabilidade de dependência. È muito importante ficar claro: esses principios São complexos no seu entendimento e na sua aplicação, e nós hoje śo começamos a arranhar as possibilidades que eles nos têm a oferecer!

No modulo de Ciências da Computação, no contexto de programação Orientada a Objeto, estudaremos o SOLID com mais profundidade. Por Hora tenha esse entendimento parcial em mente e busque sempre recorrer aos principios quando escrever códigos. Acione-os, pergunte-se o seu codigo o segue. Acredite nos principios e implemente-os passo a passo. no final, você tera feito a dificil tarefa de escrever um código simples de ser entender e se estender.