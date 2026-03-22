import { Suspense } from 'react';
import JournalistHeader from '@/app/components/dashboard/admin/journalist/JournalistHeader';
import JournalistWrapper from '@/app/components/dashboard/admin/journalist/JournalistWrapper';
import HeaderSkeleton from '@/app/components/shared/skeleton/HeaderSkeleton';
import TableSkeleton from '@/app/components/shared/skeleton/TableSkeleton';

const page = () => {
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <JournalistHeader />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <JournalistWrapper />
      </Suspense>
    </div>
  );
};

export default page;
