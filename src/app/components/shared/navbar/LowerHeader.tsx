import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-foreground" />
          </div>

          {/* Categories */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="cursor-pointer transition hover:text-primary"
              >
                {cat}
              </li>
            ))}

            <li className="cursor-pointer hover:text-primary">আরও</li>
          </ul>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 w-[220px]">
            <Search size={18} className="text-muted-foreground" />
            <Input placeholder="অনুসন্ধান করতে লিখুন" className="h-8" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LowerHeader;
