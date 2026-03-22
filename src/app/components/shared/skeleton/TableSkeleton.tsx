import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TableSkeleton() {
  return (
    <div className="container max-w-7xl mx-auto  space-y-8 animate-pulse">
      {/* Table Skeleton */}
      <div className="w-full border rounded-xl bg-card overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              {[1, 2, 3, 4, 5].map((i) => (
                <TableHead key={i} className="px-6 py-4">
                  <Skeleton className="h-4 w-20 mx-auto" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(10)].map((_, rowIndex) => (
              <TableRow key={rowIndex} className="border-b last:border-0">
                {[1, 2, 3, 4, 5].map((colIndex) => (
                  <TableCell key={colIndex} className="px-6 py-5 text-center">
                    {colIndex === 1 ? (
                      <div className="flex items-center gap-3 justify-center">
                        <Skeleton className="h-9 w-9 rounded-full" />
                        <div className="space-y-1">
                          <Skeleton className="h-3 w-24" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                    ) : (
                      <Skeleton className="h-4 w-16 mx-auto" />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
