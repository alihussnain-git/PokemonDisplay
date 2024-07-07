export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonListResponse {
  count: number;
  results: {
    url: string;
  }[];
}
