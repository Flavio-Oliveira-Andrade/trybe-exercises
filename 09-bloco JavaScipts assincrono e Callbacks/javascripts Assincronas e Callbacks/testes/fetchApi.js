// 3 a função getPlanet abaixo  imprime o planeta  Marte de forma sincrona , modifique  getPlanet
// de forma que marte seja impresso  assincronamente, depois de 4 segundos

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
   setTimeout(() => console.log("Returned planet: ", mars),4000);
};

getPlanet(); // imprime Marte depois de 4 segundos