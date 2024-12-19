import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useToastContext } from '@/providers/toastContext';
import { LoginFormData } from '@/types/login';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from './apiRoutes';
import axiosInstance from './axiosInstance';
import { ApiResponse } from '@/types/global';
import { setToken } from '@/services/tokenService';

interface LoginResponse {
  accessToken: string;
}

const loginRequest = async (data: LoginFormData) => {
  const { username, password } = data;
  const postData = { username, password };
  return await axiosInstance.post(API_ROUTES.login, postData);
};

export const useLoginRequest = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showToast } = useToastContext();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data: ApiResponse<LoginResponse>) => {
      console.log(data);

      const { accessToken } = data.data;
      setToken(accessToken);
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
          t('toast.login.serverErrorTitle'),
          t('toast.login.serverErrorMsg'),
          'error'
        );
      }
    },
  });
};
