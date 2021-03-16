let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia','Ceará', 'DistritoFederal', 'EspíritoSanto', 'Goiás', 'Maranhão', 'MatoGrosso', 'MatoGrossoDoSul', 'MinasGerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'RioDeJaneiro', 'RioGrandeDoNorte', 'RioGrandeDoSul', 'Rondônia', 'Roraima', 'SantaCatarina', 'SaoPaulo', 'Sergipe', 'Tocantins'];

let sigla = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];



function createElementOptionEstate(){
  let getElementOptions = document.querySelector('#station');
    for (let i = 0; i < estados.length; i += 1){
      let elementEstado = estados[i];
      let elementoption = document.createElement('option');
        elementoption.innerHTML = elementEstado;
        elementoption.value = sigla[i]
          getElementOptions.appendChild(elementoption);

  }

}
createElementOptionEstate();



// function createElementOptionEstate(){
//   let getElementOptions = document.querySelector('#station');
//   for (i = 0; i <= estados.length; i++) {
//     $('select').append(`<option>${estados[i]}</option>`);
//   }