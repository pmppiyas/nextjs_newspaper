import AdminPageHeader from '@/app/components/dashboard/admin/main/AdminPageHeader';
import AdminPageWrapper from '@/app/components/dashboard/admin/main/AdminPageWrapper';
import StatsSkeleton from '@/app/components/shared/skeleton/StatsSkeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <>
      <AdminPageHeader />
      <Suspense
        fallback={
          <>
            <StatsSkeleton />
          </>
        }
      >
        <AdminPageWrapper />
      </Suspense>
    </>
  );
};

export default page;
