import {useState, useEffect, useCallback} from 'react';
import {Pokemon} from '../types/types';
import {fetchPokemonById, fetchPokemonList} from '../services/pokemonService';

const usePokemonDetails = () => {
  const [pokemonCount, setPokemonCount] = useState<number>(0); // State to hold the total number of Pokémon
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null); // State to hold data of the current Pokémon
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInitialData = useCallback(async () => {
    try {
      setLoading(true);
      const {count} = await fetchPokemonList();
      setPokemonCount(count);

      const firstPokemonResponse = await fetchPokemonById(1);
      setPokemonData(firstPokemonResponse);

      setLoading(false);
    } catch (e) {
      setError('Error fetching data');
      setLoading(false);
    }
  }, [setPokemonCount, setPokemonData, setLoading, setError]);

  useEffect(() => {
    fetchInitialData(); // Invoke the fetch initial data function when component mounts
  }, [fetchInitialData]);

  // Function to change the displayed Pokémon to a random one
  const changePokemon = useCallback(async () => {
    try {
      setLoading(true);

      const randomId = Math.floor(Math.random() * 151) + 1;
      const randomPokemonResponse = await fetchPokemonById(randomId);
      setPokemonData(randomPokemonResponse);

      setLoading(false);
    } catch (e) {
      setError('Error fetching random Pokémon');
      setLoading(false);
    }
  }, [setPokemonData, setLoading, setError]);
  // Return state variables and function to change Pokémon
  return {pokemonCount, pokemonData, loading, error, changePokemon};
};

export default usePokemonDetails;
