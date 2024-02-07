import { useContext } from 'react';
import { useStore } from 'zustand';
import {StoreContext} from './store';
import { StoreState } from '../types';
type SelectorType = (state: StoreState) => StoreState;

export const useStoreInContext = (selector?: SelectorType) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Missing StoreProvider');
  }
  return useStore(store, selector);
};
