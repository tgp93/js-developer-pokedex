
// Gets the HTML ordered list by its id, which is going to be used to list the pokemons
const pokemonList = document.getElementById('pokemonList')
// Gets a button used to load more pokemons into the list
const loadMoreButton = document.getElementById('loadMoreButton')

// Defines the maximum number of pokemon, the offset and the limit
const maxRecords = 151
const limit = 10;
let offset = 0;

// Function to get pokemons information from the API, put each in an array position
// and append each one to an HTML ordered list
// Arguments are: offset, which is an integer to define the starting point and
// limit, which is an integer to define the number of pokemons to load
function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemons.forEach((pokemon) => {
            pokemonList.appendChild(createPokemon(pokemon));
        });
    })
}

// Calls the function to load the pokemons
loadPokemonItems(offset, limit)

// Adds event listener to load more pokemons on the load more button
// If the desired pokemon number is less than the remaining pokemons,
// it shows the remaining pokemons and removes the button
loadMoreButton.addEventListener('click', () => {
    offset += limit

    const recordsQtyNextPage = offset + limit

    if (recordsQtyNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit)
    }
})