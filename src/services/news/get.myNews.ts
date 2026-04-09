import { INews } from '@/interfaces/news.Interface';
import { serverFetch } from '@/utils/serverFetch';

export interface NewsResponse {
  allNews: INews[];
  count: number;
}

export const myNews = async (
  status: string = 'APPROVED'
): Promise<NewsResponse> => {
  try {
    const res = await serverFetch.get(`post/my?status=${status}`, {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }

    const result = await res.json();

    if (result.success) {
      return {
        allNews: result.data.posts || [],
        count: result.data.count || 0,
      };
    }

    return { allNews: [], count: 0 };
  } catch (err) {
    return {
      allNews: [],
      count: 0,
    };
  }
};
