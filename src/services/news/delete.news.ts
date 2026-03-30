import { serverFetch } from '@/utils/serverFetch';

export async function deleteNews(newsId: string) {
  try {
    const res = await serverFetch.delete(`post/delete?newsId=${newsId}`);

    if (!res.ok) {
      return { success: false, message: 'Failed to delete news' };
    }

    
    const result = await res.json();

    return result;
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
}
