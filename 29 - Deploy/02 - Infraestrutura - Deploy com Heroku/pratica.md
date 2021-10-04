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
A partir da main, crie uma branch com o nome exercicios/29.1 (bloco 29, dia 1)
Copiar
$ git checkout -b exercicios/29.1
Caso seja o primeiro dia deste módulo, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir back-end
$ cd back-end
Caso seja o primeiro dia do bloco, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir bloco-29-deployment
$ cd bloco-29-deployment
Crie um diretório para o dia e o acesse na sequência:
Copiar
$ mkdir dia-1-infraestrutura-deploy-com-heroku
$ cd dia-1-infraestrutura-deploy-com-heroku
Os arquivos referentes aos exercícios deste dia deverão ficar dentro do diretório ~/trybe-exercicios/back-end/block-29-deployment/dia-1-infraestrutura-deploy-com-heroku. Lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

Verifique os arquivos alterados/adicionados:
Copiar
$ git status
On branch exercicios/29.1
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
commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercicios/29.1)
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
Agora que temos as alterações salvas no repositório local precisamos enviá-las para o repositório remoto. No primeiro envio, a branch exercicios/29.1 não vai existir no repositório remoto, então precisamos configurar o remote utilizando a opção --set-upstream (ou -u, que é a forma abreviada).
Copiar
$ git push -u origin exercicios/29.1
Após realizar o passo 9, podemos abrir a Pull Request a partir do link que aparecerá na mensagem do push no terminal, ou na página do seu repositório de exercícios no GitHub através de um botão que aparecerá na interface. Escolha a forma que preferir e abra a Pull Request. De agora em diante, você repetirá o fluxo a partir do passo 7 para cada exercício adicionado, porém como já definimos a branch remota com -u anteriormente, agora podemos simplificar os comandos para:
Copiar
# Quando quiser enviar para o repositório remoto
$ git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
$ git pull
Quando terminar os exercícios, seus códigos devem estar todos commitados na branch exercicios/29.1, e disponíveis no repositório remoto do GitHub. Pra finalizar, compartilhe o link da Pull Request no canal de Code Review para a monitoria e/ou colegas revisarem. Faça review você também, lembre-se que é muito importante para o seu desenvolvimento ler o código de outras pessoas. 🤜🏼🤛🏼




Agora, a prática
Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado! Para isso, vamos fazer o processo de deploy .
Exercício 1 : Crie uma API simples no node utilizando express . No arquivo index.js , crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!". Faça o deploy no Heroku utilizando o CLI.

Exercício 2 : Agora, modifique a API para responder a uma nova mensagem:
Crie uma nova variável de ambiente com um texto qualquer;
Modifique o código da sua API para que ela responda na rota get / com o mesmo texto contido na variável criada no passo anterior.

Exercício 3 : Agora vamos criar um Procfile.
Crie uma cópia do arquivo index.js com o nome indexProcfile.js ;
No novo arquivo, altere a mensagem de resposta da API para "Procfile funciona mesmo!" ;
Crie um Procfile para iniciar sua aplicação a partir do novo arquivo de indexProcfile.js .

Exercício 4 . Simule o deploy em multiambientes (produção e homologação). Para isso:
Renomeie o remote do deploy dos exercícios anteriores para homolog ;
Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod ;
Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.

Exercício 5 : Faça deploy de uma aplicação React.
Crie uma aplicação React utilizando create-react-app ;
Crie um novo app utilizando o buildpack mars/create-react-app;
Então, faça o deploy do app no Heroku.
Bônus
Exercício 6 : Agora que você chegou até aqui, pegue os projetos que você criou anteriormente e faça deploy deles no Heroku! Compartilhe suas URLs com a turma para que as pessoas possam acessá-los de outros lugares.

Exercício 7 : Simule a estratégia de se terem multiambientes utilizando variáveis de ambiente específicas. Para isso:
Crie outros ambientes a partir dos códigos dos exercícios anteriores;
Faça alterações para que os projetos se comportem de maneiras diferentes em ambientes diferentes, de acordo com uma variável de ambiente. Pode ser uma mensagem diferente, ou um comportamento alterado, por exemplo;
Teste seus apps acessando cada um dos ambientes.