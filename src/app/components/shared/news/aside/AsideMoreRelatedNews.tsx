import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const AsideMoreRelatedNews = () => {
  const relatedNews = [
    {
      id: 1,
      title: 'বাজেট ২০২৬: সাধারণ মানুষের প্রত্যাশা ও প্রাপ্তি',
      category: 'অর্থনীতি',
      image:
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=150&h=100&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'স্মার্ট সিটি প্রকল্পের অগ্রগতি নিয়ে নতুন নির্দেশনা',
      category: 'জাতীয়',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=150&h=100&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'পরিবেশ রক্ষায় প্লাস্টিক বর্জ্য ব্যবস্থাপনার নতুন কৌশল',
      category: 'পরিবেশ',
      image:
        'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=150&h=100&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-card p-4 rounded-xl shadow-sm border border-primary/5">
      {/* টাইটেল */}
      <h3 className="font-bold mb-4 text-lg border-l-4 border-primary pl-3">
        এরকম আরও সংবাদ
      </h3>

      <div className="flex flex-col gap-4">
        {relatedNews.map((news) => (
          <div
            key={news.id}
            className="group flex gap-3 items-center cursor-pointer border-b border-muted last:border-0 pb-3 last:pb-0"
          >
            {/* ছোট ইমেজ থাম্বনেইল */}
            <div className="relative w-20 h-16 shrink-0 overflow-hidden rounded-md">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* নিউজ টাইটেল ও ক্যাটাগরি */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                {news.category}
              </span>
              <h4 className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {news.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* সব খবর দেখুন বাটন */}
      <button className="w-full mt-4 py-2 text-xs font-semibold text-muted-foreground hover:text-primary flex items-center justify-center gap-1 transition-colors border-t pt-3">
        সব খবর দেখুন <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
};

export default AsideMoreRelatedNews;
