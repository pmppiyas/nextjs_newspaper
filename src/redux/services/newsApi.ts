import { env } from '@/config/env.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${env.BACKEND_URL}/`,
  }),

  tagTypes: ['News'],

  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: (params) => ({
        url: 'post',
        method: 'GET',
        params: params,
      }),

      transformResponse: (res) => res.data,
      providesTags: ['News'],
    }),
  }),
});

export const { useGetAllNewsQuery } = newsApi;
