import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';
import { API_ROUTES } from './apiRoutes';

const getProducts = async (
  category: string,
  limit: number,
  skip: number
) => {
  const url = category
    ? API_ROUTES.getProductsByCategory(category, limit, skip)
    : API_ROUTES.getProducts(limit, skip);

  const response = await axiosInstance.get(url);
  return response.data;
};

export const useGetProducts = (
  category: string,
  limit: number,
  skip: number
) => {
  return useQuery({
    queryKey: ['products', category, limit, skip],
    queryFn: () => getProducts(category, limit, skip),
    placeholderData: keepPreviousData,
    enabled: true,
  });
};
