import { serverFetch } from '@/utils/serverFetch';
import { ICategory } from '@/interfaces/news.Interface';

export const getAllCategories = async (): Promise<ICategoryResponse> => {
  try {
    const res = await serverFetch.get('category', {
      next: {
        revalidate: 0,
        tags: ['category'],
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }

    const result = await res.json();

    return {
      success: result.success || false,
      message: result.message || '',
      categories: result.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: 'Internal Server Error',
      data: [],
    };
  }
};
