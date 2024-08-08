import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsWithComments } from './types';
import { COMMENTS_URL } from './const';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: COMMENTS_URL }),
  endpoints: (builder) => ({
    getComments: builder.query<NewsWithComments, number>({
      query: (id) => `${id}.json`,
      transformResponse(baseQueryReturnValue: NewsWithComments) {
        baseQueryReturnValue.comments.sort((a, b) => b.time - a.time);
        return baseQueryReturnValue;
      },
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
