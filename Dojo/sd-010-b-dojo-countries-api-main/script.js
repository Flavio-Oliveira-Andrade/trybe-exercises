/* 
 * Essa função pode ajudar a incluir os elementos na tela.
 * Não existe obrigação em usá-la e vocês podem alterá-la a vontade.
 */
function appendItemList(text) {
  const newLi = document.createElement('li');
  newLi.innerHTML = text;
  document.querySelector('ul').appendChild(newLi);
}

window.onload = function() {}