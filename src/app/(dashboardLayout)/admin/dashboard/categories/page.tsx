import CategoryCardSkeleton from '@/app/components/dashboard/admin/category/CategoryCardSkeleton';
import CategoryWrapper from '@/app/components/dashboard/admin/category/CategoryWrapper';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense fallback={<CategoryCardSkeleton />}>
        <CategoryWrapper />
      </Suspense>
    </div>
  );
};

export default page;
