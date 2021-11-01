# O  que vamos aprender ?
Nessa aula iremos aprender como é feita a comunicação entre maquinas através da rede, usando o tão famoso protocolo TCP/IP. Alem disso , apresentaremos um pouco mais sobre como essas informações trafegam na rede.
- Usar o pacote Net do node.js para criar aplicações que trafegam mesagens atraves do sockets.

## Por que isso é importante ?
Socket permitem a comunicaçõ entre computadores. Um exemplo de sockets usandos para comunicação as APIs que desenvolvemos em aulas passadas. A comunicação feita entre um site e uma API( que esta em servidor remoto) é feita atraves de um socket.

essa tecnologia existe na maioria dos sistemas operacionais e linguagens de programação , possibilitando a quem desenvolve o estabelicimento de comunicação de aplicações que necessitam, trasmitir/receber dados atraves da internet e, tambem , desenvolver serviços de rede, como servidores web, FTP, SSh ou qualquer outro baseado em TCP/IP

### Conteudo de estudos
### O que são sockets ?

Hoje em dia existem muitas tecnologias que permitem a troca de mensagens entre computadores. Uma das tecnologias mais utilizadas para essa comunicação sao sockets.

Um socket é um mecanismo de comunicação  usado normalmente para implementar um sistema de cliente e servidor , sendo o cliente quem requisita um servidor quem executa esse serviço, assim como as APIs, que permitem a troca sw messagens entre maquinas/aplicações.

## Como Isso Funciona
Imagine  que, Por exemplo , precisamos desenvolver uma aplicação que funcione como uma 'sala' de chat. Na pratica, essa aplicação ira receber uma conexão dos clientes/usuariose, posteriormente, se um cliente enviar uma mensagem , o servidor irá envia-la para todos os soutros clientes para que a menssagem seja exibida para todo mundo. Ou seja, um site pode precisar abrir uma conexão fixa e manter essa conexao aberta pór muitto tempoe , quando ela envia uma mensagem, essa mesma mensagem sera enviada para todas as outras pessoas usuarias, que também estão conectadas a esse servidor

Ou, por exemplo, imagine um sistema de alarme onde uma aplicaçao, no servidor, que fixca minitorando o estado de uma maquina .Quando essa conexão aativa . esses clientes podem ser aplicativos mobile  dos gestores , sites sistema desktop, etc. Ou seja: quando a maquina monitora (que gerencia o sitema de alarme) quebra. todo mundo que monito recebe um aviso
De tal forma  geral, sempre haverá, um serve e um cliente, ou seja, umm aplicação que cria um socket servidor e uma outra aplicação que implementa um cliente. Existem princilpalmente, dois tipos de sockets:
soctes streeam : tipicamente implementado via TCP
socket dgram: tipicamente implemetado via UDP

### Modelo OSI, TCP, e UDP
Modelo de camadas OSI

Para falarmos de TCP e UDP, precisamos falar um pouco sobre o Modelo OSI . O Modelo OSI (Open System Interconnection) é um modelo de rede de computador, referência da ISO , dividido em camadas de papéis. ISO é uma sigla para International Organization for Standardization , ou Organização Internacional para Padronização, em tradução livre. A ISO é uma entidade de padronização e normalização mundial que garante a qualidade de serviços, produtos, metodologias etc.
Antes de 1984, todos os dispositivos tinham sua própria forma de se conectar e comunicar uns com os outros. Isso inviabilizava muitos outros produtos que poderiam ter sido criados naquela época, sabe por quê? Imagine, ludicamente, que um carro não poderia se comunicar com um celular ou até mesmo com um outro carro, pois cada empresa tinha sua forma de se comunicar, através de computadores, celulares, relógios e por aí vai. Nada de comunicação entre aparelho nenhum! Não haveria comunicação tão pouco trabalhosa hoje em dia se não fosse o modelo OSI, que estabelece regras/padrões de comunicação entre dois dispositivos da rede, a serem seguidos independentemente das empresas envolvidas.
Por ser de referência, o modelo OSI serve de base para que ocorra a comunicação em qualquer tipo de rede, seja de curta, média ou longa distância. Além disso, por ser um sistema aberto, ele apresenta características como escalabilidade, interoperabilidade, portabilidade e compatibilidade.
O modelo OSI funciona através de uma pilha de protocolos, onde cada camada definine uma parte da comunicação entre as máquinas. Todas as ações necessárias para que ocorra a interconectividade dos dispositivos, no modelo OSI, foram divididas em sete camadas, nomeadas criativamente de 1 a 7:

### Camada 1: Física
É a camada que estabelece a comunicação real entre os dois dispositivos por meio físico, seja através do cabo de internet, seja através de onda de radiofrequência, como por exemplo a wifi, dentre outras.

### Camada 2: Enlace (ligação/link de dados)
Faz o controle de fluxo da transmissão dos dados, detectando e corrigindo erros do nível físico como instabilidades, interferências, e recebe/passa tudo para a camada física.

