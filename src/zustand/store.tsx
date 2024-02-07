
import { createStore, useStore } from 'zustand';
import { createContext, useContext, useRef, ReactNode } from 'react';
import axios from 'axios';
import { StoreState } from '../types';
import Promise from 'bluebird';




const StoreContext = createContext<StoreState | null>(null);

const store = createStore<StoreState>((set) => ({
  backup: [],
  pokemons: [],
  abilities: [],
  moves: [],
  types: [],
  pokemon: {},
  fetchPokemons: async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=50&limit=50');
      const abilitiesResponse: string[] = [];
      const movesResponse: string[] = [];
      const typesResponse: string[] = [];
      const data = response.data.results.map((poke: object)=>{
        return  axios.get(poke.url);
      })
      const results = await Promise.map(data, async (item: any) =>{
          let result = await item;
          result = result.data;
          return {
            id: result.id,
            image: result.sprites.other.dream_world.front_default,
            name: result.name, 
            attack: result.stats.filter(el=> el.stat.name === 'attack').map((obj: any)=> obj.base_stat)[0],
            height: result.height,
            types: result.types.map((obj: any)=>{
              if(!typesResponse.includes(obj.type.name)){
                typesResponse.push(obj.type.name)
              }
              return obj.type.name;
            }),
            moves: result.moves.map((obj: any)=>{
              if(!movesResponse.includes(obj.move.name)){
                movesResponse.push(obj.move.name)
              }
              return obj.move.name;
            }),
            abilities: result.abilities.map((obj: any)=>{
              if(!abilitiesResponse.includes(obj.ability.name)){
                abilitiesResponse.push(obj.ability.name);
              }
              return obj.ability.name;
            })
          }
      });
      set({ backup: results, pokemons: results.slice(0,5), types: typesResponse, moves: movesResponse, abilities: abilitiesResponse  });
    } catch (error) {
      console.error(error);
    }
  },//------------------------ordenamientos-------------------

  orderByAttack: ( action)=> set((state)=>({ 
    pokemons: action === 'H_ATTACK' 
    ? state.pokemons.sort((a,b) => b.attack - a.attack).slice(0,5) 
    : state.pokemons.sort((a,b) => a.attack - b.attack).slice(0,5) 
  })),

  orderByAlphabetic: (action) => set((state)=>({
    pokemons: action === 'A_Z' 
    ? state.pokemons.sort((a, b)=> a.name.localeCompare(b.name) ).slice(0,5)
    : state.pokemons.sort((a, b)=> b.name.localeCompare(a.name) ).slice(0,5)
  })),

  orderByHeight: ( action) => set((state)=>({ 
    pokemons: action === 'H_HEIGHT' 
    ? state.pokemons.sort((a, b) => b.height - a.height).slice(0,5)
    : state.pokemons.sort((a, b) => a.height - b.height).slice(0,5),
  })),

  filterByAbility:(action) => set((state) =>({
    pokemons: action === 'reload' ? state.backup.slice(0,5) : state.backup.filter((item) => item.abilities.includes(action)).slice(0,5)
  })),

  filterByType: (action) => set((state)=>({
    pokemons: action === 'reload' ? state.backup.slice(0,5) : state.backup.filter((item)=> item.types.includes(action)).slice(0,5)
  })),

  simulateFetchData: () => set((state) => ({
    pokemons: [...state.pokemons, ...state.backup.slice(state.pokemons.length , state.pokemons.length - 1 + 5)],
  })),

  
}));

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const storeRef = useRef<StoreState | null>(null);
  if (!storeRef.current) {
    storeRef.current = store;
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreInContext = (selector?: any) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Missing StoreProvider');
  }
  return useStore(store, selector);
};

export { StoreProvider, useStoreInContext };