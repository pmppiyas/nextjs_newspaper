import ProfileBox from '@/app/components/shared/account/ProfilePage';
import { IUser } from '@/interfaces/user.interface';
import { getMe } from '@/services/auth/getMe';

const AcoountPageWrapper = async () => {
  const user = await getMe();
  return (
    <div>
      <ProfileBox user={user as IUser} />
    </div>
  );
};

export default AcoountPageWrapper;
