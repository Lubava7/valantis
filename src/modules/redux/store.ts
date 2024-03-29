import { configureStore } from '@reduxjs/toolkit';
import ItemsSlice from '../items/ItemsSlice';

export const store = configureStore({
  reducer: {
    items: ItemsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
