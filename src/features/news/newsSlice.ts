import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { News } from './types';
import type { RootState } from '~/store/types';
import { newsApi } from '~/api/news/newsSlice';

const newsAdapter = createEntityAdapter<News>();

export const UsersSlice = createSlice({
  name: 'news',
  initialState: {
    news: newsAdapter.getInitialState({}),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(newsApi.endpoints.getNews.matchFulfilled, (state, { payload }) => {
      newsAdapter.addMany(state.news, payload);
    }).addMatcher(newsApi.endpoints.getNews.matchRejected, () => {

    });
  },
});

export const selectNews = newsAdapter.getSelectors<RootState>((state) => state.NewsReducer.news);

export default UsersSlice.reducer;
