let allPokemons = [];
let containerEl = document.querySelector(".container");

function fetchPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => res.json())
    .then((body) => {
      allPokemons = body;
      console.log(allPokemons);
    })
    .then(() => renderPokemons());
}

fetchPokemons();

function renderPokemons() {
  const results = allPokemons.results.slice(0, 50);

  results.forEach((result) => {
    let pokemonInfo = [];
    fetch(`${result.url}`)
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        pokemonInfo = body;
      })
      .then(() => renderCard(pokemonInfo));
  });
}

function renderCard(pokemon) {
  let pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon-card");
  pokemonEl.innerHTML = `<div class="image"><img src="${
    pokemon.sprites.front_default
  }" /></div><div class="name">${pokemon.name.toUpperCase()}</div><div class="stats"></div>`;
  containerEl.append(pokemonEl);
  renderStats(pokemon, pokemonEl);
}

function renderStats(pokemon, pokemonEl) {
  const stats = pokemon.stats;
  stats.forEach((stat) => {
    let statEl = document.createElement("div");
    statEl.classList.add("stat");
    pokemonEl.querySelector(".stats").append(statEl);
    statEl.innerHTML = `<div class="stat-top"><div class="stat-name">${stat.stat.name.toUpperCase()}</div><div class="stat-score">${
      stat.base_stat
    }</div></div><div class="stat-progress"><div class="stat-complete" data-score=${
      stat.base_stat
    }></div></div>`;

    statEl.querySelector(".stat-complete").style.width =
      stat.base_stat > 100 ? 100 : stat.base_stat + "%";
  });
}
