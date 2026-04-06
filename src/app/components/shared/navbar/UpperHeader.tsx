import Logo from '@/app/components/shared/Logo';
import DateLocation from '@/app/components/shared/navbar/DateLocation';
import MobileMenu from '@/app/components/shared/navbar/MobileMenu';
import SocialIcon from '@/app/components/shared/navbar/SocialIcon';
import { getMe } from '@/services/auth/getMe';
import Link from 'next/link';

const UpperHeader = async () => {
  const user = await getMe();

  return (
    <header className="border-b ">
      <div className="max-w-7xl mx-auto ">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-2 md:hidden">
          <Logo />
          <MobileMenu />
        </div>

        {/* Desktop Header */}
        <div className=" hidden md:flex items-center justify-between py-3 px-4  ">
          <div>
            <Logo />
          </div>

          {/* Center - Date & Location */}
          <DateLocation />

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
