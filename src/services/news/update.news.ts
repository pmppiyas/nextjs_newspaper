import { serverFetch } from '@/utils/serverFetch';

export const updateNews = async ({
  newsId,
  payload,
}: {
  newsId: string;
  payload: FormData;
}) => {
  const res = await serverFetch.patch(`post/edit?newsId=${newsId}`, payload);

  if (!res.ok) {
    return { success: false, message: 'Failed to update news' };
  }

  const result = await res.json();

  return result;
};
