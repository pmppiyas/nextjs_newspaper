import { Suspense } from 'react';
import JRequestHeader from '@/app/components/dashboard/admin/requests/JRequestHeader';
import JRequestWrapper from '@/app/components/dashboard/admin/requests/JRequestWrapper';
import TableSkeleton from '@/app/components/shared/skeleton/TableSkeleton';

const page = () => {
  return (
    <div>
      <JRequestHeader />
      <Suspense fallback={<TableSkeleton />}>
        <JRequestWrapper />
      </Suspense>
    </div>
  );
};

export default page;
