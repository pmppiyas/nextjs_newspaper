import MyArticlesHeader from '@/app/components/dashboard/journalist/articles/MyArticlesHeader';
import MyArticlesWrapper from '@/app/components/dashboard/journalist/articles/MyArticlesWrapper';
import NewsCardSkeleton from '@/app/components/shared/skeleton/NewsCardSeletonX';
import { Suspense } from 'react';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ status: string }>;
}) => {
  const params = await searchParams;
  const currentStatus = params.status?.toUpperCase();

  return (
    <div>
      <MyArticlesHeader status={currentStatus} />
      <Suspense fallback={<NewsCardSkeleton />}>
        <MyArticlesWrapper status={currentStatus} />
      </Suspense>
    </div>
  );
};

export default page;
