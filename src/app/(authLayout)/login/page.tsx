import LoginPage from '@/app/components/auth/LoginPage';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <LoginPage />
    </Suspense>
  );
};

export default page;
