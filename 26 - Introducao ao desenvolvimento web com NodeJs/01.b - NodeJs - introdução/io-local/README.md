### lENDO ARQUIVOS COM metodos sincronos

Agora que entendemos como funcionam callbacks e promises, vamos nos aprofundar um pouco mais no módulo fs do node e na leitura e escrita de arquivos.
Primeiro, é importante saber que não precisamos ler arquivos "em segundo plano". Podemos fazer isso de forma síncrona, ou seja: parar a execução de todo o programa até que um arquivo seja lido.
Os métodos assíncronos não esperam o comando atual terminar para iniciar o próximo. Se quisermos ler um arquivo de maneira assíncrona, o Javascript não vai esperar o arquivo inteiro ser lido para só então dar continuidade ao script. Se quisermos esse comportamento, precisamos de um método síncrono . O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync . Vamos utilizá-lo no exemplo a seguir.
Para começar, vamos criar uma pasta para nosso projeto, chamada io-local . Iniciaremos nosso projeto Node.js usando o comando npm init . Feito isso, vamos criar um arquivo chamado readFileSync.js e colocar nele o seguinte código:
io-local/readFileSync.js

const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

Logo após importarmos o módulo fs , criamos uma variável chamada nomeDoArquivo , contendo o nome (fixo) do arquivo que vamos ler e, em seguida, chamamos o método fs.readFileSync .
Rode o script com node readFileSync.js . Gerou um erro, certo? Isso aconteceu porque estamos tentando ler um arquivo que não existe! Vamos resolver esse probleminha daqui a pouco!
Método fs.readFileSync
Esse método é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js. Por ser síncrono , ele espera a leitura do arquivo terminar para, só então, atribuir o resultado à constante data .
O método readFileSync recebe dois parâmetros:
O nome do arquivo;
Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.
Mas e se ocorrer um erro na leitura do arquivo?
Com funções síncronas, como readFileSync , você deve tratar explicitamente os erros que puderem acontecer. Nesse exemplo, usamos um bloco try...catch para capturar quaisquer erros que possam acontecer durante a leitura do arquivo e imprimimos uma mensagem para o usuário no terminal.
Agora vamos resolver o probleminha que estamos tendo ao tentar ler o arquivo!
Nota : Antes de continuar, não se esqueça de criar um arquivo meu-arquivo.txt com algum conteúdo dentro!
Ao rodar o script readFileSync.js com o comando node readFileSync.js , você deverá ver o conteúdo do seu arquivo impresso no terminal.
Mas e se tivéssemos outras partes do script que não deveriam esperar a leitura do arquivo ser feita? Por exemplo, e se tivéssemos que ler vários arquivos ao mesmo tempo? Para isso, utilizamos um método assíncrono , que veremos a seguir.

### Lendo arquivos com métodos assincronos
O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile . Na versão padrão do fs , a função readFile aceita um callback, que é chamado quando a leitura do arquivo termina.
Continue lendo para ver o método fs.readFile em ação.
Vamos criar um arquivo chamado readFile.js dentro da nossa pasta io-local e colocar nele o seguinte código:
io-local/readFile.js

const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

Método fs.readFile
Esse método também é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.
Ele recebe três parâmetros:
O nome do arquivo;
Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo;
Uma callback que permite receber e manipular os dados lidos do arquivo.
A callback é uma função que recebe dois parâmetros: err e data . Caso ocorra um erro durante a leitura do arquivo, o parâmetro err virá preenchido com as informações referentes ao erro. Quando esse parâmetro vier vazio, significa que a leitura do conteúdo do arquivo ocorreu sem problemas. Nesse caso, o segundo parâmetro, data , virá preenchido com o conteúdo do arquivo.
Rode o comando node readFile.js . Você obterá uma saída semelhante a esta: Conteúdo do arquivo: Meu texto! Meu texto! Meu texto! Meu texto! .
O tipo de encoding que escolhemos é muito importante. Se não for especificado, por padrão, o arquivo será lido como raw buffer , que é um formato muito útil quando estamos enviando dados através de requisições HTTP. No nosso caso, como queremos manipular o conteúdo do arquivo como uma string, então o certo é especificar o encoding.
Nota : É importante lembrar que esses dados ficam armazenados em memória. Ou seja, caso você tenha um arquivo de 1GB de texto, você trará 1GB de dados para a memória RAM.
No entanto, essa não é a única forma do método readFile . O módulo fs possui um segundo modelo de API que, em vez de trabalhar com callbacks, retorna Promises, o que torna seu uso muito mais recomendável.
Para utilizar a interface de Promises do fs , precisamos alterar a importação do módulo fs , importando, agora ('fs').promises . Vamos ver como ficaria o código acima se utilizarmos Promises:
io-local/readFile.js

