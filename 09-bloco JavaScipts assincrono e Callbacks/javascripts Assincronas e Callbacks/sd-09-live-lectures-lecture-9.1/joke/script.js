const appendJoke = (joke) => {
  const li = document.createElement('li');
  const ul = document.querySelector('ul');

  li.innerText = joke;
  ul.appendChild(li);
}

const fetchJoke = () => {
  
  const param = { headers: { Accept: 'application/json' } };
  
  fetch('https://icanhazdadjoke.com/search?term=spider', param)
    .then((response) => {
      response.json()
        .then((data) => {
          const joke = data.results[0].joke;
          appendJoke(joke);
        });
    });

}

window.onload = () => fetchJoke();