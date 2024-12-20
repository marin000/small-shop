import useUserStore from '@/store/userStore';

const useUserActions = () => {
  const { user } = useUserStore((state) => state);

  const isUserLoggedIn = () => {
    return user && user.id !== null && user.id !== undefined;
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
