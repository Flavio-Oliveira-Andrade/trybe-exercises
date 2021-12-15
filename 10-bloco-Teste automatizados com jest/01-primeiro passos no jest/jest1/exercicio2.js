/*
A propriedade textContent define ou retorna o conteúdo de texto do nó especificado
e todos os seus descendentes .

Se você definir a propriedade textContent, quaisquer nós filhos
serão removidos e substituídos por um único nó Texto contendo a string especificada.

Observação: essa propriedade é semelhante à propriedade innerText ,
no entanto, existem algumas diferenças:

textContent retorna o conteúdo de texto de todos os elementos,
enquanto innerText retorna o conteúdo de todos os elementos, exceto
para os elementos <script> e <style>.
innerText não retornará o texto de elementos que estão ocultos com CSS (textContent irá).
Dica: Às vezes, essa propriedade pode ser usada no lugar da propriedade nodeValue ,
mas lembre-se de que essa propriedade retorna o texto de todos os nós filhos também.

Dica: Para definir ou retornar o conteúdo HTML de um elemento,
use a propriedade innerHTML .//A propriedade textContent define
ou retorna o conteúdo de texto do nó especificado e todos os seus descendentes .
*/
const typing = document.querySelector('[data-js="typing"]');
const mensages = ['sou fluente em javaScript', 'construo aplicações web com js puro'];

let msgIndex = 0;
let charIndex = 0;
let correntMsg = '';
let correntChar = '';

const type = () => {
  if (msgIndex === mensages.length){
    msgIndex = 0;
  }
  correntMsg = mensages[msgIndex];
  correntChar = correntMsg.slice(0, msgIndex ++)
  typing.textContent = mensages[0];

  if(correntChar.length === correntMsg.length){
    msgIndex++
    charIndex = 0;

  }
}


setInterval  (type, 200)
