import CategoryCardSkeleton from '@/app/components/dashboard/admin/category/CategoryCardSkeleton';
import CategoryHeader from '@/app/components/dashboard/admin/category/CategoryHeader';
import CategoryWrapper from '@/app/components/dashboard/admin/category/CategoryWrapper';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <CategoryHeader />
      <Suspense fallback={<CategoryCardSkeleton />}>
        <CategoryWrapper />
      </Suspense>
    </div>
  );
};

export default page;
