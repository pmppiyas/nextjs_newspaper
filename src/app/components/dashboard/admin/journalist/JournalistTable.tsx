'use client';

import { JournalistColumns } from '@/app/components/dashboard/admin/journalist/JournalistColumn';
import ManagementTable from '@/app/components/shared/dashboard/ManagementTable';
import { IUser } from '@/interfaces/user.interface';

const JournalistTable = ({ journalists }: { journalists: IUser[] }) => {
  return (
    <div>
      <ManagementTable
        data={journalists}
        columns={JournalistColumns}
        getRowKey={(journalist) => journalist.id}
      />
    </div>
  );
};

export default JournalistTable;
