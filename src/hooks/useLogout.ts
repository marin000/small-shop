import { clearTokens } from '@/services/tokenService';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    clearTokens();
    navigate('/login');
  };
};
