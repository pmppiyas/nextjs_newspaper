'use client';

import { cn } from '@/lib/utils';

interface CategoryCardProps {
  id: string;
  name: string;
  description?: string | null;
  isActive?: boolean;
  onClick?: (id: string) => void;
}

export default function CategoryCard({
  id,
  name,
  description,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={() => onClick?.(id)}
      className={cn(
        'p-4 rounded-xl border cursor-pointer transition-all',
        'bg-card border-border hover:bg-muted',
        isActive && 'border-primary bg-muted'
      )}
    >
      <h3 className="font-semibold text-lg">{name}</h3>

      {description && (
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
      )}
    </div>
  );
}
