import { serverFetch } from '@/utils/serverFetch';

export async function getReaderStats() {
  try {
    const res = await serverFetch.get('meta/reader');

    if (!res.ok) {
      throw new Error('Failed to fetch reader statistics');
    }

    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || 'Something went wrong');
    }

    return result.data;
  } catch (error) {
    return {
      readNews: 0,
      comments: 0,
      bookmarks: 0,
    };
  }
}
