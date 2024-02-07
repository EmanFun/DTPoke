import { useContext } from 'react';
import { useStore, StoreApi } from 'zustand';
import { StoreState } from '../types';
import { StoreContext } from './store';

export const useStoreInContext = (
  selector?: any
) => {
  const store = useContext(StoreContext) as StoreApi<StoreState> | null;

  if (!store) {
    throw new Error('Missing StoreProvider');
  }

  return useStore(store, selector ); // Proporciona un selector predeterminado
};