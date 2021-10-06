# o que vamos aprender ?
No conteudo de hoje , voce vai aprender como gerenciar o ciclo de vida de suas aplicações e a importancia disso  para um abiente de `produção`. Alem disso, voce  vera o que sao gerenciadores de processos (processos managers) e como instala- los e utiliza-los para rodar seus codigos.

## Vôce será capaz de:

- entender o que sao process **manager**
- Entender o porquê de utilizar ferramentas mais sostificados em produão;
- instalar, utilizar e aproveitar os principais recursos do **PM2**
- Fazer deploy no **HEROKU** aproveitando recursos de um process Managers

# Por que isso é importante ?
Conforme  vimos no conteudo sobre o **Heroku** , "damos vida" as nossas aplicações quando as publicamos. Nesse processo, novos desafios surgem.

No conteudo anterior, vimos que, normalmente pricisamos lidar com multiambientes. ou seja, geralmente temos um ambiente especifico para a fase de sesenvolvimento, outro para a fase de testes e por ultimo, mas nao menos importante, um para produção.

Seu codigo deixa de rodar em sua maquina para rodar em um servidor externo. Consequentimente ele deixa de ser acessado somente por voĉe  para ser acessado por varios usuarios, provavelmente 24 horas por dia . Esse cenario exige novas preocupações

- E se ocorrer um Bug e o processo parar?
- E se muitos usuarios acessarem ao mesmo tempo?
- E se os recursos da maquina nao forem o sufuciente?

Calma! Esses questionamentos, assim como outros desse tipo, são normais. E para nos ajudar a resolver ou evitar esses problemas , existem diversos tipos de ferramentas. Hoje veremos os Process **managers**.

Assim como toda ferramenta , os gerenciadores de processos tambem não são "balas de prata" Existem outras maneiras de resolver tais problemas, porem os gerenciadores de processos sao simples e agregam muito valor.

# O que sao gerenciadores de Processo ?

os process Managrs (PMs) foram criados para facilitar e torna mais eficaz o gerenciamento de processos. Alem disso, os PMs permitem aproveitar melhor os recursos do servidor, nos ajudando a garantir a disponibilidade de nossas aplicações

## Algumas vantagens são:

- Reload automatico:
- Abstração da complexidade de gerenciadores nativos:
- Gerenciamento de sessões;
- Facilidade de gerenciamento de multiplos nucleos de processamentos:
- Responsabilidade do uso de cores delegadosao PM:
- Gerenciamento de multiplas aplicações no servidor
- Escalanomento dos processos
- Balanceamento de carga;
- Monitoramneto;
- Gerenciamento de logs.

Essas funções nos ajudam a manter nossa aplicação no ar 24-7 e co maior aproveitamento dos recursos do servidor, aumentando assim sua disponibilidade e resilência.

## Gerenciadores de Processos Populares

Existem diversos process managers. Alguns são para de linguagens especificas e outros por sistema operacional(os). Os mais populares São:
- PM2
- StrongLoops PM
- Forever
- SystemD do linus

# Vamos Falar do PM2
o `PM2` É UM pM PRINCIPALMENTE NA COMUNIDADE Node.js O PM2 foi feito com intuito de auxiliarr o gerenciameto de aplicações em ambiente de produção , permitindo manter suas aplicações semprerodando, reiniciando-as quando necessario, sem downtime, e facilitando o gerenciamneto dos processos

### Instalação

A instalação é muito simples. Podemos fazê-la utilizando o `npm`:

`npm install pm2@latest -g `

Para validar se a instalação foi concluída com sucesso, execute o comando abaixo. Deverá ser exibida no seu console a versão do PM2 instalada.

`pm2 --version`

## Atualização

Caso você tenha uma versão inferior do PM2 e queira atualizá-la, execute o comando abaixo. O PM2 será atualizado em memória:

`pm2 update`

Segundo a documentação oficial, todas as versões são retrocompatíveis, o que significa que os comandos de versões anteriores permanecerão funcionando nas novas.

## Gerenciando Processos  Agora, vamos passar pelos comandos básicos do PM2.

