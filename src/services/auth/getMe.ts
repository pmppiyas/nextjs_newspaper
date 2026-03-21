'use server';
import { serverFetch } from '@/utils/serverFetch';

export const getMe = async () => {
  try {
    const res = await serverFetch.get('user/me', {
      next: {
        revalidate: 0,
      },
    });

    const result = await res.json();
    if (result.success) {
      return result.data;
    } else {
      return {};
    }
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
