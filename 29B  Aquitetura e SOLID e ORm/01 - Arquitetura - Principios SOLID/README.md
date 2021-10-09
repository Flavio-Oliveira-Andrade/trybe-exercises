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