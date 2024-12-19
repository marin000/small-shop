const getToken = (): string | null => {
  return localStorage.getItem('token');
};

const getRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken');
};

const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

const setRefreshToken = (refreshToken: string): void => {
  localStorage.setItem('refreshToken', refreshToken);
};

const clearTokens = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};

export {
  getToken,
  getRefreshToken,
  setToken,
  setRefreshToken,
  clearTokens,
};
