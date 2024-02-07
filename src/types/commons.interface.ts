import { Pokemon } from ".";

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