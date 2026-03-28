import Logo from '@/app/components/shared/Logo';
import MobileMenu from '@/app/components/shared/navbar/MobileMenu';
import SocialIcon from '@/app/components/shared/navbar/SocialIcon';
import { getMe } from '@/services/auth/getMe';
import { MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

const UpperHeader = async () => {
  const user = await getMe();
  console.log(user);
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
        <div className="flex items-center justify-between p-2 md:hidden">
          <Logo />
          <MobileMenu />
        </div>

        {/* Desktop Header */}
        <div className=" hidden md:flex items-center justify-between py-3 px-8  ">
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
          <div className="flex gap-4 items-center justify-center">
            {user && user?.role ? (
              <Link
                href="/dashboard"
                className="hover:text-primary transition-colors font-medium"
              >
                ড্যাশবোর্ড
              </Link>
            ) : (
              <Link
                href="/login"
                className="hover:text-primary transition-colors font-medium"
              >
                লগইন
              </Link>
            )}
            ||
            <SocialIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default UpperHeader;
