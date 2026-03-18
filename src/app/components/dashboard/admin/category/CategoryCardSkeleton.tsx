'use client';

const CategoryCardSkeleton = () => {
  // Render multiple skeleton cards for a list
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="p-4 border border-border rounded-xl bg-card animate-pulse flex flex-col gap-3"
        >
          {/* Title Skeleton */}
          <div className="h-5 w-3/4 bg-muted rounded-lg" />

          {/* Description Skeleton */}
          <div className="h-3 w-full bg-muted rounded" />
          <div className="h-3 w-5/6 bg-muted rounded" />

          {/* Buttons / Actions Skeleton */}
          <div className="flex gap-2 mt-2">
            <div className="h-6 w-16 bg-muted rounded" />
            <div className="h-6 w-16 bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCardSkeleton;
