import Headlines from '@/app/components/shared/navbar/HeadLines';
import LowerHeader from '@/app/components/shared/navbar/LowerHeader';
import UpperHeader from '@/app/components/shared/navbar/UpperHeader';

const Navbar = () => {
  return (
    <div className="w-full">
      <UpperHeader />
      <LowerHeader />
      <Headlines />
    </div>
  );
};

export default Navbar;
