import { configureStore } from '@reduxjs/toolkit';
// import reducers from './reducers';
import ItemsSlice from '../items/ItemsSlice';

export const store = configureStore({
  //   reducer: reducers,
  reducer: {
    items: ItemsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