# Start
Executar um processo utilizando o PM2 é bem simples: basta utilizar o comando start . Imagine que temos um script rodando apenas com o Node.js. O exemplo abaixo ilustra como esse script seria executado com o PM2.
Na forma convencional, iniciaríamos nosso script Node.js da forma demonstrada abaixo:

\$ node index.js

Porém, queremos iniciá-lo com o PM2. Dessa forma, vamos executar o arquivo utilizando PM2 :

\$ pm2 start index.js

Podemos utilizar a flag name para nomear o processo. Se não definirmos explicitamente o nome do processo, ele terá o nome do arquivo que está sendo executado. No nosso caso, o nome do processo seria "index".

\$ pm2 start index.js --name <NOME_DO_PROCESSO>

Além do nome, todo processo contém seu id. Ambos podem ser utilizados para referenciá-lo.

# stop
Para parar um processo, basta executar o comando stop :

\$ pm2 stop <NOME_DO_PROCESSO>
Esse comando somente interrompe o processo, permitindo iniciá-lo novamente utilizando o comando start .

\$ pm2 start <NOME_DO_PROCESSO>
Caso queira executar um comando que terá efeito em todos os processos, basta usar all no lugar do nome do processo. Por exemplo, para parar todos os apps:

\$ pm2 stop all

# Delete
Se você quiser excluir o app (o processo da aplicação) da lista de processo do PM2, utilize delete :
\$ pm2 delete <NOME_DO_PROCESSO>

# Restart
Para reiniciar um processo, utilize o comando `restart` :

\$ pm2 restart <NOME_DO_PROCESSO>
Lembre-se de que, se houve alterações no arquivo, elas serão carregadas. O comando restart mata os processos e depois os reinicia. Isso significa que pode haver um curto "downtime", ou seja, um curto espaço de tempo em que seu serviço não vai responder.

# Reload
Opostamente ao restart , o comando reload é 0-second-downtime , ou seja, não causa downtime em seu app. Isso acontece porque ele primeiro sobe o novo processo e depois finaliza o anterior.

\$ pm2 reload <NOME_DO_PROCESSO>

Caso o gerenciador não consiga utilizar reload em sua aplicação, o clássico restart será aplicado no lugar.

# Monitorando Processos

List

Para listar todos os processos que estão sendo gerenciados pelo PM2, utilize o comando `list` .

\$ pm2 list

O comando exibirá uma saída semelhante a essa em seu terminal:

Perceba que são exibidas informações importantes, como o id e o name de cada processo. Esses identificadores são aqueles que podem ser utilizados nos outros comandos do PM2, como o stop e o restart .
Outro campo interessante é a versão ( version ) do seu app . Essa versão é aquela definida em seu package.json . Esse campo pode ser utilizado para saber se realmente seu código foi atualizado após alguma mudança.
São exibidos, também, campos que mostram o uso de recursos, o status do processo, o usuário que executou cada processo, se sua aplicação foi reiniciada e, caso tenha sido, quantas vezes.
O comando list também pode ser executado com ls , l e status . Por exemplo:

\$ pm2 ls

Caso você queira exibir a lista de processos ordenada, basta passar a flag sort . Essa flag permite a ordenação por todas as colunas exibidas: name , id , pid , memory , cpu , status e uptime . Junto a isso, é possível passar um segundo parâmetro informando se a ordenação deverá ser ascendente ou descendente: asc ou desc , respectivamente.

\$ pm2 list --sort name:desc

Por padrão, sem a flag sort , a listagem é ordenada pelo "nome" do processo e em ordem ascendente.

# show
Para exibir mais detalhes sobre um processo específico, utilize o comando `show` :

\$ pm2 show <NOME_DO_PROCESSO>

Através dele, é possível ver informações como a localização dos arquivos de logs, o caminho para o arquivo do processo, se aquele processo foi reiniciado etc. Além disso, é possível ver dados de métricas como latência do Event Loop e quantidade de requests ativas.

# Logs

O comando logs exibe o histórico de seus apps em tempo real. Você pode passar como parâmetro o nome de um processo específico, como no exemplo abaixo. Caso contrário, serão listados os logs de todos os apps.

\$ pm2 logs <NOME_DO_PROCESSO>

