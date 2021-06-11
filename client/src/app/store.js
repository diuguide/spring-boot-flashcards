import { configureStore } from '@reduxjs/toolkit';
import cardRepoReducer from '../features/cardRepo/cardRepoSlice';

export const store = configureStore({
  reducer: {
    cardRepo: cardRepoReducer,
  },
});
