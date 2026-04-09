import DraftsWrapper from '@/app/components/dashboard/admin/drafts/DraftsWrapper';
import NewsFormSkeleton from '@/app/components/shared/skeleton/NewsFormSkeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<NewsFormSkeleton />}>
      <DraftsWrapper />
    </Suspense>
  );
};

export default page;
