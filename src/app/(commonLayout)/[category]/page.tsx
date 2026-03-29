import { Suspense } from 'react';
import Header from '@/app/components/shared/Header';
import CategoryContent from '@/app/components/common/[category]/CategoryContent';

import SquareNewsCardSkeleton from '@/app/components/shared/skeleton/SquareNewsCardSkeleton';
interface IProps {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: IProps) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.category);

  return (
    <div className="container mx-auto py-10 min-h-screen px-4 md:px-8 lg:px-12 ">
      <Header title={categoryName} />

      <Suspense fallback={<SquareNewsCardSkeleton />}>
        <CategoryContent categoryName={categoryName} />
      </Suspense>
    </div>
  );
}
