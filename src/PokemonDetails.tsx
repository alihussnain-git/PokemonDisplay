import React from 'react';
import usePokemonDetails from './hooks/usePokemonDetails';
import LoadingComponent from './components/LoadingComponent';
import ErrorComponent from './components/ErrorComponent';
import PokemonDisplay from './components/PokemonDisplay';

const PokemonDetails = () => {
  const {pokemonCount, pokemonData, loading, error, changePokemon} =
    usePokemonDetails();

  // Conditional rendering based on loading and error states
  return (
    <>
      {loading && <LoadingComponent />}
      {error && <ErrorComponent error={error} />}
      {!loading && !error && (
        <PokemonDisplay
          pokemonCount={pokemonCount}
          pokemonData={pokemonData}
          changePokemon={changePokemon}
        />
      )}
    </>
  );
};

export default PokemonDetails;
