import {PokemonListResponse, Pokemon} from '../types/types';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (): Promise<PokemonListResponse> => {
  const response = await fetch(`${BASE_URL}/pokemon/`);
  return response.json();
};

export const fetchPokemonById = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}/`);
  return response.json();
};
