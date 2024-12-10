import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';
import { API_ROUTES } from './apiRoutes';

const getProducts = async () => {
  const response = await axiosInstance.get(API_ROUTES.getProducts);
  return response.data;
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};
