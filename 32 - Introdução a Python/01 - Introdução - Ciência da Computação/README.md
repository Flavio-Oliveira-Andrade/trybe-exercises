# O que vamos aprender ?

U,a casa pode ser bonita por fora, com telhados ornamentados e varanda, mas se possuir uma base fragil, eventualmente iŕa cair irá cair. 🏠

Já aprendemos a contruir a nossa casa(Front-end, Back-end). Chegou o momento de aprender sobre o que a base de tudo que vimos até agora e ainda veremos! È hora do modulo de Ciências da Computação!

Ao longo desse modulo faremos uma introdução a linguagem de programação Python, aprofudaremos em programação orientada a objeto e exploraremos algoritimos e estrutura de dados que são a base da ciências da computação

## Ciência da Computação

1. Vamos começar nos aventurando por mais uma linguagem de programação! Em Python, nos aprofundaremos em orientação a objetos e aprenderemos sobre os padrões de projetos. Aproveitaremos a deixa para explorar como as redes funcionam e faremos mil requisições para raspar dados da web.
2. Em seguida, estudaremos algoritmos: como funcionam, como são classificados, como conversamos sobre suas qualidades e sua performance. Veremos alguns exemplos de ordenação e busca e estudaremos estratégias para resolver todo tipo de desafio!
3. Por fim, estudaremos um repertório de estruturas de dados clássicas : toda pessoa que pensa computação precisa conhecer (você provavelmente já conhece várias delas). Estruturas de dados são como componentes para nossos algoritmos, nos ajudando a construir soluções rapidamente e com qualidade.

# o que vamos aprender ?
Hoje, vamos conhecer a linguagem de programação PYTHON, onde é utilizada e por que cada vez mais tem se tornado relevante no mundo de programação. para nos familiarizarmos, vamos escrever nossos primeiros programas

## Você sera capaz de :
- Utilizar o terminal interativo do Python
- Entender e utilizar estruturas condicionais (se, senao se, senao ) e de repetição(enquanto, para);
- criar funções para reutilização de codigos;
- Escrever seus propios modulos e como importa-los em outros códigos.

Porque que isso é importante ?

Aprender linguagens de programação novas e sempre um desafio, porém aumenta sua capacidade de entender diferentes paradigmas. Aprender Python aumenta o seu cinto de ferramentas e lhe traz mais um diferencial. afinal, para quem so tem um martelo, todos parafuso é prego, enão queremos isso. 🔨

Além disso, cada vez mais o mercado vem oferecendo vagas nesta linguagem, que tem crescido muito na area da ciencia de dados.

## Introdução ao ( o que é PYTHON )

Python é uma linguagem de programação que busca  simplicidade em sua sintaxe, o que proporciona legibilidade e produtividade. Seu interpretador pode ser executado em diversos sistemas operacionasi como Linux,MacOs e Windows,
quase sempre sem mudanças no codigo.

Por causa da sua simplicidade e didatica, foi escolhido como linguagem principal a ser ensinada na maioria das universidades dos estados unidos. como destaque , temos o instituto de Tecnologia massachusett(MIT)
muito popular hoje em dia devido a area de cienciass de dados, tambem pode ser utilizada para a criação de aplicação web, automação de tarefas repetitivas, aplicativos descktop e até aplicação para dispositivos moveis(embora para essa finalidade python não seja  tão popular nem recomendado )

É também conhecida por suas baterias já inclusas : ela já traz consigo um conjunto de bibliotecas úteis para diversas tarefas, como manipular dados no formato JSON e CSV. A linguagem também possui um servidor web simples, ferramenta para emails e muito mais! Grandes empresas como Google, Facebook, Pinterest, Dropbox, Amazon, Youtube, dentre outras, utilizam bastante da linguagem em diversos projetos. E aqui no Brasil não ficamos de fora, grandes empresas como Globo.com, Olist, Luizalabs e Jusbrasil também são nomes que utilizam a linguagem. Uma tal de Trybe a usa em sua análise de dados também! 🔋

