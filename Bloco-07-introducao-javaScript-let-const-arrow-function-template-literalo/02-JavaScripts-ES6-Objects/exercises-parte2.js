const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 11,
  professor: 'Maria Clara',
  turno: 'noite',
};

const alllesson = Object.assign({}, {lesson1, lesson2, lesson3}); // se não colocar as chaves vai subscrever os objetos com ptopiedades iguais
console.log(alllesson)
const getStudent = (lesson) => {
  const keys = Object.keys(lesson)
  let total = 0;
  for (let i = 0; i < keys.length; i += 1){
    let correntkey = (keys[i])
    total += lesson[correntkey].numeroEstudantes

  }
  return total
}

console.log(getStudent(alllesson))




