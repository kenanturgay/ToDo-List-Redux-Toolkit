import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todoReducer from './todoSlice';
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
