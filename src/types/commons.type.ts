export type Pokemon = {
    id: number;
    name: string;
    image: string;
    attack: number;
    height: number;
    types: string[];
    moves: string[];
    abilities: string[];
}

export type Response = {
    name: string;
    url: string;
}