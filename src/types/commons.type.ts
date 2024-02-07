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

type ResolvedPromise<T> = {
    readonly status: 'fulfilled';
    readonly value: ResultPromise<T>;
  };
  
type RejectedPromise<E> = {
    readonly status: 'rejected';
    readonly reason: E;
};

type PendingPromise = {
    readonly status: 'pending';
};

export type ResultPromise  = {
    config: object;
    data: Data;
    headers: object;
    request: object;
    status: number;
    statusText: string;
}

type Data = {
    abilities: Abilities[];
    base_experience: number;
    forms: object[];
    game_indices: object[];
    height: number;
    held_items: object[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Moves[];
    name: string;
    order: number;
    past_abilities: [];
    past_types: [];
    species: object;
    sprites: object;
    stats: Stats[];
    weight: number;

}

export type PromiseResult<T, E = ResultPromise> =
    | ResolvedPromise<T>
    | RejectedPromise<E>
    | PendingPromise;