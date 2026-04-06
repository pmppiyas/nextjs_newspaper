import Headlines from '@/app/components/shared/navbar/HeadLines';
import LowerHeader from '@/app/components/shared/navbar/LowerHeader';
import UpperHeader from '@/app/components/shared/navbar/UpperHeader';
import LowerHeaderSkeleton from '@/app/components/shared/skeleton/LowerHeaderSkeleton';
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <div className="w-full">
      <UpperHeader />
      <Suspense fallback={<LowerHeaderSkeleton />}>
        <LowerHeader />
      </Suspense>

      <Headlines />
    </div>
  );
};

export default Navbar;
