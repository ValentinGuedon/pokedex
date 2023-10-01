import PokemonCard from "./components/PokemonCard";
import { useState } from "react";


const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Psyduck",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
  },
  {
    name: "Mew",
  },
  {
    name: "RickNRoll",
    imgSrc:
      "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif",
  },
];

function App() {
  const [pokemonIndex, setIndex] = useState(0);

  console.log(pokemonIndex);

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setIndex(pokemonIndex + 1);
    }
  }

  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      setIndex(pokemonIndex - 1);
    }
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handleClickPrevious}>Précedent</button>
      <button onClick={handleClickNext}>Suivant</button>
    </div>
  );
}

export default App; 