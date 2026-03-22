import JournalistHeader from '@/app/components/dashboard/admin/journalist/JournalistHeader';
import JournalistTable from '@/app/components/dashboard/admin/journalist/JournalistTable';
import { getAllJournalists } from '@/services/journalist/get.journalist';

const JournalistWrapper = async () => {
  const { data } = await getAllJournalists();

  return (
    <div>
      <JournalistTable journalists={data} />
    </div>
  );
};

export default JournalistWrapper;
