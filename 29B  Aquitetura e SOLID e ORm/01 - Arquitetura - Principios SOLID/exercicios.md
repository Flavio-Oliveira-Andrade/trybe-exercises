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
$ mkdir bloco-29-arquitetura-solid-e-orm
$ cd bloco-29-arquitetura-solid-e-orm
Crie um diretório para o dia e o acesse na sequência:
Copiar
$ mkdir dia-1-arquitetura-principios-solid
$ cd dia-1-arquitetura-principios-solid
Os arquivos referentes aos exercícios deste dia deverão ficar dentro do diretório ~/trybe-exercicios/back-end/block-29-arquitetura-solid-e-orm/dia-1-arquitetura-principios-solid. Lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

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
$ mkdir bloco-29-arquitetura-solid-e-orm
$ cd bloco-29-arquitetura-solid-e-orm
Crie um diretório para o dia e o acesse na sequência:
Copiar
$ mkdir dia-1-arquitetura-principios-solid
$ cd dia-1-arquitetura-principios-solid
Os arquivos referentes aos exercícios deste dia deverão ficar dentro do diretório ~/trybe-exercicios/back-end/block-29-arquitetura-solid-e-orm/dia-1-arquitetura-principios-solid. Lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

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

## GAbarito

Agora, a prática
Vamos seguir a linha de refatoração neste exercício também! O exercício será em dupla. Junte-se com a sua e mande ver! Vamos começar criando uma aplicação pequena e aplicando os princípios de SOLID nela para que possamos transformar esse módulo em uma API.
O código que você vai usar como base é o seguinte:
index.js
Copiar
const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem("plants", plants);
};

const getPlants = () => {
  const plants = JSON.parse(localStorage.getItem("plants"));
  return plants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== id);
  localStorage.setItem("plants", JSON.stringify(newPlants));
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem("plants", JSON.stringify(filteredPlants));
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  createdPlants++;
  localStorage.setItem("createdPlants", String(createdPlants));
  localStorage.setItem("plants", JSON.stringify(defaultPlants));
  return defaultPlants;
};
Esse módulo, basicamente, controla um catálogo de plantas para um instituto de ciências. Esse código precisa ser adaptado para o padrão SOLID para transformá-lo em uma API, e é isso que você irá fazer.
Foque em dois princípios: Single Responsibility e Dependency Inversion , esses são os mais importantes.
Iniciando
Inicie um projeto Express :
Copiar
$ npm init -y
$ npm install express body-parser
Crie um arquivo separado para as funções, um plants.js (elas virarão nossos controllers).
Remova as interações com localStorage e manipule apenas a variável defaultPlants .
Precisamos ter os endpoints:
GET /plants : retorna todas as plantas;
GET /plant/:id : retorna uma planta com o id;
DELETE /plant/:id : deleta uma planta com o id;
POST /plant/:id : sobrescreve a planta com id;
POST /plant : cria uma planta nova;
GET /sunny/:id : retorna uma planta que precisa de sol com o id.
Bônus
Crie um banco de dados para persistir os dados das plantas, ao invés de utilizar uma variável.
Divida a aplicação em camadas.