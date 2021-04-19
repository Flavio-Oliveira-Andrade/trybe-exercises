# Dojo - Countries API

Esse repositório contém a descrição do exercício prático para a Turma 10! Faremos um [Dojo](https://pt.wikipedia.org/wiki/Coding_Dojo) para que esse exercício seja resolvido em grupos.

## Como vai funcionar?

Vocês serão divididos e divididas em **grupos**. Cada grupo ficará em uma breakout room do Zoom. Todas as pessoas do grupo irão contribuir para o código, na seguinte dinâmica:

Teremos um exercício que deverá ser resolvido pelo grupo.

A cada 7 minutos teremos uma *pessoa piloto*. Essa pessoa deverá compartilhar sua tela e será a responsável por escrever o código. As outras pessoas serão co-pilotos, e deverão dizer à pessoa piloto o que ela deve digitar.

A pessoa piloto não pode falar nada, somente escutar. 🙊👂

Quando se passarem 7 minutos, avisaremos para vocês trocarem as pessoas pilotos. A pessoa que estava pilotando deverá fazer um commit e um push para a branch do grupo.

A nova pessoa piloto deverá fazer um pull e compartilhar sua tela para continuar a dinâmica.

A ordem das pessoas pilotos será definida de forma alfabética, ou seja, em um grupo com Maria, João, José e Pedro, a ordem será:
- João
- José
- Maria
- Pedro

### Antes de começar
Todas as pessoas do grupo deverão clonar esse projeto.

A **primeira** pessoa piloto do grupo deverá criar a branch do grupo com a seguinte nomenclatura: `equipe-n` sendo n o número da breakout room. Por exemplo, se eu faço do grupo 9 e sou a primeira pessoa piloto:

```
git checkout -b equipe-9
```

### Quando der os 7 minutos
A pessoa piloto deverá parar no ponto em que está e fazer um commit e um push para a branch da equipe:
```
git add .
git commit -m "Incomplete code, switching pilots"
git push origin equipe-9
```

A nova pessoa piloto deverá compartilhar sua tela e baixar o código:
```
git checkout equipe-9
git pull origin equipe-9
```

## Instruções do exercício

Vocês deverão utilizar a [API dos países](https://restcountries.eu/) para fazer uma listagem de todos os países do mundo :)

### Requisito 1
Exiba na tela uma lista contendo o nome dos países em português. Por exemplo, você deve exibir Estados Unidos ao invés de United States e Espanha ao invés de Spain.

> Dica: observem a API. Vocês conseguem essas informações fazendo uma requisição para ela

### Requisito 2
Além do nome do países, inclua também o nome de suas capitais, por exemplo: `Brasil cuja capital é Brasília`

> Lembrando que isso deve ser feito para todos os países

### Requisito 3
Inclua, antes do nome do país, uma imagem contendo a sua bandeira. Por exemplo: `🇧🇷 Brasil cuja capital é Brasília`

> A imagem da bandeira também pode ser obtida através da API

### Requisito 4
Exiba também, as línguas oficiais faladas naquele país. Observe que alguns países podem conter mais de 1 língua nativa. Por exemplo: `🇨🇦 Canada cuja capital é Ottawa, possui como línguas oficiais English e French`

> A formatação da frase não precisa ser exatamente essa. O mais importante é conseguir recuperar os dados da API :)

### Requisito 5 - Bônus
Ordene os países de forma alfabética reversa. Ou seja, de Z até A.

> A API já retorna em ordem alfabética, vocês deverão inverter a ordem

### Requisito 6 - Bônus
Caprichem no CSS 💅🏽
