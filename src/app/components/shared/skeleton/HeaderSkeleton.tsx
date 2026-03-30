import { Skeleton } from '@/components/ui/skeleton';

const HeaderSkeleton = () => {
  return (
    <div className="container max-w-7xl mx-auto  space-y-8 animate-pulse">
      <div className="w-full h-30 bg-muted/20 border rounded-xl flex items-center px-6 gap-4">
        <Skeleton className="h-14 w-14 rounded-xl shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
        <Skeleton className="h-10 w-32 rounded-lg" />
      </div>
    </div>
  );
};

export default HeaderSkeleton;
