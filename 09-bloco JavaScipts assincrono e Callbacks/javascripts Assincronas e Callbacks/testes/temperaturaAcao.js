// 5 agora que voce fez a função que envia a temperatura de marte , sumponha que você consiga enviar
// para o robo  Curiosity o que  voce deseja fazer, uma vez obitida a com sucesso a temperatura de
//em amrte , logo adicione  na função sendMarsTemperature um callback que  contenha  as ações
// a serem tomads em cima da temperatura ,

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (onSuccess) => {
    const currentTemperature = getMarsTemperature();
    setTimeout(() => onSuccess(currentTemperature), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);