import { useContext } from 'react';
import { useStore } from 'zustand';
import {StoreContext} from './store';



export const useStoreInContext = <SelectorType = unknown>(selector?: SelectorType) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Missing StoreProvider');
  }
  return useStore(store, selector);
};
