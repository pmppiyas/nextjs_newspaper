import { serverFetch } from '@/utils/serverFetch';
import { ICategory } from '@/interfaces/news.Interface';

interface ICategoryResponse {
  success: boolean;
  message: string;
  data: ICategory[];
}

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

    const result: ICategoryResponse = await res.json();

    return {
      success: result.success || false,
      message: result.message || '',
      data: result.data || [],
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      success: false,
      message: 'Internal Server Error',
      data: [],
    };
  }
};