# Monit
Utilizando o comando monit , é possível visualizar um dashboard em tempo real diretamente no seu terminal.

`pm2 monit`
Nele, é possível acompanhar um processo específico em real time , observando seus logs e o uso de recursos.

# Interface Web
Outra maneira bem legal de monitorar seus apps é utilizando o dashboard do PM2. Ele funciona em um modelo freemium e, com uma conta free, já conseguimos utilizar alguns recursos.
O Dashboard vai mostrar os processos em execução pelo PM2 em sua máquina. Dito isso, para visualizar as métricas, lembre-se de deixar algum processo rodando.
Para utilizar o serviço, basta criar uma conta no site oficial.
Após ter a conta criada, basta executar:

\$ pm2 plus
O comando te redirecionará para o navegador para você prosseguir com o login. Feito isso, você já será redirecionado para um dashboard, parecido com o abaixo:

São exibidas diversas informações do servidor. No nosso caso, o servidor é nossa máquina, pois estamos rodando localmente. As informações exibidas são o consumo de recursos (CPU e Memória) e as configurações da máquina (como quantidade de cores, qual processador, versão do Node.js etc.).
Também é possível assistir aos logs em tempo real, criar métricas personalizadas, acompanhar o desempenho do app (requests ativas, consumos etc.) e mostrar também se houve algum restart ou problemas na aplicação.

# Modo Cluster
Para aplicações Node.js, o PM2 possui um Modo Cluster . Esse modo permite escalar nossa aplicação entre as CPUs disponíveis na máquina, sem a necessidade de modificações no código, aumentando a performance e a disponibilidade de nossa app , de acordo com as CPUs disponíveis.
Isso significa ter nosso código rodando em diversas CPUs e as chamadas à nossa aplicação sendo divididas entre elas, balanceando a carga . Esse processo é chamado de load balancing , e é comum não só para a divisão entre CPUs, mas entre qualquer outro recurso, como servidores ou processos.

Ao rodar a aplicação em quatro processos, temos ganho tanto na performance, já que não estaremos concorrendo à mesma CPU, quanto na resiliência de nosso ambiente, pois, caso ocorra algum erro em apenas um dos processos, os demais continuarão a ser executados.

Note que, apesar de utilizarmos mais de uma CPU, não teremos o mesmo processo rodando em mais de uma CPU. O que teremos é uma relação um para um, ou seja, um processo para um CPU.
Dito isso, caso uma API receba quatro chamadas, por exemplo, cada CPU processará uma requisição independente (considerando o exemplo acima com uma máquina de quatro cores).
Por baixo dos panos, é utilizado o Node.js Cluster Module, que escala a aplicação em processos filhos e automaticamente compartilha portas do servidor.
Para utilizar esse recurso, basta optar por instances ou i nos comandos start , reload ou restart , informando o número de processos.

\$ pm2 start index.js --instances 2 --name <NOME_DO_PROCESSO>
Nesse exemplo, serão iniciados dois processos.
Outra opção é utilizar, no lugar do número de instâncias, a tag max ou 0 . Desse modo, o PM2 vai criar uma instância para cada CPU disponível na máquina.

\$ pm2 start index.js -i max --name <NOME_DO_PROCESSO>

Se executado em uma máquina que possui quatro cores, serão iniciados quatro processos.
Caso o número de instâncias passado seja maior que o número de CPUs, o PM2 vai distribuir as instâncias entre as CPUs existentes, mantendo mais de um processo na mesma CPU. Isso não terá impacto na performance do processamento, pois mais de um processo vai concorrer pelo mesmo core , mas pode fazer sentido para casos específicos.

# Bônus
Acabamos de conhecer o Modo Cluster e suas principais características. Caso você queira se aprofundar mais no assunto de performance de uma aplicação, abordado dentro de Cluster, vamos falar agora um pouco sobre os conceitos de Scaling e Stateless . Se não quiser se aprofundar nesses conceitos agora, pode partir para próxima sessão!

# Scaling

