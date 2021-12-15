// 4 sumponhs que voce precise simular uma mensagem enviada  do robo CuriosiTy
// envia para terra a temperatura em marte, gastando um tempo variavel de ate 5 segundos
// para que termine o envio . crie uma função
// sendMarsTemperature, que imprime a temperatura em marte .


const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
}


sendMarsTemperature(messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo