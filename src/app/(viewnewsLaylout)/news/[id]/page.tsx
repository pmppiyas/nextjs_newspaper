import { INews } from '@/interfaces/news.Interface';
import { getNewsById } from '@/services/news/get.ById';
import Image from 'next/image';
import { Calendar, Eye, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { banglaDayFormatter } from '@/utils/formatter';

interface IProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: IProps) => {
  const resolvedParams = await params;
  const newsId = decodeURIComponent(resolvedParams.id);
  const { news }: { news: INews } = await getNewsById(newsId);

  const formattedDate = banglaDayFormatter(news.publishedAt);

  return (
    <div className="w-full mx-auto mb-10">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        ফিরে যান
      </Link>

      <article className="bg-card border rounded-2xl overflow-hidden shadow-sm">
        {/* Title Section */}
        <div className="p-6 md:p-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
            {news.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-muted/50 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {news.viewCount} বার পড়া হয়েছে
              </div>
            </div>

            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Share2 className="w-4 h-4" />
              শেয়ার
            </button>
          </div>
        </div>

        {/* Image Section */}
        {news.imageUrl && (
          <div className="relative w-full aspect-video md:aspect-21/9">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {news?.content}
            </p>
          </div>

          {/* Tags / Footer Info */}
          <div className="mt-12 pt-6 border-t">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Category: {news?.category?.name}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Page;
