Você vai precisar usar o que aprendeu sobre getElementBy e querySelector para colocar em prática.
Antes de iniciar, crie um arquivo HTML na pasta exercises/5_1 e copie o código abaixo:

Crie uma branch com o nome exercises/javascript-dom-eventos-e-web-storage.1 (bloco javascript-dom-eventos-e-web-storage, dia 1)

Copiar
$ git checkout -b exercises/javascript-dom-eventos-e-web-storage.1
Crie um diretório exercises e, dentro dele, um diretório javascript-dom-eventos-e-web-storage_1. O caminho completo para o diretório a partir da raiz do projeto deverá ser exercises/javascript-dom-eventos-e-web-storage_1.
Copiar
$ mkdir -p exercises/javascript-dom-eventos-e-web-storage_1
$ cd exercises/javascript-dom-eventos-e-web-storage_1
$ pwd
<path_to_your_repo>/exercises/javascript-dom-eventos-e-web-storage_1
Crie um arquivo com um nome descritivo para cada exercício. Os arquivos devem estar dentro da pasta exercises/javascript-dom-eventos-e-web-storage_1, mas lembre-se de fazer os commits a partir da pasta raiz do seu projeto!
Copiar
$ git status
On branch exercises/javascript-dom-eventos-e-web-storage.1
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

* Gabarito dos exercícios
Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.

Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
As pessoas devem ter o poder de alterar:

Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).

Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

Bônus
As propriedades descritas acima são obrigatórias , mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo a melhora da experiência da pessoa que lê em sua página.
