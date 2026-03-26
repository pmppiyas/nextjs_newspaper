import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Eye } from 'lucide-react';
import { INews } from '@/interfaces/news.Interface';

interface NewsCardProps {
  news: INews;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const formattedDate = new Date(news.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="group bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            {news.category.name}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col grow">
        <Link href={`/news/${news.id}`}>
          <h3 className="text-lg font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
            {news.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm mt-2 line-clamp-3 grow">
          {news.content}
        </p>

        <div className="flex items-center justify-between mt-4 pt-3 border-t text-[12px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {news.viewCount} Views
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
