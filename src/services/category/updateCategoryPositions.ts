'use server';
import { serverFetch } from '@/utils/serverFetch';

export const updateCategoryPositions = async (
  payload: { id: string; position: number }[]
) => {
  const res = await serverFetch.patch('category/update/position', payload);

  if (!res.ok) {
    return { success: false, message: 'Failed to update position' };
  }

  return res.json();
};
