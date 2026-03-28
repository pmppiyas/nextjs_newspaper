import ReaderPageHeader from '@/app/components/dashboard/reader/main/ReaderPageHeader';
import ReaderPageWrapper from '@/app/components/dashboard/reader/main/ReaderPageWrapper';
import StatsSkeleton from '@/app/components/shared/skeleton/StatsSkeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <ReaderPageHeader />

      <Suspense
        fallback={
          <>
            <StatsSkeleton length={3} />
          </>
        }
      >
        <ReaderPageWrapper />
      </Suspense>
    </div>
  );
};

export default page;
