import JRequestTable from '@/app/components/dashboard/admin/requests/JRequestTable';
import { getAllJournalistsRequests } from '@/services/journalist/get.journalistRequest';

const JRequestWrapper = async () => {
  const { data } = await getAllJournalistsRequests();

  return (
    <div>
      <JRequestTable requests={data} />
    </div>
  );
};

export default JRequestWrapper;
