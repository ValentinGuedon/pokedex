function Navbar({ pokemonIndex, setIndex, pokemonList }) {
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

    console.log(pokemonIndex);

    return (
        <div>
            <button onClick={handleClickPrevious}>Précédent</button>
            <button onClick={handleClickNext}>Suivant</button>
        </div>
    );

}

export default Navbar;