function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//seu codigo aqui
// array dias fornecidos, poderia ser gerado pelo for
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

 function createDaysOfTheMonth(){
    let getDaysList = document.querySelector('#days');
     for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');
          if(day === 24 || day === 31){
            dayItem.className = 'day holiday'
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
          }else if (day === 4 || day === 11 || day === 18){
            dayItem.className = 'day friday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
          }else if (day === 25){
            dayItem.className = 'day holiday friday'
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
          } else {
            dayItem.className = 'day';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
          }

     }
 }
//chamar a função para criar a lista da ul li
createDaysOfTheMonth();

function createHolidayButton(buttonname){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId ="btn-holiday";
  let backgroundColorButton = 'purple';

  newButton.innerHTML = buttonname;
  newButton.id = newButtonId
  newButton.style.backgroundColor = backgroundColorButton
  buttonContainer.appendChild(newButton);
}
// chamar a função para criar a button da div com a
// classe buttons-container, passando nome do botao por paramentro
createHolidayButton('Feriados')

// função que adicione ao botão "Feriados" um evento de "click"
// que muda a cor de fundo dos dias que possuem a classe "holiday"
// que este botão possua também a lógica inversa.
// Ao ser clicado novamente ele retorna com a cor "rgb(238,238,238)"

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'pink';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
displayHolidays();

// função  parâmetro a string "Sexta-feira"
// crie dinamicamente um botão com o nome "Sexta-feira"
// Adicione a este botão o ID "btn-friday"
// Adicione este botão como filho/filha
// tag <div> com classe "buttons-container"

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday'
  let backgroundColorButton = 'Purple';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  newButton.style.backgroundColor = backgroundColorButton
  buttonContainer.appendChild(newButton)
}
createFridayButton('sexta-feira')

// adicione ao botão "Sexta-feira" um evento de "click"
// que modifica o texto exibido nos dias que são Sexta-feira
// lógica inversa. retorna à configuração inicial

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

// vExercício 6
// Implemente duas funções que criem um efeito de "zoom".
// Ao passar o ponteiro do mouse em um dia do mês no calendário,
// o texto desse dia deve aumentar e, quando o ponteiro do mouse
// sair do dia, o texto deve retornar ao tamanho original.

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
    event.target.style.color = 'green';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
    event.target.style.color = '#666';
  })
};

dayMouseOver();
dayMouseOut();

// Exercício 7
// função que adiciona uma tarefa personalizada ao calendário
// função deve receber como parâmetro a string com o nome da tarefa
// (ex: "cozinhar") e criar dinamicamente um elemento com a tag
//  <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha
// da tag <div> que possui a classe "my-tasks"

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');


  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);

};

newTaskSpan('Projeto:');
