function fetchPaises(name) {
  return fetch(`https://restcountries.eu/rest/v2name/${name}`)
    .then((response) => {
      response.json()
        .then((pais) => {
          const ul = document.querySelector('ul');
          const li = document.querySelector('li');
        });
    }),
  }



window.onload = fetchPaises('brasil')