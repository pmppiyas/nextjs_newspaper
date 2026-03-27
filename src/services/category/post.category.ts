'use server';

import { serverFetch } from '@/utils/serverFetch';

export async function createCategory(payload: {
  name: string;
  description?: string;
}) {
  const res = await serverFetch.post('category', payload);

  const result = await res.json();

  return result;
}
