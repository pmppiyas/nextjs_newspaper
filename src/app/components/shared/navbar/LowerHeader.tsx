import { Search, House } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const categories = [
  'জাতীয়',
  'আন্তর্জাতিক',
  'রাজনীতি',
  'অর্থনীতি',
  'খেলাধুলা',
  'বিনোদন',
  'বাংলাদেশ',
  'ইসলামী বিশ্ব',
  'বিশেষ প্রতিবেদন',
  'বিশেষ সংখ্যা',
];

const LowerHeader = () => {
  return (
    <nav className="border-b border-border  hidden md:block bg-green-800 text-background">
      <div className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between h-14">
          {/* Categories */}
          <ul className="flex items-center gap-6 text-sm font-medium ">
            <li>
              <Link
                href="/"
                className="inline-block transition-transform duration-200 hover:scale-125"
              >
                <House />
              </Link>
            </li>
            {categories.map((cat, index) => (
              <li
                key={index}
                className="cursor-pointer transition-all hover:border-y-2 hover:py-1 "
              >
                <Link href={cat}> {cat}</Link>
              </li>
            ))}

            <li className="cursor-pointer transition-all hover:border-y-2 hover:py-1 ">
              আরও
            </li>
          </ul>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 w-55">
            <Search size={18} />
            <Input
              placeholder="অনুসন্ধান করতে লিখুন"
              className="h-8 placeholder:text-background"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LowerHeader;
