function Navbar({ pokemonList, pokemonIndex, setPokemonIndex }) {
  function handleClick(index) {
    return setPokemonIndex(index);
  }
  return (
    <>
      {/* <div>
        <button onClick={decrement}>Précedent</button>
        <button onClick={increment}>Suivant</button>
      </div> */}
      <h1>Liste de pokemon</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </ul>
    </>
  );
}

export default NavBar;
