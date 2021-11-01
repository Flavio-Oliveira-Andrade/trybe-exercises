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

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

console.log(addNewKey(lesson2, 'turno', 'noite'));

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });