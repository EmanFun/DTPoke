import { Pokemon } from ".";


export interface PokemonAPiFirstResponse {
  name: string;
  url: string;
}



export interface PokemonApiSecondResponse {
    id: number;
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
    name: string;
    stats: Array<{ stat: { name: string }; base_stat: number }>;
    height: number;
    types: Array<{ type: { name: string } }>;
    moves: Array<{ move: { name: string } }>;
    abilities: Array<{ ability: { name: string } }>;
  }
export interface StoreState {
    backup: Pokemon[];
    pokemons: Pokemon[];
    pokemon: object;
    types: string[];
    moves: string[];
    abilities: string[];
    fetchPokemons: () => Promise<void>;
    orderByAttack: ( action: string)=> void;
    orderByAlphabetic: ( action: string)=> void;
    orderByHeight: ( action: string)=> void;
    filterByType: (action: string)=> void;
    filterByAbility: (action: string) => void;
    simulateFetchData: ()=> void;
}


export interface CardComponent {
    pokemon: Pokemon;
}

export interface RenderCardComponent {
    pokemons: Pokemon[];
}