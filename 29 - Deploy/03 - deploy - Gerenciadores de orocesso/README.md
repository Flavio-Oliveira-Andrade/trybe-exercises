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
