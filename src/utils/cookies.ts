'use server';

import { cookies } from 'next/headers';

const cookieStore = cookies();

interface CookieParams {
  accessToken?: string;
  refreshToken?: string;
}

export const setCookie = async ({
  accessToken,
  refreshToken,
}: CookieParams) => {
  if (accessToken) {
    (await cookieStore).set('accessToken', accessToken, {
      expires: 7,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
  }

  if (refreshToken) {
    (await cookieStore).set('refreshToken', refreshToken, {
      expires: 30,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
  }
};

export async function getCookie(name: string) {
  return (await cookieStore).get(name)?.value || null;
}
