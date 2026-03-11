import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Logo from '@/app/components/shared/Logo';
import Link from 'next/link';
import SocialIcon from '@/app/components/shared/navbar/SocialIcon';

const categories = [
  'জাতীয়',
  'আন্তর্জাতিক',
  'রাজনীতি',
  'অর্থনীতি',
  'খেলাধুলা',
  'বিনোদন',
  'বাংলাদেশ',
  'ইসলামী বিশ্ব',
];

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent side="right" className="max-w-8/12 ">
        <div className="mb-6 p-3 border-b">
          <Logo />
        </div>

        <div className="flex flex-col justify-between h-full pb-10">
          <ul className="flex flex-col gap-4 items-center">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="block text-lg hover:text-primary transition"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>

          <SocialIcon />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
