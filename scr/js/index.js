

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemoncard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>  {

    pokemon.addEventListener('click', () => {
        const cartaopokemonaberto = document.querySelector('.aberto')
        cartaopokemonaberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')


    })
})