const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });

  SIGKILLé o sinal que diz a um processo para terminar imediatamente e, idealmente, agiria como process.exit().

SIGTERMé o sinal que informa um processo para terminar normalmente. É o sinal enviado por gerentes de processo como upstartou supervisorde muitos outros.

Você pode enviar este sinal de dentro do programa, em outra função:

### Escrevendo dados em arquivos

Escrever dados em arquivos é um processo bem parecido com a leitura de dados! Assim como o módulo ('fs').promises disponibiliza o método readFile , há também o método writeFile .
Atenção: O módulo fs também disponibiliza um método writeFile , que funciona utilizando callbacks. Vamos utilizar diretamente o módulo ('fs').promises , já que o uso de Promises é bem mais encorajado que o uso de callbacks 👍
io-local/writeFile.js

const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  Rode o script com node writeFile.js . Repare que o conteúdo do meu-arquivo.txt foi alterado para "Meu textão".

### Utilizando async / await

Acontece que nem sempre queremos utilizar essa API das Promises. Muitas vezes, queremos simplesmente buscar o resultado e pronto. E é aí que entra o async/await .
Essas duas palavras-chave foram criadas para trabalhar com Promises como se estivéssemos trabalhando com código síncrono.
A questão é que toda função na qual utilizamos async , automaticamente passa a retornar uma Promise, que será rejeitada em caso de erro, e resolvida em caso de sucesso.
O resultado de usarmos async / await é que o código fica com uma sintaxe quase idêntica à sintaxe utiliada para código síncrono. Veja como fica o exemplo anterior utilizando async/await :
Copiar
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()
Perceba que, para podermos utilizar o async/await , precisamos criar uma função main e colocar nossa lógica dentro dela. Isso acontece porque, por enquanto, o await só pode ser utilizado dentro de funções async .
Repare também que não temos mais nenhum .then , e que todo o tratamento de erro e sucesso foi feito com um try ... catch , da mesma forma que fizemos quando estávamos utilizando o fs.readFileSync .
Ainda sobre o writeFile , você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional para os métodos writeFile e writeFileSync . A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w' , que especifica que o arquivo deve ser aberto para escrita. Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx' , por exemplo, funciona como 'w' , mas lança um erro caso o arquivo já exista:
Copiar
const fs = require('fs').promises;

// A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error('err');
  });
Note que, quando rodamos o código com a flag wx , tentando escrever no arquivo meu-arquivo.txt , é gerado o seguinte erro:
Copiar
[...]
[Error: EEXIST: file already exists, open './meu-arquivo.txt'] {
  errno: -17,
  code: 'EEXIST',
  syscall: 'open',
  path: './meu-arquivo.txt'
}
No código, mude o nome do arquivo para meu-novo-arquivo.txt e rode novamente o script com node writeFileSync.js . Repare que foi criado um novo arquivo com o nome que utilizamos e com o conteúdo Eu estive aqui :eyes: .
Você pode ler mais sobre as flags disponíveis aqui.
Rodando tudo junto
Promises são executadas assim que são criadas. Isso quer dizer que, no código abaixo, todos os arquivos serão lidos ao mesmo tempo e, portanto, não teremos uma forma de saber quando cada um vai terminar de ser lido. Mas e se precisarmos do resultado da leitura dos três arquivos?
Entra no palco: Promise.all !
O Promise.all é um método da Promise que nos permite passar um array de Promises e receber, de volta, uma única Promise. Ela será resolvida com os resultados de todas as Promises, assim que todas elas forem resolvidas. Esse método também nos permite utilizar um único catch , que será chamado caso qualquer uma das Promises seja rejeitada.
Vamos reescrever quase o mesmo código que fizemos lá em cima, que utilizamos para mostrar como Promises evitam o callback hell. Desta vez, vamos escrever, no final, a soma do tamanho de todos os arquivos. Além disso, vamos utilizar o módulo ('fs').promises para não precisarmos trabalhar com callbacks manualmente.
Copiar
const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
Ótimo! Agora, estamos lendo os três arquivos ao mesmo tempo, e nosso .then será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises.

