import { Skeleton } from '@/components/ui/skeleton';

const StatsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="bg-card border rounded-xl p-5 flex items-center gap-4 h-25 shadow-sm"
        >
          <Skeleton className="h-12 w-12 rounded-lg shrink-0" />

          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[60%]" />

            <Skeleton className="h-7 w-[40%]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSkeleton;
