import { configureStore } from '@reduxjs/toolkit';
import NewsReducer from '~/features/news/newsSlice';

export const store = configureStore({
  reducer: {
    NewsReducer,
  },
});

