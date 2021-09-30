## o que vamos aprender
Hije voce vai aprender o que é o deploy, seus principais conceitos, os serviços de deploy mais popular e como  configurar e publicar seus projetos de maneira simples  e rapida utilizando o heroku

## voce sera capaz de:

 - conhecer o que é um deploy e os principais serviços utilizados;
 - Pulblicar aplicação atraveis de heroku
 - vizualizar log das suas aplicações publicas;
 - Monitorar suas aplicações publicas;
 - Utilizar variaveis de ambiente dentro do Heroku.

 ## por que isso é importante?

 Além de saber  desenvolver aplicações, é muito importante saber como publica - las  em um ambiente. isso  significa  praticamente dar vidas a a elas. É essa etapa do desenvolvimento que permite que outras pessoas acessem e utilizaem sua aplicação

Por ser parte fundamental  do fluxo de vida de uma  apliacação, os conceitos de deploy, geralmente, sao parte da rotina de uma pessoa desenvolvedora.

Alem do mais, estamos passando por um forte movimento de aproximação entre as areas de tecnologia. Uma dessas aproximação é entre desenvolvimento e operação, em que as pessoas da area de desenvolvimento participam ativamente dos processos relacionados a publicação. atualização e gerenciamento das aplicações.

Com  a aproximação dessas duas areas. foi criado o termo DecOps para descrever o conjunto de praticas de ambas as areas

### O que é deploy

A palavra deploy tem vários significados. No nosso caso, nós a utilizamos para representar o processo de publicar uma aplicação em um servidor, tornando-a disponível para ser acessada local ou externamente.

### Serviços  em Nuvem

Para facilitar o processo de publicação , existe serviços em nuvem que abstraem as complexidades  de se administrar um servidor  e suas diversas camadas (rede disco , recursos etc); como o nosso foco agora  nao é entar nesses nivies, utilizamos um desses  serviços.

Exemplo de serviços em nuvens, Populares

- Heroku
- Google GCE
- Amazon AWS
-  Microsoft Azure
-  IBM claud.

Nota: vale lembrar que cada serviços tem suas particularidades.

## intgrodução ao Heroku.

Para nosso primeiro deploy, vamos utilizar O heroku é  um PaaS (PlatForm as a Service), o que signica que ele provem de uma plataforma em nuvem para configurarmos e realizarmos nosso deploy de maneira simples e facil.

O Heroku executa e gerencia aplicação escrita em Node.js, Ruby. java , Pyton, CLojure, Scala, Go e PHP. por ser uma plataforma "poliglota", ele vai se comporta de maneira similar, idepedente da linguagem.

Para heroku, uma aplicação é um conjunto de codigos escritos em uma dessas linguagens citadas anteriormente, provalvelmente utilizando um framework, com algumas depedencias e descrição que idican como roda-la

Um termo importante para ter na ponta da língua é build . No contexto de deploys , o build é como chamamos todo o processo em que o código é preparado para posteriormente ser executado. Por exemplo, é durante o build que se executa o npm install para instalar as dependências do projeto.

### Como funciona ?

