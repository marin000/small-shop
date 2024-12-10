import { MISSING_SERVER_URL } from '../constants/errorMessages';

const serverApiUrl = import.meta.env.VITE_SERVER_API_URL;

if (!serverApiUrl) {
  console.error('Server API URL is not defined');
  throw new Error(MISSING_SERVER_URL);
}

export const config = {
  serverApiUrl,
};
