import { clearTokens } from '@/services/tokenService';
import useUserStore from '@/store/userStore';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const removeUser = useUserStore((state) => state.removeUser);

  return () => {
    clearTokens();
    removeUser();
    navigate('/login');
  };
};
