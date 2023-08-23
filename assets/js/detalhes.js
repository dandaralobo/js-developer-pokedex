const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function obterDetalhes() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(async (response) => {
            const dados = await response.json()

            const [body] = document.getElementsByTagName('body')
            body.className = `${dados.types[0].type.name}`

            const pokemonNomeElemento = document.getElementById('pokemonNome')
            pokemonNomeElemento.textContent = dados.name

            const pokemonIdElemento = document.getElementById('pokemonId')
            pokemonIdElemento.innerHTML += `${dados.id}`.padStart(3, '0')

            const tipos = dados.types.map(item => `<span class='tipo ${item.type.name}'>${item.type.name}</span>`).join('')

            const tiposElemento = document.getElementById('tipos')
            tiposElemento.innerHTML += tipos

            const imageElemento = document.getElementById('pokemonImage')
            imageElemento.src = dados.sprites.other.dream_world.front_default;

            const detalhesElemento = document.getElementById('detalhes')
            detalhesElemento.innerHTML += `
             <li>Species: ${dados.species.name}</li>
             <li>Heigh: ${dados.height}</li>
             <li>Weight: ${dados.weight}</li>
             <li>Abilities: ${dados.abilities.map(item => item.ability.name).join(', ')}</li>
            `
        })

}

obterDetalhes()


