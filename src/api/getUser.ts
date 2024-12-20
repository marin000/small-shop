import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';
import { API_ROUTES } from './apiRoutes';
import { UserData } from '@/types/user';

const getUser = async (userId: number) => {
  const response = await axiosInstance.get(
    API_ROUTES.getUser(userId)
  );
  return response.data;
};

export const useGetUser = (userId: number) => {
  return useQuery<UserData>({
    queryKey: ['user'],
    queryFn: () => getUser(userId),
  });
};