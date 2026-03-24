'use client';

import { setCookie } from '@/utils/cookies';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      setCookie({ accessToken: token });
      router.replace('/');
    } else {
      router.replace('/login');
    }
  }, [searchParams, router]);

  return null;
}
