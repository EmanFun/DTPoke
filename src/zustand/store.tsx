
import { createStore, useStore } from 'zustand';
import { createContext, useContext, useRef, ReactNode } from 'react';
import axios from 'axios';
import { StoreState } from '../types';
import Promise from 'bluebird';




const StoreContext = createContext<StoreState | null>(null);

const store = createStore<StoreState>((set) => ({
  pokemons: [],
  pokemon: {},
  fetchPokemons: async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
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
                return obj.type.name;
            }),
            moves: result.moves.map((obj: any)=>{
              return obj.move.name;
            }),
            abilities: result.abilities.map((obj: any)=>{
              return obj.ability.name;
            })
          }
      });
      set({ pokemons: results });
    } catch (error) {
      console.error(error);
    }
  },
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