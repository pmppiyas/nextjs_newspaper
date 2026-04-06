import { Search, House, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { getAllCategories } from '@/services/category/get.allCategory';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LowerHeader = async () => {
  const { categories } = await getAllCategories();

  const visibleCategories = categories.slice(0, 10);

  const remainingCategories = categories.slice(10);

  return (
    <nav className="border-b border-border hidden md:block bg-green-800 text-background">
      <div className="max-w-7xl mx-auto px-5 py-3">
        <div className="flex items-center justify-between h-14">
          {/* Categories List */}
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="inline-block transition-transform duration-200 hover:scale-125"
              >
                <House size={20} />
              </Link>
            </li>

            {visibleCategories.map((cat) => (
              <li
                key={cat.id}
                className="cursor-pointer transition-all hover:border-y-2 hover:py-1 whitespace-nowrap"
              >
                <Link href={`/${cat.name}`}>{cat.name}</Link>
              </li>
            ))}

            {remainingCategories.length > 0 && (
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer outline-none transition-all hover:border-y-2 hover:py-1">
                    আরও <ChevronDown size={14} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="bg-white p-2 min-w-[180px] shadow-2xl border-border animate-in fade-in zoom-in duration-200"
                  >
                    {remainingCategories.map((cat) => (
                      <DropdownMenuItem key={cat.id} asChild>
                        <Link
                          href={`/${cat.name}`}
                          className="w-full cursor-pointer px-3 py-2 text-sm text-slate-800 hover:bg-green-50 hover:text-green-800 rounded-sm transition-colors block"
                        >
                          {cat.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            )}
          </ul>

          {/* Search Box */}
          <div className="hidden md:flex items-center gap-2 w-55">
            <Search size={18} />
            <Input
              placeholder="অনুসন্ধান করতে লিখুন"
              className="h-8 placeholder:text-background/70 bg-green-700/50 border-none text-white focus-visible:ring-1 focus-visible:ring-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LowerHeader;
