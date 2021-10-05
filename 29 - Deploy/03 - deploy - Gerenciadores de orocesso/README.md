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