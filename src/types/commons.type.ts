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
export type Stats = {
    base_stat: number;
    effort: number;
    stat: Stat;
}

export type Stat = {
    name: string ;
    url: string
}


export type Types = {
    slot: number;
    type: Type;
}

export type Type = {
    name: string;
    url: string;
}

export type Moves = {
    move: Move;
    version_group_details: object;
}

export type Move = {
    name: string;
    url: string;
}

export type Abilities = {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}
export type Ability = {
    name: string;
    url: string;
}
