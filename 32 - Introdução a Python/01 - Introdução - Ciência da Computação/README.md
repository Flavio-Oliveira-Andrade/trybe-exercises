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