Uma outra forma de aumentar o número de processos é utilizando o comando scale .
Esse comando pode ser utilizado de duas maneiras:
Informando o total de processos que você quer:

    \$ pm2 scale <NOME_DO_PROCESSO> 3
      Nesse caso, o número de processos será definido como três. Isso significa que, caso existam menos que três, novos processos serão criados. Se houver mais, serão excluídos processos para totalizar o "três" passado como parâmetro.
 Aqui, serão adicionados três novos processos além dos que já estão em execução.

# Stateless

Juntamente com os conceitos de scaling e cluster mode , temos um muito interessante: o stateless .
Ao dizer que uma aplicação é stateless , estamos informando que ela não possui estado. Ou seja, nenhuma informação do usuário é salva em uma sessão para ser utilizada por ele em uma próxima sessão.
Toda informação é trabalhada durante o tempo de duração daquele processo (durante o tempo em que uma requisição é recebida até sua resposta ser gerada, por exemplo). Os dados que, necessariamente, precisam ser persistidos vão utilizar alguma solução stateful , ou seja, que gerencie estado, como um bancos de dados ou um storage , por exemplo.
Essa arquitetura permite, principalmente:
Escalar horizontalmente suas aplicações de maneira simples em múltiplos servidores;
Cachear de forma mais fácil e, consequentemente, tornar suas aplicações mais rápidas;
Menos complexidade de storages , já que esse processo é feito de maneira unificada e por uma solução especializada.
Esses conceitos são bem populares no desenvolvimento de aplicações modernas, e conhecê-los é de grande importância.

# Ecosystem file

É possível passar um arquivo de configuração para o PM2 executar suas aplicações. Esse arquivo é chamado de ecosystem . Nele você configura comportamentos, opções, variáveis de ambiente e arquivos de logs de cada aplicação.
O ecosystem agrega ainda mais valor em projetos com arquitetura de microsserviços, em que uma aplicação é composta por um conjunto de serviços, cada um executando no seu próprio processo. Com o ecosystem, é possível definir individualmente a configuração de cada aplicação ou serviço. Para colocar no ar, basta executar o arquivo, e todas as configurações são aplicadas.
O arquivo de configuração pode ser feito nos formatos Javascript , JSON ou YAML .
Para executá-lo, basta utilizar um dos comandos do PM2, como start , restart , stop , delete ou reload , e passar o arquivo como parâmetro.
Exemplo de utilização:

\$ pm2 [start|restart|stop|delete] ecosystem.config.js

Javascript
Vamos a um exemplo de arquivo ecosystem em Javascript :

module.exports = {
  apps: [
    {
      name: 'app',
      script: './index.js'
    },
    //...
  ]
};

No exemplo acima, especificamos na propriedade apps os processos que teremos. Perceba que a propriedade recebe um array de objetos, o que significa que ela está preparada para receber a configuração de N aplicações.
Em arquiteturas de microsserviços, podemos explorar a funcionalidade descrita acima listando todos os apps (ou serviços) e suas diferentes configurações. Dessa forma, a complexidade de executar cada um individualmente diminui.
No objeto, definimos duas propriedades: name e script . Ambas são conhecidas nossas. Lembra que, ao fazer pm2 start em um script , definimos um nome e um arquivo de "index"? Então, esse nome e esse arquivo correspondem a essas propriedades que utilizamos no arquivo ecosystem.
Um start através desse arquivo ecosystem ficaria assim:

\$ pm2 start ecosystem.config.js
O código acima, se não fosse executado com ecosystem , teria a seguinte forma:
\$ pm2 start index.js --name <NOME_DO_PROCESSO>

# YAML
Outra opção é criar um arquivo YAML, que é  um formato mais simples e muito commum para a criação de arquivos de configuraçõe e definicções. por exemplo, na aula sobre o Heroku, vimos o procfile, , que oe baseado em YML

O exemplo abaixo tem a mesma função que o exemplo em javaScripts, porem utiliza YML

apps:

- name: app
  script: ./index.js

Perceba como a estrutura fica muito maius simples e legivel

# Multiaplicativos
Conforme dito anteriormente, o ecosystem permite a definição de N aplicações. Para defini-las, basta utilizar a lista em apps . Por exemplo:

apps:

- name: app-1
  script: .app-1/index.js
- name: app-2
  script: .app-2/index.js
