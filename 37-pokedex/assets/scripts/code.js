const API_POKEDEX = 'https://pokeapi.co/api/v2/pokedex/2/'
const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'
const pokedex = document.querySelector('.pokedex')

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#a1a1a1',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F0F0F0',
  fighting: '#d4d3dc',
  normal: '#fff'
}

async function getNames() {  
  const response = await fetch(API_POKEDEX)
  const json = await response.json()
  const entries = json.pokemon_entries
    
  return entries?.map(entrie => ({
    name: entrie.pokemon_species.name
  }))
}

async function getData(list) {
    const promises = list.map(async item => {
      const res = await fetch(API_POKEMON + item.name)
      const json = await res.json()
      
      const pokemon = {
        name: capitalize(json.name),
        id: numeralize(json.id),
        type: json.types[0].type.name,
        img: json.sprites.other['official-artwork'].front_default
      }
      return pokemon
    })

    const pokemonsData = await Promise.all(promises)

    pokemonsData.forEach(pokemon => {
      createPokemon(pokemon)
    })
}

function capitalize (name) {
  name = name.charAt(0).toUpperCase() + name.slice(1)
  return name
}

function numeralize (num) {
  if(num < 10) {num = `#00${num}`}
  if(num > 10 && num < 100) {num = `#0${num}`}
  if(num >= 100) {num = `#${num}`}

  return num
}

async function getPokemon() {
  const list = await getNames()
  getData(list)
}

function createPokemon (pokemon) {
  const pokemonContainer = document.createElement('DIV')
  pokemonContainer.classList = 'pokemon'
  pokemonContainer.style.backgroundColor = colors[pokemon.type]
  pokemonContainer.style.backgroundImage = `url('${pokemon.img}')`

  pokemonContainer.innerHTML = `
    <div class="pokemon__info">
      <small class="pokemon__id" style="background-color: ${colors[pokemon.type]}aa;">${pokemon.id}</small>
      <h2 class="pokemon__name">${pokemon.name}</h2>
      <small class="pokemon__type">Type: ${pokemon.type}</small>
    </div>
`

  pokedex.appendChild(pokemonContainer)
}

getPokemon()