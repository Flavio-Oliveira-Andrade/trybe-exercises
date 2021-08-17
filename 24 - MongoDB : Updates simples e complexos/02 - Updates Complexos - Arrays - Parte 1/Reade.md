 cd ~/trybe-exercicios
  git checkout main
 git pull
  git checkout -b exercicios/24.2
   mkdir back-end
 cd back-end
  mkdir bloco-24-mongodb-updates-simples-e-complexos
 cd bloco-24-mongodb-updates-simples-e-complexos
  mkdir dia-2-updates-complexos-arrays-parte-1
 cd dia-2-updates-complexos-arrays-parte-1
  git status
On branch exercicios/24.2
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercicio-1
  # Se quiser adicionar os arquivos individualmente
 git add caminhoParaArquivo

# Se quiser adicionar todos os arquivos de uma vez, porém, atente-se
para não adicionar arquivos indesejados acidentalmente
 git add --all
  git commit -m "Mensagem descrevendo alterações"
   git log
commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercicios/24.2)
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
     git push -u origin exercicios/24.2
     # Quando quiser enviar para o repositório remoto
 git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
 git pull

 ### Agora, a prática

 db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);

### exercicios

Exercício 1: Adicione a categoria "superhero" ao filme Batman .
Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o dessa imagem:

Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .
Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o dessa imagem:

Exercício 3: Remova a categoria "action" do filme Batman .
Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o dessa imagem:

Exercício 4: Remova o primeiro elemento do array category do filme Batman .
Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o dessa imagem:

Exercício 5: Remova o último elemento do array category do filme Batman .
Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o dessa imagem:

Exercício 6: Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.
Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o dessa imagem:

Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone .
Após a execução do método .find().pretty() , o resultado do filme Batman e do filme Home Alone será parecido com o dessa imagem:

Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
Após a execução do método .find().pretty() , o resultado do filme Home Alone será parecido com o dessa imagem:

Exercício 9: Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone .
Dica : Para isso, leia aqui sobre o operador $ .
Após a execução do método .find().pretty() , o resultado do filme Home Alone será parecido com o dessa imagem:

Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:

Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o dessa imagem:
Exercício 11: Produza três querys para o filme Batman :
Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman ;
Adicione o campo actor , que deve ser um array com o valor Michael Caine , ao array de cast em que o campo character seja igual a Alfred ;
Adicione o campo actor , que deve ser um array com o valor Heath Ledger , ao array de cast em que o campo character seja igual a Coringa .
Dica : Para isso, leia aqui sobre o operador $ .
Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o dessa imagem:

Exercício 12: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton" , "Val Kilmer" e "George Clooney" , e deixe o array em ordem alfabética.
Dica : Para isso, leia aqui sobre o operador $ .
Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o dessa imagem: