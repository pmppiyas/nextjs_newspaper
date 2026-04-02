const NewsCardSkeleton = () => (
  <div className="flex flex-col sm:flex-row items-center p-3 gap-5 border border-border rounded-xl animate-pulse bg-card">
    <div className="h-32 w-full sm:w-48 shrink-0 bg-muted rounded-lg" />
    <div className="flex-1 flex flex-col gap-3 w-full">
      <div className="h-3 w-32 bg-muted rounded" />
      <div className="h-5 w-3/4 bg-muted rounded" />
      <div className="h-4 w-full bg-muted rounded" />
      <div className="flex gap-2">
        <div className="h-4 w-12 bg-muted rounded" />
        <div className="h-4 w-12 bg-muted rounded" />
      </div>
    </div>
    <div className="hidden sm:block w-12 h-20 bg-muted rounded-lg" />
  </div>
);

export default NewsCardSkeleton;
