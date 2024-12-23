import { getToken } from '@/services/tokenService';
import useUserStore from '@/store/userStore';

const useUserActions = () => {
  const { user } = useUserStore((state) => state);

  const isUserLoggedIn = () => {
    const token = getToken();
    const userInStore =
      user && user.id !== null && user.id !== undefined;
    return token && userInStore;
  };

  const getUserDetails = () => {
    if (isUserLoggedIn()) {
      return user;
    }
    return null;
  };

  return {
    isUserLoggedIn,
    getUserDetails,
  };
};

export default useUserActions;
