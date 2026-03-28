'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark, Calendar, Eye } from 'lucide-react';
import { INews } from '@/interfaces/news.Interface';
import { toggleBookmark } from '@/services/bookmarks/addBookmark';
import { checkBookmark } from '@/services/bookmarks/checkBookmark';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface NewsCardProps {
  news: INews;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await checkBookmark(news.id);

        if (response.success) {
          setIsBookmarked(response.data);
        }
      } catch (error) {
        console.error('বুকমার্ক স্ট্যাটাস লোড হয়নি');
      }
    };

    fetchStatus();
  }, [news.id]);

  const handleToggleBookmark = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const previousState = isBookmarked;
    setIsBookmarked(!previousState);
    setIsLoading(true);

    try {
      const response = await toggleBookmark(news.id);

      if (response.success) {
        router.refresh();
        toast.success(response.message);
      } else if (response.statusCode === 401) {
        router.replace('/login');
        setIsBookmarked(previousState);
        toast.error('অনুগ্রহ করে লগইন করুন');
      } else {
        setIsBookmarked(previousState);
        toast.error(response.message);
      }
    } catch (error) {
      setIsBookmarked(previousState);
      toast.error('বুকমার্ক আপডেট করতে সমস্যা হয়েছে');
    } finally {
      setIsLoading(false);
    }
  };

  const formattedDate = new Date(news.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="group bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative">
      <Link href={`/news/${news.id}`}>
        <div className="relative h-44 w-full overflow-hidden">
          {news?.imageUrl && (
            <Image
              src={news?.imageUrl}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
              {news?.category?.name}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col grow">
        <Link href={`/news/${news.id}`}>
          <h3 className="text-xl font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors cursor-pointer mb-4">
            {news.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-auto pt-3 border-t text-[12px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {news.viewCount || 0}
            </div>

            <button
              onClick={handleToggleBookmark}
              disabled={isLoading}
              className={`p-1.5 rounded-full transition-all duration-200 ${
                isBookmarked
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-slate-100 text-slate-400 hover:text-primary'
              }`}
            >
              <Bookmark
                className={`w-4 h-4 transition-all duration-300 ${
                  isBookmarked
                    ? 'fill-primary stroke-primary'
                    : 'stroke-current'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