- name: app-3
  script: .app-3/index.js

  Ao executar um start apontando para esse arquivo, serão iniciados três processos, pois definimos três aplicações dentro de apps . Caso queira executar uma aplicação específica, é possível utilizando a flag --only , como se segue:

  \$ pm2 start ecosystem.config.yml --only app-1

  Nesse caso, será iniciado apenas o app de nome "app-1". Caso queira executar apenas algumas aplicações , o parâmetro pode ser utilizado separando os apps desejados por vírgula. Por exemplo:

  \$ pm2 start ecosystem.config.yml --only "app-1,app-2"

  Nesse caso, serão executados apenas o app-1 e o app-2 .

  # Instâncias

  Outro parâmetro possível é o número de instâncias que aquela aplicação deve ter, utilizando a funcionalidade do modo cluster .
Abaixo, definimos que o app deverá ser iniciado com quatro instâncias:

apps:

- name: app
  script: ./index.js
  exec_mode: cluster
  instances: 4

  Perceba o campo exec_mode . Através dele, habilitamos o modo cluster para esse app . A propriedade instances indica o número de processos que será utilizado pela aplicação.
Importante: Ao alterar o arquivo ecosystem , é necessário deletar e iniciar novamente seu projeto do PM2 para que as alterações sejam aplicadas.

# Variáveis de Ambiente

Para utilizar variáveis de ambiente, basta definir uma propriedade env_ + nome do ambiente . Por exemplo, para utilizar variáveis distintas para os ambientes de prod e homolog , definimos as propriedades env_prod e env_homolog :

apps:

- name: app
  script: ./index.js
  exec_mode: cluster
  instances: 4
  env_prod:
    ENVIRONMENT: PRODUCTION
  env_homolog:
    ENVIRONMENT: HOMOLOG

Para executar, basta utilizar a opção env e selecionar quais variáveis serão passadas. Por exemplo, para utilizar as variáveis de homologação:

\$ pm2 start ecosystem.config.yml --env homolog

O valor é sempre o nome definido na propriedade do arquivo, sem o prefixo "env_" . Ou seja, imagine que queremos criar um ambiente de teste. Para isso, vamos criar a propriedade env_staging . Em seguida, para podermos utilizar as variáveis do ambiente de teste, vamos executar a aplicação da seguinte forma:

\$ pm2 start ecosystem.config.yml --env staging

# Auto restart

Conforme vimos, para manter a resiliência dos processos, o PM2 reinicia automaticamente processos que tenham falhado.
É possível também definir outras configurações para esses restarts

# Memória máxima

Imagine que, por algum motivo, um dos nossos processos vai acumulando uso de RAM ao decorrer do tempo, e passa a utilizar muito mais memória do que o normal. Ou, por algum erro, o processo começa a aumentar muito a memória.
Para corrigir cenários desse tipo, ou apenas por limitação de hardware, uma das configurações de auto restart do PM2 é a utilização máxima de RAM que aquele processo pode consumir.
Podemos definir, por exemplo, que ao chegar em 20mb de memória, o processo deverá ser reiniciado. Para isso, utilizamos a opção max_memory_restart . Ela pode ser utilizada tanto como propriedade do app , no arquivo ecosystem , quanto diretamente no start do CLI:

\$ pm2 start index.js --name <NOME_DO_PROCESSO> --max-memory-restart 20M

apps:

- name: app
  script: ./index.js
  max_memory_restart: 20M

  Note que o valor recebe a unidade de medida, que pode ser K ilobyte, M egabyte ou G igabyte.

  # Delay de restart

  O PM2 possui a opção --restart-delay , que permite passar um valor fixo, em milissegundos, para a sua aplicação aguardar antes do PM2 restartá-la em caso de erros.
Via CLI:

\$ pm2 start index.js --name <NOME_DO_PROCESSO> --restart-delay 100

Isso significa que o PM2 vai aguardar 100ms para tentar iniciar o processo.
Também é possível configurá-lo através do arquivo ecosystem :

apps:

- name: app
  script: ./index.js
  restart_delay: 100

  Bônus

  Vimos os principais conceitos do Auto Restart . Caso você queira se aprofundar mais, vamos falar agora um pouco sobre Estratégias de Backoff . Porém, caso não queira aprofundar, pode partir para próxima sessão!
