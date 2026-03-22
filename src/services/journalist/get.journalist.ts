import { serverFetch } from '@/utils/serverFetch';

export async function getAllJournalists() {
  try {
    const res = await serverFetch.get('journalist', {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        errorData.message || 'জার্নালিস্ট ডাটা লোড করতে সমস্যা হয়েছে।'
      );
    }

    const result = await res.json();

    return result.data || [];
  } catch (error: any) {
    return {
      data: [],
      error: error.message || 'Something went wrong',
    };
  }
}
