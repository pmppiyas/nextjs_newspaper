import { Suspense } from 'react';
import NewsCardSkeleton from '@/app/components/shared/skeleton/NewsCardSeletonX';
import NewsListWrapper from '@/app/components/dashboard/admin/allNews/NewsListWrapper';
import NewsHeader from '@/app/components/dashboard/admin/allNews/NewsHeader';

type TSearchParams = Promise<Record<string, string | undefined>>;

const ArticlesPage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const params = await searchParams;

  return (
    <div>
      <NewsHeader />
      <Suspense fallback={<NewsCardSkeleton />}>
        <NewsListWrapper params={params} />
      </Suspense>
    </div>
  );
};

export default ArticlesPage;
