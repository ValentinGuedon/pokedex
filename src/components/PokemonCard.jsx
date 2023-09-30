import React from 'react'

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Psyduck",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    },
    {
        name: "mew",
    },
];


function PokemonCard() {
    const pokemon = pokemonList[1];

    return (
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<span>???</span>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}



export default PokemonCard;