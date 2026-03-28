import { serverFetch } from '@/utils/serverFetch';

export async function getAdminStats() {
  try {
    const res = await serverFetch.get('meta/admin');

    if (!res.ok) {
      throw new Error('Failed to fetch admin statistics');
    }

    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || 'Something went wrong');
    }

    return result.data;
  } catch (error) {
    return {
      news: 0,
      reader: 0,
      journalist: 0,
      views: 0,
      pendingJournalist: 0,
    };
  }
}
