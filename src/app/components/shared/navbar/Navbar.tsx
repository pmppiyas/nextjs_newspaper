import Headlines from '@/app/components/shared/navbar/HeadLines';
import LowerHeader from '@/app/components/shared/navbar/LowerHeader';
import UpperHeader from '@/app/components/shared/navbar/UpperHeader';
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <div className="w-full">
      <UpperHeader />
      <Suspense>
        <LowerHeader />
      </Suspense>

      <Headlines />
    </div>
  );
};

export default Navbar;
