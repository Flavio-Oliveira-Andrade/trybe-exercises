/*
 * Essa função pode ajudar a incluir os elementos na tela.
 * Não existe obrigação em usá-la e vocês podem alterá-la a vontade.
 */
function appendItemList(text, flagImageUrl) {
  const newLi = document.createElement('li');
  const newImg = document.createElement('img');
  const newSpan = document.createElement('span');
  newImg.src = flagImageUrl;
  newImg.className = 'flag';
  newSpan.innerHTML = text;
  newLi.appendChild(newImg);
  newLi.appendChild(newSpan);
  document.querySelector('ul').appendChild(newLi);
}

async function getCountries() {
  const countries = await fetch('https://restcountries.eu/rest/v2/all').then((res) => res.json());
  countries.sort((a, b) => a.translations.br < b.translations.br ? 1 : -1 ).forEach(({
    translations: { br }, capital, flag, languages,
  }) => {
    const languagesNames = languages.map(({ name }) => name).join(', ');
    const newContryText = `${br} cuja capital é ${capital} possui como línguas oficiais ${languagesNames}`;
    appendItemList(newContryText, flag);
  });
}

window.onload = function () {
  getCountries();
};
