import { serverFetch } from '@/utils/serverFetch';

export async function getAllJournalistsRequests() {
  try {
    const res = await serverFetch.get('journalist/requests', {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        errorData.message || 'জার্নালিস্ট রিকোয়েস্ট ডাটা লোড করতে সমস্যা হয়েছে।'
      );
    }

    const result = await res.json();

    return {
      data: result.data.data || [],
      meta: result.data.meta || null,
      success: true,
    };
  } catch (error: any) {
    return {
      data: [],
      error: error.message || 'Something went wrong',
      success: false,
    };
  }
}
