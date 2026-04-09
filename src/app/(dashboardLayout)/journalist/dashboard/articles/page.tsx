import MyArticlesHeader from '@/app/components/dashboard/journalist/articles/MyArticlesHeader';
import MyArticlesWrapper from '@/app/components/dashboard/journalist/articles/MyArticlesWrapper';
import NewsCardSkeleton from '@/app/components/shared/skeleton/NewsCardSeletonX';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <MyArticlesHeader />

      <Suspense fallback={<NewsCardSkeleton />}>
        <MyArticlesWrapper />
      </Suspense>
    </div>
  );
};

export default page;
