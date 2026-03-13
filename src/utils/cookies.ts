import Cookies from 'js-cookie';

interface CookieParams {
  accessToken?: string;
  refreshToken?: string;
}

export const setCookie = ({ accessToken, refreshToken }: CookieParams) => {
  if (accessToken) {
    Cookies.set('access_token', accessToken, {
      expires: 7,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
  }

  if (refreshToken) {
    Cookies.set('refresh_token', refreshToken, {
      expires: 30,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
  }
};
