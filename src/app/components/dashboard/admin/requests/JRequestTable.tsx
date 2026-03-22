'use client';

import { JRequestColumn } from '@/app/components/dashboard/admin/requests/JRequestColumn';
import ManagementTable from '@/app/components/shared/dashboard/ManagementTable';
import { IRequest } from '@/interfaces/user.interface';

const JRequestTable = ({ requests }: { requests: IRequest[] }) => {
  return (
    <div>
      <ManagementTable
        data={requests}
        columns={JRequestColumn}
        getRowKey={(journalist) => journalist.id}
      />
    </div>
  );
};

export default JRequestTable;