### Camada 3: Rede
Realiza o endereçamento/mapeamento dos dispositivos na rede, ou seja, quais os caminhos que as informações devem percorrer desde a origem até o destino.

### Camada 4: Transporte
A camada de transporte garante a confiança do pacote, o qual chegará na máquina com todos os dados necessários e enviados, sem perdas, erros ou duplicidade, além de obedecerem a uma sequência lógica. A unidade dessa camada é o segmento, e os protocolos de transporte são o TCP e o UDP.

### Camada 5: Sessão
É responsável por manter o controle de quando iniciar, gerenciar e terminar a conexão entre os hosts . Ou seja, é essa camada que controla as duas ou mais máquinas que estão se comunicando.

### Camada 6: Apresentação
Esta camada realiza a conversão dos formatos dos dados, de forma que sejam utilizados na transmissão. Há a compressão e criptografia para que o receptor possa entender os dados.

### Camada 7: Aplicação
É com essa camada, que são os softwares, que nós, desenvolvedores/usuários, interagimos no nosso dia a dia. Essa camada é, basicamente, a interface com que interagimos. É nela que o HTTP, SMTP, FTP etc. atuam.

# Como funcionam essas camadas?
O funcionamento, no dispositivo emissor, é da camada 7 até a 1. A camada de cima (7) vai passar dados para a de baixo (6), que fará o chamado "encapsulamento" dos dados, acrescentando informações de controle que dizem respeito a ela.
Assim, vai ocorrendo o encapsulamento dos dados camada a camada, da 7 para a 1. Começamos com dados e terminamos com bits, que serão transmitidos pelo meio físico (camada 1).
Quando a informação chega ao dispositivo de rede receptor ocorre o processo inverso, conhecido como "desencapsulamento". Os bits recebidos passam de camada para camada até se tornarem dados novamente.

### TCP IP
Apesar de o modelo OSI ser a referência para as redes e toda sua nomenclatura, a arquitetura TCP/IP é que implementa esse modelo na prática e está em uso hoje em dia, tanto nas redes internas (intranets) quanto na internet. A arquitetura TCP/IP é composta por apenas quatro camadas (formando a pilha da estrutura do protocolo). As camadas 5, 6 e 7 do modelo OSI foram mescladas para formar a camada de "Aplicação" do TCP/IP.
Já as camadas 3 e 4 do modelo OSI são similares às camadas 2 e 3 do TCP/IP, inclusive a camada de transporte do TCP/IP tem o mesmo nome, porém a camada 3 do modelo OSI (rede) no TCP/IP é chamada de "Internet".
Por fim, as camadas 1 e 2 do modelo OSI foram mescladas no TCP/IP para formar a camada de acesso aos meios ou acesso à rede. Veja a figura a seguir:

No TCP/IP não costumamos nos referir pelos números das camadas e sim pelos nomes delas, pois quando nos referimos pelo número da camada estamos falando do modelo OSI.

### REsumindo tudo o que falamos
- o Modelo OSi possui sete camadas
- o TCP/IP esta dividido em quatro camadas
- As camadas 1 e 2 do modelo OSI estão agregadas na camada 1 do TCP/IP ou, como é chamada, camada de acesso aos Meios;
- A camada 3 do modelo OSi (Redes) é chamada de Camada de transporte
- As camadas 5,6 e7 do  modelo OSI são agregadas em uma so camada no TCO/IP, a qual é chamada de Camada de Apliucação

### TCP e UDP

Nos protocolos TCP e UDP existe a camada 4 do modelo OSI (camada de transporte) e define-se nela como uma determinada informação é transmitida na rede.
Por essa convenção, numa máquina existem, teoricamente, 65.536 (2 elevado a 16) portas TCP que podem ser usadas pelas mais diversas aplicações/serviços (lembrando que as portas são virtuais, não existem físicamente no hardware). Lembra-se do nosso famoso " http://localhost:3000"? Pois bem, temos ai o protocolo HTTP, o endereço da nossa máquina, o localhost , ou 127.0.0.1 , e a nossa porta: 3000 .
Mas, voltando às nossas portas, poderíamos ter 65.536 aplicações/APIs distintas, executando simultaneamente na nossa máquina. Além das portas TCP, também temos, teoricamente, 65.536 portas UDP.

### TCP

No TCP, no estabelecimento de ligação entre o server e o cliente há um “pré-acordo” entre cliente e servidor denominado de Three Way Handshake ( SYN , SYN-ACK , ACK ). A máquina que está requisitando conexão à outra manda um pedido de sincronização (SYNchronize); a máquina receptora confirma esse recebimento (ACKnowledge) e responde com seu pedido de sincronização (SYNchronize), que é respondido pela máquina requisitante com uma confirmação (ACKnowledge). Basicamente, é como uma conversa:

- Cliente: `SYN` Quero me conectar!
- Servidor: `ACK` Mensagem recebida!
- Servidor: `SYN` Vamos nos conectar!
- Cliente: `ACK` Mensagem recebida!
