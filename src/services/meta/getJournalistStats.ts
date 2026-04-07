import { serverFetch } from '@/utils/serverFetch';

export async function getJournalistStats() {
  try {
    const res = await serverFetch.get('meta/journalist');

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
      total: 0,
      approve: 0,
      pending: 0,
      reject: 0,
      views: 0,
    };
  }
}
