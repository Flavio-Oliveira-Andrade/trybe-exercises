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
Para fazer um deploy com o Heroku , não é necessário realizar muitas alterações no projeto. O mais importante é o Heroku saber qual linguagem está sendo utilizada na sua aplicação e, caso esteja utilizando algum, qual o framework.

A partir dessas informações, o Heroku saberá, por exemplo, que é um projeto em Node.js e que, para executá-lo, ele terá que efetuar o comando descrito no campo scripts.start dentro do package.json (mais conhecido por npm start ).
Ou seja, pelo seu código, o Heroku vai saber qual linguagem e framework você está utilizando na sua aplicação e, a partir daí, saberá como executá-la.

### como magica ele conhece o seu codigo

Algumas linguagens não definem explicitamente o que deve ser feito para executar a aplicação. Pode acontecer, também, por algum motivo, de o Heroku não conseguir inferir como executar a aplicação. Para esses dois casos citados e outros,
### deve ser adicionado um Procfile à sua aplicação.

## Procfile
O Procfile é um arquivo que especifica o comando que deve ser executado para iniciar o projeto. Além disso, o arquivo também especifica algumas características da sua aplicação, como, por exemplo, se seu projeto é um servidor web ou um job , se possui múltiplos processos ou apenas um etc.
O Procfile é definido em um arquivo ``chamado Procfile`` (exatamente assim, sem extensão 🤙) e deve localizar-se na raiz da sua aplicação. Caso o Heroku não encontre esse arquivo no momento do build , ele vai, conforme vimos anteriormente, tentar iniciar seu projeto da maneira padrão da linguagem/framework utilizada.

<process type>: <command>

Onde
- <process type> Define o tipo daquele processo. Por exemplo, se é um servidor web ou um job .
- <command> É o comando para iniciar o projeto.
Segue um exemplo de um Procfile para um servidor web em Node.js :

`web: node index.js`

Importante! O tipo web é especial, pois ele é o único tipo que pode receber tráfego HTTP externo pelas rotas do Heroku . A cada deploy , uma porta é gerada e fica disponível na variável de ambiente `PORT` . O Heroku fica responsável por redirecionar o tráfego HTTP que sua aplicação recebe para essa porta. Por isso, verifique se sua aplicação está parametrizada para definir qual porta utilizar a partir dessa variável de ambiente.

## Dynos O heroku

O `Heroku` utiliza o conceito de container, em que as responsabilidades de gerenciar maquinas virtuais ou fisicassão abstraidas. isso significa que em vez de se oreucupar  com a maquina onde ira rodar seu codigo, voce pode  focar em  desenvolver aplicações mais poderosas
Ao fazer o deploy no Heroku, você estará colocando sua aplicação dentro de um "container". O container é um ambiente isolado e leve que provê os recursos necessário de CPU, memória RAM, um sistema operacional (Linux, no caso do Heroku) e um sistema temporário de arquivos para rodar seu código. No Heroku, os "containers" são chamados de `"dynos"` .

Os containers normalmente rodam em ambientes compartilhados, porém isolados um dos outros.
O conceito de containers não é exclusivo do Heroku. Na verdade, esse conceito é utilizado por diversas soluções e possui várias vantagens. Entre elas, estão a possibilidade maior de uma abstração da infraestrutura e facilidade para escalar seus projetos.
No Heroku, por exemplo, é possível escalar sua aplicação facilmente. Para escalá-lo verticalmente, basta alterar o tipo do dyno para um que possua mais recursos. Para fazer um " scaling " horizontal, você pode aumentar o número de dynos.

O scaling pode ser feito via linha de comando ou pelo dashboard do Heroku. Esse processo possibilita a configuração do `autoscaling` , em que você consegue escalar seus dynos , para mais ou para menos, automaticamente, baseando-se em alguns parâmetros, como, por exemplo, tempo de resposta de sua API.

## Criando uma conta

Para utiliazar os serviços do Heroku, é necessario  criar uma conta na plataforma. se ainda nao possui uma conta, acess o site oficial do `heroku`

### Instalação do CLI
Para começar, vamos instalar o Heroku CLI (Command Line Interface). Com ele, conseguiremos gerenciar e escalar nossas aplicações, prover add-ons , observar logs e rodar nossos projetos localmente, simulando o servidor (se você não entendeu alguma dessas funções, calma, veremos cada uma adiante).
Para a instalação no Linux, o CLI está disponível como Snap para diversas distros. Para utilizá-la, seguiremos os seguintes passos:

1. Instalando o Snapd.  Abra o terminal e execute o seguinte comando:
`sudo snap install hello-world`
O comando deverá responder da seguinte maneira:
`hello-world 6.3 from Canonical✓ installed`
Caso o comando retorne sucesso, siga para o próximo passo.
Caso retorne que o comando snap não é conhecido, instale-o utilizando o apt :
`apt-get update && apt-get install snapd`
Após a instalação, execute novamente o comando snap install acima para validar se a instalação foi concluída com sucesso.

2. Instalando o CLI
Para sistemas Linux , instale o snap do Heroku CLI, executando o seguinte comando:
`sudo snap install heroku --classic`

3. Logando no Heroku
⚠️ Atenção: é necessário autenticar o CLI para que os comandos funcionem corretamente.

