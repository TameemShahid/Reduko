import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../data/boardSlice';

const store = configureStore({
  reducer: {
    board: boardSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
