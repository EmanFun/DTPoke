import { Pokemon } from ".";



export interface CardComponent {
    pokemon: Pokemon;
}

export interface RenderCardComponent {
    pokemons: Pokemon[];
}