Por fim, mas não menos importante, tem um ecossistema que vai além da linguagem: há uma comunidade que se apoia na filosofia de "pessoas > tecnologia", possuindo uma preocupação relevante com inclusão e diversidade. As pessoas "pythonistas", como assim são chamadas, tendem a ser pessoas sempre dispostas a ajudar o próximo. Por isso é comum escutar a frase "venha pela linguagem, fique pela comunidade".
Pronto para começar? Então vamos abrir o terminal e digitar alguns comandos. 🖥️
Mas não precisaremos instalar nada?! 😱



``` python3
Python 3.8.2 (default, Jun  2 2020, 13:51:17)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
Este tipo de terminal é chamado de terminal interativo ou REPL ( Read-Eval-Print Loop ), que pode ser traduzido como loop de leitura-avaliação-impressão. O que ele faz é receber uma entrada digitada pela pessoa, avaliar sua execução e imprimir seu resultado. Todos os exercícios de fixação do conteúdo deverão ser feitos utilizando o terminal interativo.
Normalmente o primeiro programa escrito em uma linguagem de programação é o Olá Mundo . Porém, isso é tão rápido como digitar print("Olá Mundo") , portanto vamos começar com algo um pouco diferente.
Digite import antigravity e aperte enter .

```
import antigravity
```

Esta é uma maneira pythônica de dizer "Olá Mundo".
Aproveitando que já estamos no terminal interativo, vamos ver a filosofia da linguagem, que ajuda a entender um pouco sobre como o Python foi escrito. Digite no terminal interativo:

```
import this
```

A fim de padronizar códigos escritos em Python, foi lançado um guia de estilo conhecido como PEP 8 ou Python Enhancement Proposal 8 . A PEP 8 é um documento desenvolvido pela comunidade pythonica que visa aprimorar a legibilidade dos códigos. À medida que fomos avançando nos dias do bloco, vamos destacar quais estilos este documento estabelece com 🎨.

## Operação Basica

 * 3  # saída: 6
 + 3  # saída: 5
 / 2  # saída: 1.5

 💡 O símbolo # marca um comentário e deste simbolo em diante (na linha) o código não será executado.
Para atribuir esses valores a um nome, basta utilizar o operador de atribuição = .

square_root = 25 ** (1/2)  # raiz quadrada de 25. O operador `**` significa "elevado a"

print(square_root + 1)  # saída: 6.0

Não é necessário a utilização de let , var ou const nas atribuições. Veremos escopo e questões de mutabilidade mais adiante.
Mas existe algum operador que Python não tenha? E se eu tentar incrementar um valor?

counter = 0
counter++  # esse código vai falhar

# original
counter = counter + 1

# simplificado
counter += 1

 // 2  # saída: 1
 / 2  # saída: 1.5

O operador // realiza a divisão e arredonda o resultado para baixo. Ou seja, realiza o quociente.
Hummm... Tirando o let e var , ainda parece bem similar com Javascript .🤔
De fato, operadores são comuns a todas as linguagens de programação, por isso tamanha semelhança.
Porém, nem tudo é tão semelhante. Se realizarmos a operação de comparação entre '1' == 1 , o resultado será falso ( False ), pois como são valores de tipos diferentes, nenhuma conversão é realizada.
Dado as listas a = [1, 2, 3] e b = [1, 2, 3] , se compararmos as duas a == b teremos como retorno True , ainda que representem listas diferentes.
Acho que "Python" != "Javascript" , ainda que tenham suas similaridades. 😅
Mas e sobre os operadores && e || , não são operações de and e or ?
Quando queremos fazer operações lógicas, como verificar se uma temperatura está entre dois valores, utilizamos o operador and . Ou seja, para verificar se uma temperatura é menor que 25 graus e maior que 18 graus, podemos fazer algo como temperatura < 25 and temperatura > 18 . Embora uma maneira mais pythonica de se escrever esta operação seja 18 < temperatura < 25 . 🤓
Assim como podemos validar intervalos utilizando o operador or . Por exemplo, se em um parque pessoas com idade menor ou igual a 5 e maiores de 65 anos não pagam, poderíamos escrever uma validação da seguinte maneira idade <= 5 or idade >= 65 .

Para praticar um pouco, vamos fazer alguns exercícios:
Exercício
- 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
Exercício
- 2: Declare e inicialize uma variável: hours = 6 . Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
Exercício
- 3: Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.
Exercício
- 4: Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

### tipo de dados embutidos

## Números inteiros (int)

o primeiro dos tipos  numericos o `int`, que representa um numero inteiro, isto é, escrito sem parte fracionaria. uma variável a = 5 , comande type(a) e observe o retorno.
 O método type(operando) corresponde ao operador typeof operando do JavaScript.

 ## Números fracionários (float)

 O segundo tipo numérico é o float , também conhecido por ponto flutuante, que representa um número decimal ou fracionário.
Inicialize uma variável a = 5.0 , comande type(a) e observe o retorno.

## Números complexos (complex)

Como novidade e último tipo numérico, temos o complex .
Já vimos como representar números inteiros ou fracionários, mas sabia que números complexos podem ser representados também?
Basta colocar o número real acrescido da sua parte imaginária, trocando o i por j.

 + 4j  # saída: (3+4j)
 + Operações matemáticas podem ser feitas da mesma maneira com números complexos.
 + (3 + 4j) + 4  # saída: (7+4j)

Inicialize uma variável a = 5j , comande type(a) e observe o retorno.

Strings (str)
Além dos tipos numéricos, temos o tipo de sequência de texto str , que representa uma cadeia de caracteres ou, como popularmente conhecida, uma string. As strings são definidas envolvendo um valor com aspas simples ou duplas.

Booleanos (bool)
Os valores booleanos True e False pertencem ao tipo embutido bool . Aqui devemos ficar atentos ao início maiúsculo dessas palavras reservadas.
E temos ainda estruturas do tipo sequência( list , tuple , range ), conjuntos( set , frozenset ), mapeamento( dict ), sequências binárias( bytes , bytearray , memoryview ) e mais um monte! 😓
Mas por que tantas estruturas? 🤔 Cada uma tem sua peculiaridade e utilização. Vamos dar uma olhada!


### listas (list) []
Sequência mutável e ordenada de elementos. Pode armazenar elementos heterogêneos, tem seu tamanho variável e cresce a medida que itens são adicionados.
Sintaxe:

fruits = ["orange", "apple", "grape", "pineapple"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por indices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("pineapple")  # removendo uma fruta

fruits.extend(["pear", "melon", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("apple")  # retorna o índice onde a fruta está localizada, neste caso 1
 em seu programa
fruits.sort()  # ordena a lista de frutas

E a prática?! Vamos lá!
Copie a lista abaixo para realizarmos os exercícios de fixação 5 e 6:

🎨 Funções e variáveis devem ser nomeadas com letras minúsculas e underscore, caso tenham mais de uma palavra: minha_variavel .
Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".

### Tuplas (tuple)
São similares a listas, porém não podem ser modificados durante a execução do programa.
Sintaxe:

user = ("Cássio", "Botaro", 42)  # elementos são definidos separados por vírgula, envolvidos por parenteses

user[0]  # acesso também por índices

### Conjuntos (set)

Conjunto de elementos únicos e não ordenados. Como conjuntos, implementam operações de união, intersecção e outras.
Sintaxe:

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

Conjuntos imutáveis (frozenset)
Variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.
Sintaxe:
permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

### Dicionários (dict)
Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.
Sintaxe:
people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves (ao contrário de JS, as aspas duplas são obrigatórias)

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Cássio

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

Vamos fixar os aprendizados sobre dicts?
Utilizando o código abaixo, faça os exercícios de fixação 8, 9 e 10:
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

### Range (range)
Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de acordo com o passo ( step ) definido. Pode ser declarado como range( [start], stop[, step] ) , em que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente.
Um ponto de atenção é que o stop não é incluído na sequência, portanto caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)
Seus valores são criados a medida que esta sequência é percorrida.
Sintaxe:
# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, ,5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

Além dos tipos básicos, temos outros como datas, tuplas nomeadas, arrays, enumerações e outros, mas estes tem de ser importados de seus respectivos módulos.
Exercício 11: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.
Exercício 12: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?
