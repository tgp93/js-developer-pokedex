
// Function that creates each pokemon card in the Pokedex list and returns it
function createPokemon(pokemon) {
    // Adds a li element (pokemon card) with a pokemon type class
    let li = document.createElement('li');
    li.classList.add('pokemon');
    li.classList.add(pokemon.type);

    // Adds the pokemon number to the card
    let number = document.createElement('span');
    number.classList.add('number');
    number.textContent = `#${pokemon.number}`;
    li.appendChild(number);

    // Adds the pokemon name to the card
    let name = document.createElement('span');
    name.classList.add('name');
    name.textContent = pokemon.name;
    li.appendChild(name);

    // Adds a div to the card to put the pokemon types and image
    let div = document.createElement('div');
    div.classList.add('detail');

    // Adds an ordered list to the div with the pokemon types
    let ol = document.createElement('ol');
    ol.classList.add('types');
    pokemon.types.forEach((type) => {
        let liType = document.createElement('li');
        liType.classList.add('type');
        liType.classList.add(type);
        liType.textContent = type;
        ol.appendChild(liType);
    });
    div.appendChild(ol);

    // Adds the pokemon image to the div
    let img = document.createElement('img');
    img.src = pokemon.photo;
    img.alt = pokemon.name;
    div.appendChild(img);

    // Appends the div to the card
    li.appendChild(div);

    // Adds an event listener to the card to open a function on click
    // The function serves to open and populate with the clicked pokemon info
    li.addEventListener('click', () => {
        showInfoDialog(pokemon);
    })

    return li;
}