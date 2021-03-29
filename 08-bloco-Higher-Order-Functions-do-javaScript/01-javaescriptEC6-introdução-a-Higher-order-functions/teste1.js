// const button = document.querySelector('#signup-button');

// // minha função de primeira classe;
// const registerUser = () => {
//   // código para registrar a nova pessoa usuária;
//   console.log('Registrado com sucesso!');
// };

// // minha função de segunda classe;
// button.addEventListener('click', registerUser);


// const repet = (number, action) => {
//   for (let i = 0; i <= number; i += 1){
//     action(i );
//   }
// }
// repet(5, console.log);


const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});