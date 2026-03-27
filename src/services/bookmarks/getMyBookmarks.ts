import { INews } from '@/interfaces/news.Interface';
import { serverFetch } from '@/utils/serverFetch';

export async function getMyBookmarks() {
  try {
    const res = await serverFetch.get('bookmark/my');

    if (!res.ok) {
      throw new Error('Something went wrong');
    }

    const result = await res.json();

    const spreadNews = result.data.map((item: INews) => ({
      ...item.news,
      bookmarkId: item.id,
    }));

    return {
      bookmarks: spreadNews,
      message: result.message,
    };
  } catch (error) {
    return {
      bookmarks: [],
    };
  }
}
