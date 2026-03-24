'use client';

import LoginSuccessContent from '@/app/components/shared/account/LoginSuccessContent';
import { Suspense } from 'react';

export default function LoginSuccess() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <LoginSuccessContent />
    </Suspense>
  );
}
