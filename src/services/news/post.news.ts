'use server';

import { serverFetch } from '@/utils/serverFetch';

export async function postNews(payload: FormData) {
  const res = await serverFetch.post('post/create', payload);

  const result = await res.json();

  return result;
}
