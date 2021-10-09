// ./index.js

function setApproved(students) {
  const studentsWithLetterGrade = students.map((student) => {
    const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
      if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
      else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
      else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
      else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
      else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
      else discipline.letterGrade = 'F';

      return discipline;
    });

    return {
      name: student.name,
      disciplines: disciplinesWithLetterGrade,
    };
  });

  const approvedStudents = studentsWithLetterGrade.filter(({ disciplines }) =>
    disciplines.every((discipline) => discipline.grade > 0.7));

  /* Finja que o console.log é algo que atualiza uma base de dados */
  approvedStudents.map(({ name, disciplines }) => {
    console.log(`A pessoa com nome ${name} foi aprovada!`);
    disciplines.map(({ name, letterGrade }) =>
      console.log(`${name}: ${letterGrade}`));
  });
}

/* Abaixo temos um exemplo de execução */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

// ./index.js

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(({ name, grade }) => {
    let letterGrade;

    if (grade >= 0.9) letterGrade = 'A';
    else if (grade >= 0.8) letterGrade = 'B';
    else if (grade >= 0.7) letterGrade = 'C';
    else if (grade >= 0.6) letterGrade = 'D';
    else if (grade >= 0.1) letterGrade = 'E';
    else letterGrade = 'F';

    return { name, grade, letterGrade };
  })});

/* "Determinar" */
const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/* Exemplo de execução */
// ...

/*
  Não se esqueça que é necessário exportar ao final as
  funções para que você possa testa-las de forma unitária
*/
module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};


/* Apoio para a função `getGradeLetter`, lembraremos disso mais a frente */
const GRADE_DICT = {
  9: 'A',
  8: 'B',
  7: 'C',
  6: 'D',
  1: 'E',
  };

  const gradeKeys = Object.keys(GRADE_DICT);

  /* Função menor para remover o uso excessivo de `if{}else`s */
  const getGradeLetter = (gradeNumber) => {
    let letterGrade = 'F';

    for (let i = 0; i < gradeKeys.length; i += 1) {
      if (gradeNumber >= gradeKeys[i]) {
        letterGrade = GRADE_DICT[gradeKeys[i]];
        break;
      }
    }

    return letterGrade;
  };

  /* Coletar notas */
  const getLetterGrades = ({ name, grade }) => ({
    name,
    grade,
    letterGrade: getGradeLetter(grade)});

  /* "Converter" */
  const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
    name,
    school,
    disciplines: disciplines.map(getLetterGrades)});

  /* Exemplo de execução */
  // ...

  /*
    Vamos exportar também nossa nova função de `Coletar notas` para testes
  */
  // module.exports = {
  //   percentageGradesIntoLetters,
  //   approvedStudents,
  //   updateApprovalData,
  //   setApproved,
    getLetterGrades,
  // };

  // ./tests/unit/getLetterGrades.test.js

const { expect } = require('chai');

const { getLetterGrades } = require('../../index');

const disciplinesDict = {
  mathematics: 'matemática',
};

describe('Testando a função "getLetterGrades"', function () {
  describe('quando a nota é maior ou igual a 0.9', function () {
    it('retorna "A"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.9 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('A');
    });
  });

  describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', function () {
    it('retorna "B"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.8 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('B');
    });
  });

  describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', function () {
    it('retorna "C"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.7 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('C');
    });
  });

  describe('quando a nota é maior ou igual a 0.6 e menor que 0.7', function () {
    it('retorna "D"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.6 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('D');
    });
  });

  describe('quando a nota é maior ou igual a 0.1 e menor que 0.6', function () {
    it('retorna "E"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.1 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('E');
    });
  });

  describe('quando a nota é menor que 0.1', function () {
    it('retorna "F"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.05 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('F');
    });
  });
});

// ./index.js

// ...

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
  school});

/* "Determinar" */
const approvedStudents = ({ school, disciplines }) =>
  disciplines.every(({ grade }) =>
    (school === 'Standard' ? grade >= 0.7 : grade >= 0.8));

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

// ...

/* Abaixo temos o exemplo de execução com algumas adições */
const students = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: 'Hogwarts',
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

// setApproved(students);

// ./index.js

/* Apoio para a função `setApproved` */
const SCHOOL_DATA = {
  Standard: {
    approvalGrade: 0.7
  },
  Hogwarts: {
    approvalGrade: 0.8
  }
};

// ...

/* "Determinar" */
const approvedStudents = (disciplines, { approvalGrade }) =>
  disciplines.every(({ grade }) => grade > approvalGrade);

// ...

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(({ disciplines, school }) => approvedStudents(disciplines, SCHOOL_DATA[school]))
    .map(updateApprovalData);
}

// ./tests/unit/approvedStudents.test.js

const { expect } = require('chai');

const { approvedStudents } = require('../../index');

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testando a função "approvedStudents"', function () {
  const APPROVAL_GRADE = { approvalGrade: 0.7 };

  describe('quando todas as notas são maiores que o critério de aprovação', function () {
    it('retorna "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(true);
    });
  });

  describe('quando todas as notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(false);
    });
  });

  describe('quando parte das notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(false);
    });
  });
});