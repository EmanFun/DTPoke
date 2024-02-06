import { Pokemon } from ".";

export interface StoreState {
    pokemons: Pokemon[];
    pokemon: object;
    fetchPokemons: () => Promise<void>;
}


export interface CardComponent {
    pokemon: Pokemon;
}

export interface RenderCardComponent {
    pokemons: Pokemon[];
}