import Cookies from 'js-cookie';

const getToken = (): string | null => {
  return Cookies.get('token') || null;
};

const getRefreshToken = (): string | null => {
  return Cookies.get('refreshToken') || null;
};

const setToken = (token: string): void => {
  Cookies.set('token', token, { expires: 1 });
};

const setRefreshToken = (refreshToken: string): void => {
  Cookies.set('refreshToken', refreshToken, { expires: 7 });
};

const setTokens = (
  accessToken: string,
  refreshToken: string
): void => {
  setToken(accessToken);
  setRefreshToken(refreshToken);
};

const clearTokens = (): void => {
  Cookies.remove('token');
  Cookies.remove('refreshToken');
};

export {
  getToken,
  getRefreshToken,
  setToken,
  setRefreshToken,
  clearTokens,
  setTokens,
};
