const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listaStudante = (student) => {
  const listaSkill = Object.keys(student);
  for(index in listaSkill){
    console.log(`${listaSkill[index]}, Nivel: ${student[listaSkill[index]]}`);
  }
}
console.log('student1');
listaStudante(student1);

console.log('student2');
listaStudante(student2);
