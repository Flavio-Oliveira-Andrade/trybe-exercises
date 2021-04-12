const imc = (peso, altura) => (peso / (altura * altura))
.toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// Faça uma lista com as suas frutas favoritas  { spread operator }
const specialFruit = ['abacate', 'limao', 'mação'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['laranja', 'goiba', 'uva', 'abacaxi' ];

const fruitSalad = (fruit, additional) => {
 return [...specialFruit, ...additional]
 .sort()
};

console.log(fruitSalad(specialFruit, additionalItens));