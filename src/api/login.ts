import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useToastContext } from '@/providers/toastContext';
import { LoginFormData } from '@/types/login';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from './apiRoutes';
import axiosInstance from './axiosInstance';
import { ApiResponse } from '@/types/global';
import { setTokens } from '@/services/tokenService';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const loginRequest = async (data: LoginFormData) => {
  const { username, password } = data;
  const expiresInMins = 7 * 24 * 60; // 7 days
  const postData = { username, password, expiresInMins };
  return await axiosInstance.post(API_ROUTES.login, postData);
};

export const useLoginRequest = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showToast } = useToastContext();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data: ApiResponse<LoginResponse>) => {
      const { accessToken, refreshToken } = data.data;
      setTokens(accessToken, refreshToken);
      navigate('/');
    },
    onError: (error: AxiosError) => {
      if (error.status === 400) {
        showToast(
          t('toast.login.invalidCredentialsTitle'),
          t('toast.login.invalidCredentialsMsg'),
          'error'
        );
      } else {
        showToast(
          t('toast.general.serverErrorTitle'),
          t('toast.general.serverErrorMsg'),
          'error'
        );
      }
    },
  });
};