import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';
import { API_ROUTES } from './apiRoutes';

const getProducts = async (category: string) => {
  const url = category
    ? `${API_ROUTES.getProductsByCategory}/${category}`
    : API_ROUTES.getProducts;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const useGetProducts = (category: string) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => getProducts(category),
    enabled: true,
  });
};
