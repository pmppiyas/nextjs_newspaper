import { ICategory } from '@/interfaces/news.Interface';
import { serverFetch } from '@/utils/serverFetch';

export const updateCategory = async (
  id: string,
  payload: Partial<ICategory>
) => {
  const res = await serverFetch.patch(`category/${id}`, payload);

  if (!res.ok) {
    return { success: false, message: 'Failed to update category' };
  }

  return await res.json();
};
