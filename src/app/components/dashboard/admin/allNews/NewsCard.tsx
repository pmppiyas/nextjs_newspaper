'use client';

import Image from 'next/image';
import { Calendar, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { INews } from '@/interfaces/news.Interface';
import DeleteConfirmationDialog from '@/app/components/shared/dashboard/DeleteConformationDialog';
import { useState } from 'react';
import { deleteNews } from '@/services/news/delete.news';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const NewsCard = ({ news }: { news: INews }) => {
  const router = useRouter();

  const [deleteNewsId, setDeleteNewsId] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDelete = (newsId: string) => {
    setDeleteNewsId(newsId);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!deleteNewsId) return;
    try {
      const result = await deleteNews(deleteNewsId);

      if (result?.success) {
        router.refresh();
        toast.success(result.message);
      } else {
        toast.error(
          result?.message || 'Failed to delete news. Please try again.'
        );
      }
    } catch (error) {
      toast.error('Failed to delete news. Please try again.');
    }
  };

  const handleView = async (newsId: string) => {
    router.push(`/news/${newsId}`);
  };
  return (
    <>
      <div className="group bg-card text-card-foreground border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center p-3 gap-5">
        <div className="relative h-32 w-full sm:w-48 shrink-0 overflow-hidden rounded-lg bg-muted ">
          <Image
            src={news.imageUrl || 'https://example.com/image7.jpg'}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 200px"
          />
          <div className="absolute top-2 left-2 z-10">
            <span className="px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-medium rounded-md uppercase">
              {news.category?.name}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-3 text-muted-foreground text-[11px]">
            <div className="flex items-center gap-1">
              <Calendar size={13} />
              {new Date(news.publishedAt).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Eye size={13} />
              {news.viewCount} Views
            </div>
          </div>

          <h3 className="text-base font-bold text-foreground line-clamp-1 truncate">
            {news.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-snug">
            {news.content}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {news.tags?.slice(0, 2).map((tag: any) => (
              <span
                key={tag.id}
                className="text-[10px] text-background bg-secondary px-2 py-0.5 rounded-md"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto sm:border-l sm:pl-5 sm:h-24">
          <Button className="flex-1 sm:flex-none p-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors group/btn">
            <Edit size={18} />
            Edit
          </Button>
          <Button onClick={()=> handleView(news.id)}
            className="flex-1 sm:flex-none p-2 bg-popover text-foreground hover:bg-chart-3 hover:text-background rounded-lg transition-colors"
            variant="outline"
          >
            <Eye size={18} />
            View
          </Button>
          <Button
            onClick={() => handleDelete(news.id)}
            className="flex-1 sm:flex-none p-2 bg-destructive/10 text-destructive hover:bg-destructive hover:text-background rounded-lg transition-colors"
          >
            <Trash2 size={18} />
            Delete
          </Button>
        </div>
      </div>

      <DeleteConfirmationDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default NewsCard;
