import Logo from '@/app/components/shared/Logo';
import { MapPin, Calendar, Facebook, Twitter, Youtube } from 'lucide-react';

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
        <div className="flex items-center justify-between py-3 md:hidden">
          <Logo />
        </div>

        {/* Desktop Header */}
        <div className=" hidden md:flex items-center justify-between p-5  ">
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
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">
              <Facebook size={18} />
            </a>

            <a href="#" className="hover:text-sky-500">
              <Twitter size={18} />
            </a>

            <a href="#" className="hover:text-red-600">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UpperHeader;