Estratégias de Backoff
Com as estratégias de Backoff , é possível configurar sua aplicação para reiniciar de maneira mais inteligente, em vez de somente ficar reiniciando sempre que houver uma exceção.
Configurando uma estratégia de exponential backoff , é possível ir incrementando um tempo de intervalo entre as tentativas, reduzindo, por exemplo, a carga de conexões em bancos de dados ou outro serviço externo.
Para configurá-lo, basta adicionar a tag --exp-backoff-restart-delay mais o tempo de delay no start . Você pode fazer isso pelo arquivo ecosystem também:
Copiar
apps:

- name: app
  script: ./index.js
  exp_backoff_restart_delay: 100
Nesse exemplo, ao ocorrer um erro, o processo vai aguardar 100ms. Durante esse período, o app ficará com status de waiting restart . Caso ocorra um novo erro, ele aguardará mais 150ms e, se o erro se repetir, ele aguarda mais 225ms, e assim por diante:
Vai reiniciar em 100ms;
Vai reiniciar em 150ms;
Vai reiniciar em 225ms.
Dessa maneira, o delay entre os restarts vai crescendo em um movimento exponencial, chegando no máximo 15000ms .
Essa estratégia não é particular do PM2 e é amplamente utilizada, principalmente para gerenciar aplicações com conexões externas.

# Assistindo a Alterações

Com o PM2, também é possível observar alterações em um arquivo! O que isso quer dizer? Quer dizer que ele pode ficar observando um diretório específico e, caso haja alterações nos arquivos, ele automaticamente reinicia os processos.
Essa funcionalidade é bem legal, principalmente em ambiente de desenvolvimento, onde você está constantemente fazendo atualizações no código e quer visualizar o resultado imediatamente. Então, em vez de ficar parando e executando sua aplicação manualmente toda vez, você pode dizer para o PM2 fazer para você quando algum arquivo for modificado.
Para utilizar esse recurso, basta utilizar o parâmetro --watch no comando start:

\$ pm2 start index.js --name <NOME_DO_PROCESSO> --watch

Ou através do ecosystem , especificando quais diretórios deverão ser observados:

apps:

- name: app
  script: ./index.js
  watch: ./

## PM2  com outras linguagens

Conforme dito no começo, utilizamos como exemplo aplicações em Node.js, em que o PM2 é muito popular e temos mais familiaridade. Porém podemos utilizá-lo em outras linguagens.
Assim como o Heroku, o PM2 consegue inferir a linguagem e, consequentemente, saber como executá-la. Ao inferir que uma aplicação é em Node.js, por exemplo, ele sabe que deverá executar o arquivo com o comando node .
Essa relação é feita a partir de uma lista de "interpretadores". Nessa lista, estão presentes a extensão e o respectivo interpretador da linguagem que está sendo utilizada em um projeto. A lista default é:

{
".sh": "bash",
".py": "python",
".rb": "ruby",
".coffee" : "coffee",
".php": "php",
".pl" : "perl",
".js" : "node"
}

Caso seja necessário executar uma aplicação em um formato diferente dos conhecidos pelo PM2, é possível utilizar a flag --interpreter e passar o interpretador desejado:

\$ pm2 start hello-world.py --interpreter=python

# PM2 com Heroku

Isso mesmo, podemos fazer um deploy no hewroku utilizando os recursos disponiveis do PM2

O PM2 possui, além do CLI, um módulo para ser utilizado como dependência do seu projeto. Esse módulo é utilizado para usar as vantagens do PM2 dentro de um container.
Lembra que o Heroku usa essa arquitetura de containers com os Dynos ?
Então, esse é o caminho! Vamos lá.
Primeiro, devemos adicionar o módulo ao nosso projeto. Estando na raiz do projeto, utilizamos o npm ou o yarn para instalá-lo:

\$ npm install pm2

Utilizaremos esse módulo para dar start no projeto. No Heroku, precisamos definir esse script no package.json , que ficará assim:

// ...
"scripts": {
  "start": "pm2-runtime start ecosystem.config.yml"
}
// ...

