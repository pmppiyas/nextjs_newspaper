import { env } from '@/config/env.config';
import getCookie from '@/utils/getCookies';
import { jwtVerify } from 'jose';

export const getUserInfo = async () => {
  try {
    const accessToken = await getCookie('accessToken');
    if (!accessToken) {
      return null;
    }
    const secret = new TextEncoder().encode(env.JWT_SECRET);
    const { payload } = await jwtVerify(accessToken, secret);

    return {
      id: payload.id,
      email: payload.email,
      role: payload.role,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};
