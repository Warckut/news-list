import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News } from './types';

const PAGES = [1, 2, 3, 4];

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.hnpwa.com/v0/newest/',
  }),
  endpoints: (builder) => ({
    getNews: builder.query<News[], void>({
      queryFn: async (_arg, _api, _opts, baseQuery) => {
        const results = await Promise.all(PAGES.map((page) => baseQuery(`/${page}.json`)));
        const errors = results.filter((res) => res.error).map((v) => v.error);
        const data = (results
          .map((v) => v.data)
          .flat(1) as News[])
          .slice(0, 100)
          .sort((a, b) => b.time - a.time);

        if (errors.length > 0)
          return { error: { status: 500, statusText: 'Internal Server Error', data: 'Coin landed on its edge!' } };
        return { data };
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