Perceba que aqui estamos utilizando o módulo pm2-runtime , e não o CLI.
O pm2-runtime tem o objetivo de agrupar seus aplicativos em um ambiente de produção adequado do Node.js. Ele resolve problemas de execução de aplicativos Node.js dentro dos containers, como controle de fluxo de processo, monitoramento automático de aplicativos etc.
Agora, precisamos criar o arquivo ecosystem que estamos referenciando no package.json .
Para isso, basta criar um arquivo na raiz do projeto. Esse arquivo deve ter o mesmo nome que está no script de start, ou seja, o nome do arquivo da raiz deve ser ecosystem.config.yml .
Em seguida, vamos colocar as configs desejadas. Por exemplo:


apps:

- name: app
  script: ./index.js


Agora, é só seguir com o deploy no Heroku!

# Para aprofundar mais!     Modo Cluster + Heroku

Uma feature bem legal de se explorar é o cluster mode . Como os Dynos são provisionados com multicores, conseguimos melhorar a resiliência e a performance de nossos apps .

Para isso, basta adicionar as propriedades que vimos anteriormente:

apps:

- name: app
  script: ./index.js
  exec_mode: cluster
  instances: max

  Modo Cluster + Heroku + Dashboard
Outra funcionalidade bem bacana é integrar o dashboard do PM2 ao Heroku para, além de ter um bom ambiente, sermos capazes de controlá-lo e monitorá-lo!

Assim como os passos anteriores, seguindo a proposta do PM2, o dashboard é bem simples de configurar. Basta adicionar as chaves (credenciais) à nossa aplicação que subirá no Heroku .
As credenciais ficam disponíveis no dashboard do PM2.
O vídeo abaixo é um passo a passo de como consultá-las:

Tendo as chaves em mãos, ou melhor, no clipboard , basta adicioná-las como variáveis de ambiente para nosso app do Heroku, conforme já aprendemos:
Nota : O comando abaixo pode ser escrito em uma linha apenas, excluindo a necessidade de ter \ ao final de cada linha.

\$ heroku config:set \
 PM2_PUBLIC_KEY=CHAVE_PUBLICA \
 PM2_SECRET_KEY=CHAVE_PRIVADA \
 PM2_MACHINE_NAME=NOME_DO_SERVER \
 --app NOME_DO_APP_NO_HEROKU

 Temos três variáveis no comando acima: uma chave pública ( PM2_PUBLIC_KEY ), uma privada ( PM2_SECRET_KEY ) e um nome para identificar a máquina ( PM2_MACHINE_NAME ) que você está utilizando.
Após setar as variáveis, o Dyno automaticamente será reiniciado e, ao atualizar o dashboard, ele já estará mostrando as métricas do ambiente.
⚠️ Lembre-se : sempre mantenha credenciais e outros dados sensíveis em variáveis de ambientes. Dessa forma, garantimos a segurança e manutenção das aplicações.


Exercícios
Hora de pôr a mão na massa!
back-end
Antes de começar: versionando seu código
Para versionar seu código, utilize o seu repositório de exercícios. 😉
Abaixo você vai ver exemplos de como organizar os exercícios do dia em uma branch, com arquivos e commits específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.
Abra a pasta de exercícios:
Copiar
$ cd ~/trybe-exercicios
Certifique-se de que está na branch main e ela está sincronizada com a remota. Caso você tenha arquivos modificados e não comitados, deverá fazer um commit ou checkout dos arquivos antes deste passo.
Copiar
$ git checkout main
$ git pull
A partir da main, crie uma branch com o nome exercicios/28.2 (bloco 28, dia 2)
Copiar
$ git checkout -b exercicios/28.2
Caso seja o primeiro dia deste módulo, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir back-end
$ cd back-end
Caso seja o primeiro dia do bloco, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir bloco-28-deployment
$ cd bloco-28-deployment
Crie um diretório para o dia e o acesse na sequência:
Copiar
$ mkdir dia-2-deploy-gerenciadores-de-processos
$ cd dia-2-deploy-gerenciadores-de-processos
Os arquivos referentes aos exercícios deste dia deverão ficar dentro do diretório ~/trybe-exercicios/back-end/block-28-deployment/dia-2-deploy-gerenciadores-de-processos. Lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

