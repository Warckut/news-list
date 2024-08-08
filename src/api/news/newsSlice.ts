import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News } from './types';
import { NEWS_URL, PAGES } from './const';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: NEWS_URL,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<News[], void>({
      queryFn: async () => {
        try {
          const results = await Promise.all(
            PAGES.map((page) =>
              fetch(`${NEWS_URL}${page}.json`).then((res) => res.json()),
            ),
          );

          const data = (results.flat(1) as News[])
            .slice(0, 100)
            .sort((a, b) => b.time - a.time);

          return { data };
        } catch (error) {
          return {
            error: {
              status: 500,
              statusText: 'Internal Server Error',
              data: 'error',
            },
          };
        }
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
