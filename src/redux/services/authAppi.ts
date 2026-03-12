import { env } from '@/config/env.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${env.BACKEND_URL}/`,
  }),

  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: 'auth/register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation } = authApi;
