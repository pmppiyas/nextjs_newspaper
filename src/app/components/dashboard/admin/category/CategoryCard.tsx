'use client';

import { cn } from '@/lib/utils';
import { Edit, Trash2 } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description?: string | null;
  isActive?: boolean;
  onClick?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function CategoryCard({
  id,
  name,
  description,
  isActive,
  onClick,
  onEdit,
  onDelete,
}: CategoryCardProps) {
  return (
    <div
      onClick={() => onClick?.(id)}
      className={cn(
        'group relative p-4 rounded-xl border cursor-pointer transition-all overflow-hidden',
        'bg-card border-border hover:border-primary/50',
        isActive && 'border-primary bg-muted'
      )}
    >
      {/* Content Section */}
      <div className="pr-12">
        <h3 className="font-semibold text-lg">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Action Buttons (Right Tray) */}
      <div className="absolute top-0 right-0 h-full flex flex-col border-l border-border bg-muted/50 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit?.(id);
          }}
          className="flex-1 px-3 hover:bg-primary/10 hover:text-primary transition-colors border-b border-border"
          title="সম্পাদনা করুন"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.(id);
          }}
          className="flex-1 px-3 hover:bg-destructive/10 hover:text-destructive transition-colors"
          title="মুছে ফেলুন"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