Após a instalação ser concluída, você poderá acessar o Heroku por meio do seu terminal.
Use o seguinte comando para logar com a sua conta:
`heroku login`
A seguir, o console solicitará que você pressione qualquer tecla para abrir o navegador e prosseguir com o login nele. Feito isso, será exibida no terminal a mensagem de sucesso conforme abaixo:

### UTILIZANDO O HEROKU
# Executando localmente
Para rodar um projeto localmente utilizando o CLI do Heroku , basta instalar as dependências do projeto e utilizar o CLI da seguinte maneira:

`npm install # Instalando as dependências em um exemplo NodeJs utilizando o npm.`

`heroku local web`

Seu projeto rodará na porta 5000 . Rodar localmente pode ajudar a garantir que seu código está pronto para o deploy .

## Recapitulando sobre git…

Recapitulando o que aprendemos no módulo sobre git , ao versionar nossos projetos, nós os associamos a repositórios remotos ( remotes ). Por padrão, o nome deste repositório remoto do git é origin . Para visualizá-lo, basta executar o comando `git remote -v` .
Para realizar o deploy pelo Heroku, precisamos adicionar mais um remote , dessa vez apontando para o servidor do Heroku .
Vamos ver, passo a passo, como fazer isso.

### Criando um projeto para deploy

Vamos fazer nosso primeiro deploy no Heroku! 🎉
Para isso, inicie um projeto React:
Em seguida, entre na pasta do projeto. Normalmente, o CRA já inicia um projeto git, mas, caso isso não aconteça, execute o comando para iniciar o projeto:

git init
git add .
git commit -m ‘Initialize project using Create React App’

## Listando os remotes
Para listar os remotes de seu projeto, execute o seguinte comando:

`git remote -v`
Como acabamos de iniciar o projeto git , não temos nenhum remote vinculado à nossa aplicação. Com isso, vá no seu GitHub e crie um repositório meu-primeiro-deploy-heroku .
Após ter criado o repositório, vá ao terminal e execute o comando para vincular a sua aplicação ao repositório criado no GitHub. Para isso, você pode:
Utilizar chave ssh:

git remote add origin git@github.com:[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git
Ou, se preferir, utilizar HTTPS também:

git remote add origin https://github.com/[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git

Por fim, execute novamente o comando git `remote -v` . Você verá que, dessa vez, aparecerá algo parecido com:

origin git@github.com:[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git (fetch)
origin git@github.com:[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git (push)

# Heroku remote
Para adicionar o remote do Heroku , basta usar o comando `create` do CLI dentro da pasta da aplicação, da seguinte maneira
`heroku create`
Após esse comando, liste novamente os remotes e você verá um novo remote chamado heroku , apontando para um repositório em https://git.heroku.com/ .
Heroku gera automaticamente um nome aleatório para o repositório, de forma que o nome seja único. Algo parecido com `nameless-plateau-10138` .

Nota : Antes de executar novamente o comando heroku create , remova o heroku que já existe no remote da aplicação, caso contrário será criado um novo repositório no Heroku sem a associação a nenhum remote . Para excluir um remote:

`git remote rm heroku`
Para dar um nome específico para o repositório, você pode informá-lo logo após o comando heroku create , como mostrado no exemplo abaixo:

`heroku create meu-primeiro-deploy-2930`
Como esse nome deve ser único, caso já exista algum repositório com este nome no Heroku , será retornado um erro solicitando que seja escolhido um novo. Por isso, um número aleatório no final pode evitar que esse erro ocorra. 😉
Ao executar o comando heroku create em seu projeto, ele passa a ser um app do Heroku. Isso significa que o Heroku pode entendê-lo e gerenciá-lo. E neste caso qual será o remote associado a este novo app? Como você excluiu o remote anterior, ele é associado a um remote chamado heroku , como no início.

### Nomeação do remote

Por padrão, o CLI vai nomear todos os remotes criados como `heroku` . Porém, podemos criar o nosso remote passando um nome diferente. Isso pode ser feito utilizando a flag `--remote` :

`heroku create meu-deploy-de-testes-29302 --remote heroku-homolog`

Com o comando acima, nós mantemos o remote heroku e adicionamos o novo remote `heroku-homolog` com o nome `meu-deploy-de-testes-29302` . 🙂

Podemos, também, renomeá-los utilizando o comando `git remote rename` . Vale lembrar que o comando abaixo não vai manter o remote `heroku` , ele vai renomear o remote `heroku` para `heroku-origin`

`git remote rename heroku heroku-origin` .
Criar um outro remote da forma que fizemos ou renomear seu remote pode ser útil se você tiver múltiplos apps do Heroku usando o mesmo código fonte. Por exemplo, uma versão para o ambiente de testes e outra para um ambiente de produção. Nesse caso, cada app do Heroku tem seu próprio remote no seu repositório local.
Nota: Mantenha os remotes do seu projeto como `heroku` e `heroku-homolog` .

## Vincular um app existente a um novo remote

Você já sabe renomear e até remover um remote que estava associado a um app do Heroku. Suponhamos que agora seja necessário vincular um app a um outro remote , pois ao removê-lo anteriormente com `git remote rm nome-do-remote` , o app que estava associado a ele, ficou sem um remote .
Utilize a sintaxe `heroku git:remote -a nome-do-seu-app-heroku --remote nome-do-seu-remote` .

`heroku git:remote -a meu-deploy-de-testes-29302 --remote heroku-test`

## Buildpack




