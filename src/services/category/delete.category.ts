'use server';
import { serverFetch } from '@/utils/serverFetch';

export const deleteCategory = async (id: string) => {
  const res = await serverFetch.delete(`category/${id}`);

  if (!res.ok) {
    return { message: 'Failed to delete category' };
  }

  const data = await res.json();

  return data;
};
