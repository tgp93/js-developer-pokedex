
// Function to populate dialog with clicked pokemon information
function showInfoDialog(pokemon) {
    // Gets dialog element from index.html, adds the clicked pokemon type as a class and shows dialog
    let pokeDialog = document.getElementById('pokemon-dialog');
    pokeDialog.classList.add(pokemon.type);
    pokeDialog.showModal();

    // Adds a wrapping container in the dialog, to remove when the dialog is closed
    let container = document.createElement('div');
    container.classList.add('dialog-container');
    pokeDialog.appendChild(container);

    // Adds an event listener to remove the container element and the dialog pokemon type class
    // on close, either by pressing Esc or clicking the close button
    pokeDialog.addEventListener('close', () => {
        container.remove();
        pokeDialog.classList.remove(pokemon.type);
    })

    // Adds a wrapping div in the container to centralize the close button via CSS
    let buttonCenter = document.createElement('div');
    buttonCenter.classList.add('buttoncenter');
    container.appendChild(buttonCenter);

    // Adds a close button in the wrapping div with a click event listener to close the dialog
    let closeButton = document.createElement('button');
    closeButton.classList.add('closebutton');
    closeButton.textContent = "Go back";
    closeButton.addEventListener('click', () => {
        pokeDialog.close();
    })
    buttonCenter.appendChild(closeButton);

    // Adds the pokemon name in the container
    let name = document.createElement('h2');
    name.classList.add('dialogname');
    name.textContent = pokemon.name;
    container.appendChild(name);

    // Adds the pokemon number in the container
    let number = document.createElement('h5');
    number.classList.add('dialognumber');
    number.textContent = "#" + pokemon.number;
    container.appendChild(number);

    // Adds an ordered list in the container with the pokemon types into it
    let ol = document.createElement('ol');
    ol.classList.add('dialogtypes');
    pokemon.types.forEach((type) => {
        let liType = document.createElement('li');
        liType.classList.add('dialogtype');
        liType.classList.add(type);
        liType.textContent = type;
        ol.appendChild(liType);
    });
    container.appendChild(ol);

    // Adds the pokemon image in the container
    let img = document.createElement('img');
    img.classList.add('pokeimg');
    img.src = pokemon.photo;
    img.alt = pokemon.name;
    container.appendChild(img);

    // Adds a div in the container to put extra pokemon information
    let div = document.createElement('div');
    div.classList.add('dialogdiv');
    container.appendChild(div);

    // Adds a <br> element to the div to put a blank line on its top
    let divspace = document.createElement('br');
    div.appendChild(divspace);

    // Adds a title to the div
    let charbanner = document.createElement('h4');
    charbanner.classList.add('charbanner');
    charbanner.textContent = "Characteristics";
    div.appendChild(charbanner);

    // Adds the pokemon height to the div
    let charheight = document.createElement('p');
    charheight.classList.add('charheight');
    charheight.textContent = "Height: " + pokemon.height + "m";
    div.appendChild(charheight);

    // Adds the pokemon weight to the div
    let charweight = document.createElement('p');
    charweight.classList.add('charweight');
    charweight.textContent = "Weight: " + pokemon.weight + "kg";
    div.appendChild(charweight);

    // Adds the pokemon experience to the div
    let charxp = document.createElement('p');
    charxp.classList.add('charxp');
    charxp.textContent = "XP When Defeated: " + pokemon.xp_defeated;
    div.appendChild(charxp);

    // Adds an ordered list to the div with the pokemon abilities into it
    let olAbilities = document.createElement('ol');
    olAbilities.classList.add('charabilities');
    olAbilities.textContent = "Abilities: ";
    pokemon.abilities.forEach((ability) => {
        let liAbility = document.createElement('li');
        liAbility.classList.add('charability');
        liAbility.classList.add(ability);
        liAbility.textContent = "[" + ability + "]";
        olAbilities.appendChild(liAbility);
    });
    div.appendChild(olAbilities);

    // Adds a <br> element to the div to put a blank line on its bottom
    let divspace2 = document.createElement('br');
    div.appendChild(divspace2);
}