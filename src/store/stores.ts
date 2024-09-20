import { configureStore } from '@reduxjs/toolkit';
import taskApi from './api/taskApi';

const stores = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof stores.getState>;

export default stores;
