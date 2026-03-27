import { serverFetch } from '@/utils/serverFetch';

export async function toggleBookmark(newsId: string) {
  const res = await serverFetch.post(`bookmark/add/${newsId}`);

  const result = await res.json();

  return result;
}
