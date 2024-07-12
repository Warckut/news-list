import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { News } from './types';
import type { RootState } from '~/store/store';

const usersAdapter = createEntityAdapter<News>();

export const UsersSlice = createSlice({
  name: 'news',
  initialState: {
    news: usersAdapter.getInitialState({
      ids: [0, 1, 2],
      entities: [
        { id: 1, title: 'news 1', content: 'content' },
        { id: 2, title: 'news 2', content: 'content' },
        { id: 3, title: 'news 3', content: 'content' },
      ],
    }),
  },
  reducers: {
    remove: (state, { payload }: PayloadAction<number>) => {
      usersAdapter.removeOne(state.news, payload);
    },
  },
});

export const selectNews = usersAdapter.getSelectors<RootState>((state) => state.NewsReducer.news);

export default UsersSlice.reducer;
