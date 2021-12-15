const pushForm = (result) => {
  document.getElementById('endereco').value = result.logradouro
  document.getElementById('bairro').value = result.bairro
  document.getElementById('cidade').value = result.localidade
  document.getElementById('estado').value = result.uf
  document.getElementById('ddd').value = result.ddd
}

// const validationCep =  (cep) => {
//   cep.length < 8 || cep.length > 9
//   ? false : true
// }


const getCep = async() => {
  const cep = document.getElementById('cep').value;
  const cepUrl = `http://viacep.com.br/ws/${cep}/json/`;
    const consult = await fetch(cepUrl)
    const result = await consult.json()
      if(result.hasOwnProperty('erro')){
        alert('Digite Novamente, Cep não encontrado')
        console.log(result)
      }else {
        console.log(result)
        pushForm(result)
      }
}

const getInputcep = async () => {
  const valueCep = document.getElementById('cep')
  valueCep.addEventListener('focusout', getCep)
}
getInputcep()

