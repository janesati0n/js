const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 899; i++) {
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon');
    const label = document.createElement('span')
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}

/* for (let i = 0; i < 899; i++) {
    const pokemon = document.createElement('img')
    pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/", i, ".png"
    pokemon.title = i
    container.appendChild(pokemon);
} */
