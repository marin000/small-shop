import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';
import { API_ROUTES } from './apiRoutes';

const getCategories = async () => {
  const response = await axiosInstance.get(API_ROUTES.getCategories);
  return response.data;
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};
