const casa = {
  cor: 'azul',
  tamanho: 'grande',
  cidade: 'cabofrio'
}

const casa1 = {
  cor: 'verde',
  tamanho: 'pequena',
  cidade: 'buzios'
}

const casa2 = {
  cor: 'rosa',
  tamanho: 'media',
  cidade: 'saquarema'
}

const listar = (imoveis) => {
  const arrayCasa = Object.keys(imoveis)
  for(index in arrayCasa){
    console.log(`${arrayCasa[index]}, do tipo ${imoveis[arrayCasa[index]]}`);
  }
}
console.log('casa');
listar(casa);

console.log('casa1');
listar(casa1);

console.log('casa2');
listar(casa2);

// metodo de values para Objetos

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};
// Sem Object.values
console.log(listSkillsWithFor(student));


const listSkillsWithValues = (student) => Object.values(student);
// Com Object.values
console.log(listSkillsWithValues(student));