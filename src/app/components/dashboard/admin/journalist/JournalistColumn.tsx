import { UserInfoCell } from '@/app/components/shared/cell/UserInfoCell';
import { IColumn } from '@/interfaces/dashboard.interface';
import { IUser } from '@/interfaces/user.interface';

export const JournalistColumns: IColumn<IUser>[] = [
  {
    header: 'Person',
    accessor: (user: IUser) => (
      <UserInfoCell name={user.name} photo={user.picture} />
    ),
  },

  {
    header: 'Email',

    accessor: (user: IUser) => <h3>{user.email}</h3>,
  },
];
