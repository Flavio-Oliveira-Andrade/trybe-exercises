const creatObject = (nome) => ({ nome:`${nome}`, email: `${nome.replace(/ /g,'_')}@trybe.com`});
const newEmployees = () => {
  const employees = {
    id1: creatObject('Pedro Guerra'),
    id2: creatObject('Luiza Drumond'),
    id3: creatObject('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees())


