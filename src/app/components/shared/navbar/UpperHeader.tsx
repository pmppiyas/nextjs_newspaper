import Logo from '@/app/components/shared/Logo';
import MobileMenu from '@/app/components/shared/navbar/MobileMenu';
import SocialIcon from '@/app/components/shared/navbar/SocialIcon';
import {
  MapPin,
  Calendar,
  Facebook,
  Twitter,
  Youtube,
  Menu,
} from 'lucide-react';

const UpperHeader = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="border-b ">
      <div className="max-w-7xl mx-auto ">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-3 md:hidden">
          <Logo />
          <MobileMenu />
        </div>

        {/* Desktop Header */}
        <div className=" hidden md:flex items-center justify-between py-5 px-8  ">
          {/* Left - Logo */}
          <div>
            <Logo />
          </div>

          {/* Center - Date & Location */}
          <div className=" flex items-center  justify-center gap-4">
            <div className="flex items-center justify-center gap-1 text-sm">
              <Calendar size={16} />
              <span>{today}</span>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm ">
              <MapPin size={16} />
              <span>Gaibandha, Bangladesh</span>
            </div>
          </div>

          {/* Right - Social Icons */}
          <SocialIcon />
        </div>
      </div>
    </header>
  );
};

export default UpperHeader;
