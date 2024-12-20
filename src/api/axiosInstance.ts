import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { config } from '../config';
import {
  clearTokens,
  getRefreshToken,
  getToken,
  setTokens,
} from '@/services/tokenService';
import { API_ROUTES } from './apiRoutes';

interface CustomAxiosRequestConfig
  extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

const handleLogout = (error: AxiosError) => {
  clearTokens();
  if (window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
  return Promise.reject(error);
};

const axiosInstance = axios.create({
  baseURL: config.serverApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    const token: string | null = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    const errorStatus = error.response?.status;

    if (errorStatus === 500) {
      console.error(error);
      return Promise.resolve({ data: null, error: 'Server Error' });
    }

    if (errorStatus === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken: string | null = getRefreshToken();
        if (!refreshToken) return handleLogout(error);

        const expiresInMins = 7 * 24 * 60; // 7 days
        const response: AxiosResponse<RefreshTokenResponse> =
          await axiosInstance.post(API_ROUTES.refreshToken, {
            refreshToken,
            expiresInMins,
          });

        if (response.status === 200) {
          const { accessToken, refreshToken } = response.data;
          setTokens(accessToken, refreshToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        } else {
          return handleLogout(error);
        }
      } catch (err) {
        return handleLogout(err as AxiosError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
