import DraftsWrapper from '@/app/components/dashboard/admin/drafts/DraftsWrapper';
import NewsFormSkeleton from '@/app/components/dashboard/admin/drafts/NewsFormSkeleton';
import { Suspense } from 'react';
export const dynamic = 'force-dynamic';

const page = () => {
  return (
    <Suspense fallback={<NewsFormSkeleton />}>
      <DraftsWrapper />
    </Suspense>
  );
};

export default page;
