import { serverFetch } from '@/utils/serverFetch';

export async function checkBookmark(newsId: string) {
  const res = await serverFetch.get(`bookmark/check/${newsId}`);

  const result = await res.json();

  return result;
}
