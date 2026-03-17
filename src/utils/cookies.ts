import Cookies from 'js-cookie';

interface CookieParams {
  accessToken?: string;
  refreshToken?: string;
}

export const setCookie = ({ accessToken, refreshToken }: CookieParams) => {
  if (accessToken) {
    Cookies.set('accessToken', accessToken, {
      expires: 7,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  }

  if (refreshToken) {
    Cookies.set('refreshToken', refreshToken, {
      expires: 30,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  }
};