Verifique os arquivos alterados/adicionados:
Copiar
$ git status
On branch exercicios/28.2
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercicio-1

Adicione os arquivos que farão parte daquele commit:
Copiar
# Se quiser adicionar os arquivos individualmente
$ git add caminhoParaArquivo

# Se quiser adicionar todos os arquivos de uma vez, porém, atente-se
para não adicionar arquivos indesejados acidentalmente
$ git add --all

Faça o commit com uma mensagem descritiva das alterações:
Copiar
$ git commit -m "Mensagem descrevendo alterações"
Você pode visualizar o log de todos os commits já feitos naquela branch com git log.
Copiar
$ git log
commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercicios/28.2)
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 17:48:01 2019 -0300

    Exercicio 2 - mudando o evento de click para mouseover, tirei o alert e coloquei pra quando clicar aparecer uma imagem do lado direito da tela

commit c0701d91274c2ac8a29b9a7fbe4302accacf3c78
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 16:47:21 2019 -0300

    Exercicio 2 - adicionando um alert, usando função e o evento click

commit 6835287c44e9ac9cdd459003a7a6b1b1a7700157
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 15:46:32 2019 -0300

    Resolvendo o exercício 1 usando eventListener
Agora que temos as alterações salvas no repositório local precisamos enviá-las para o repositório remoto. No primeiro envio, a branch exercicios/28.2 não vai existir no repositório remoto, então precisamos configurar o remote utilizando a opção --set-upstream (ou -u, que é a forma abreviada).
Copiar
$ git push -u origin exercicios/28.2
Após realizar o passo 9, podemos abrir a Pull Request a partir do link que aparecerá na mensagem do push no terminal, ou na página do seu repositório de exercícios no GitHub através de um botão que aparecerá na interface. Escolha a forma que preferir e abra a Pull Request. De agora em diante, você repetirá o fluxo a partir do passo 7 para cada exercício adicionado, porém como já definimos a branch remota com -u anteriormente, agora podemos simplificar os comandos para:
Copiar
# Quando quiser enviar para o repositório remoto
$ git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
$ git pull
Quando terminar os exercícios, seus códigos devem estar todos commitados na branch exercicios/28.2, e disponíveis no repositório remoto do GitHub. Pra finalizar, compartilhe o link da Pull Request no canal de Code Review para a monitoria e/ou colegas revisarem. Faça review você também, lembre-se que é muito importante para o seu desenvolvimento ler o código de outras pessoas. 🤜🏼🤛🏼


Agora, a prática
Vamos colocar em prática todo o conteúdo que vimos. Para isso, faremos alguns exercícios práticos utilizando os principais recursos do PM2.
Exercício 1 : Crie uma API simples que retorne uma mensagem. Feito isso, gerencie seus processos da seguinte maneira:
Crie UM processo no PM2 utilizando o CLI;
Restart e recarregue o processo utilizando o CLI do PM2 (lembre-se que há comandos distintos para cada um);
Pare o processo;
(Bônus) - Escalone para mais 5 processos;
(Bônus) - Defina para 3 a quantidade de processos;
Remova o processo da listagem do PM2 ;

Exercício 2 : Crie um arquivo ecosystem . O arquivo configurará o PM2 para:
Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua aplicação;
Ativar o modo cluster e configurar a quantidade de processos rodando para o máximo possível;
Reiniciar o processo sempre que ele alcançar o consumo de 100MB de memória.

Exercício 3 : Explorando variáveis de ambiente:
Adicione à API o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta ou outro comportamento que preferir;
Adicione ao arquivo ecosystem do exercício anterior dois contextos de variáveis: env_prod e env_homolog .
Execute o processo utilizando o contexto prod . Em seguida, execute o processo utilizando o contexto homolog . Valide se o comportamento foi alterado.

Exercício 4 : Adicione monitoramento à sua API:
Crie uma conta no PM2;
Adicione o monitoramento à API dos exercícios anteriores, utilizando o comando do CLI do PM2;
Verifique se o dashboard web está exibindo as informações de sua API.













