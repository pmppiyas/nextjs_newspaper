import { UserInfoCell } from '@/app/components/shared/cell/UserInfoCell';
import { IColumn } from '@/interfaces/dashboard.interface';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { IRequest } from '@/interfaces/user.interface';

export const JRequestColumn: IColumn<IRequest>[] = [
  {
    header: 'আবেদনকারী',
    accessor: (row) => (
      <UserInfoCell name={row.user?.name} photo={row.user?.picture} />
    ),
    className: 'text-left font-medium',
  },
  {
    header: 'ইমেইল',
    accessor: (row) => (
      <span className="text-muted-foreground text-sm">{row.user?.email}</span>
    ),
  },
  {
    header: 'আকাঙ্ক্ষিত রোল',
    accessor: (row) => (
      <Badge
        variant="outline"
        className="capitalize bg-blue-50 text-blue-700 border-blue-200"
      >
        {row.role?.toLowerCase()}
      </Badge>
    ),
  },
  {
    header: 'আবেদনের তারিখ',
    accessor: (row) => (
      <div className="text-xs text-muted-foreground">
        {row.createdAt
          ? format(new Date(row.createdAt), 'dd MMM, yyyy')
          : 'N/A'}
      </div>
    ),
  },
  {
    header: 'স্ট্যাটাস',
    accessor: (row) => (
      <Badge
        variant={row.status === 'PENDING' ? 'secondary' : 'default'}
        className={
          row.status === 'PENDING'
            ? 'bg-amber-100 text-amber-700 hover:bg-amber-100'
            : ''
        }
      >
        {row.status}
      </Badge>
    ),
  },
];
