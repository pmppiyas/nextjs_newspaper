import AccountPageWrapper from '@/app/components/shared/account/AcoountPageWrapper';
import ProfileBoxSkeleton from '@/app/components/shared/account/ProfileBoxSkeleton';
import { Suspense } from 'react';

const page = async () => {
  return (
    <div>
      <Suspense fallback={<ProfileBoxSkeleton />}>
        <AccountPageWrapper />
      </Suspense>
    </div>
  );
};

export default page;
