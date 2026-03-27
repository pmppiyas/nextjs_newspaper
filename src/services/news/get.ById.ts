import { serverFetch } from '@/utils/serverFetch';

export async function getNewsById(newsId: string) {
  const res = await serverFetch.get(`post/${newsId}`);

  if (!res.ok) {
    return {
      news: {},
      message: 'Something went wrong',
    };
  }

  const result = await res.json();

  return {
    news: result.data,
    message: result.message,
  };
}
