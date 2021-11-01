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
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const student = (obj) => {
  let total = 0;
  const array = Object.keys(obj)
  for(key in array){
    total += obj[array[key]].numeroEstudantes
  }

  console.log('total de estudante ' +total);

}
student(allLessons);