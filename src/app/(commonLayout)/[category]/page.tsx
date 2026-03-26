import { Suspense } from 'react';
import Header from '@/app/components/shared/Header';
import CategoryContent from '@/app/components/common/CategoryContent';
import NewsCardSkeleton from '@/app/components/shared/news/NewsCardSeletonX';

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: IProps) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.category);

  return (
    <div className="container mx-auto py-10 min-h-screen">
      <Header title={categoryName} />

      <Suspense fallback={<NewsCardSkeleton />}>
        <CategoryContent categoryName={categoryName} />
      </Suspense>
    </div>
  );
}
