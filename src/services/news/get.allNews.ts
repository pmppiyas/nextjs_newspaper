'use server';

import { serverFetch } from '@/utils/serverFetch';

async function getAllNews(params: Record<string, string | undefined>) {
  const queryParams = new URLSearchParams(params as Record<string, string>);

  try {
    const response = await serverFetch.get(`post?${queryParams.toString()}`, {
      next: {
        tags: ['news'],
        revalidate: 0,
      },
    });

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      return {
        news: [],
        meta: {
          total: 0,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      news: [],
      meta: {
        total: 0,
      },
    };
  }
}

export default getAllNews;
