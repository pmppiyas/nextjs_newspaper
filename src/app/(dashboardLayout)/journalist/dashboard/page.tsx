import JournalistPageHeader from '@/app/components/dashboard/journalist/main/JournalistPageHeader';
import JournalistPageWrapper from '@/app/components/dashboard/journalist/main/JournalistPageWrapper';
import StatsSkeleton from '@/app/components/shared/skeleton/StatsSkeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <JournalistPageHeader />
      <Suspense fallback={<StatsSkeleton length={4} />}>
        <JournalistPageWrapper />
      </Suspense>
    </div>
  );
};

export default page;
